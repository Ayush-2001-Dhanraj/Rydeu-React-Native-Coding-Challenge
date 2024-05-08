import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text, StyleSheet, View, FlatList } from 'react-native';
import SearchBar from './components/SearchBar';
import axios from 'axios';
import { BASE_URL } from './utils/constants';
import Book from './components/Book';
import SearchTerm from './components/SearchTerm';
import EmptyList from './components/EmptyList';
import ClearView from './components/ClearView';

function App(): React.JSX.Element {
  const [query, setQuery] = useState<string>("")
  const [searchValue, setSearchValue] = useState<string>('');
  const [topWorks, setTopWorks] = useState<Array<any>>([]);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [previousSearches, setPreviousSearches] = useState<Array<string>>([])

  const onQueryChange = (e: React.SetStateAction<string>) => {
    setQuery(e);
  };

  const onSearchClear = () => {
    setQuery("");
  }

  const handleSearch = async (term: string = "") => {
    const queryParam: string = term || query;
    const res = await axios.get(`${BASE_URL}?q=${encodeURIComponent(queryParam)}`)
    let data: string | any[] = [];
    for (let i = 0; i < res.data.docs.length; i++) {
      const bookName = res.data.docs[i].top_work;
      if (bookName)
        data.push(res.data.docs[i].top_work)
    }
    setTopWorks([... new Set(data)])

    setSearchValue(queryParam);
    setPreviousSearches(preV => [... new Set([...preV, queryParam])])

  }

  const onReload = () => {
    setIsRefreshing(true)
    handleSearch()
    setIsRefreshing(false)
  }

  const onSearchTermPress = (term: string) => {
    setQuery(term)
    handleSearch(term)
  }

  const onPressClearView = () => {
    setQuery("");
    setSearchValue("");
    setTopWorks([]);
  }


  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <SearchBar value={query} onChange={onQueryChange} onSearch={handleSearch} onClear={onSearchClear} />
        <SafeAreaView>
          <Text style={styles.subtitle}>{!!previousSearches.length && 'Previous Searches...'}</Text>
          <FlatList
            horizontal
            data={previousSearches}
            renderItem={({ item }) => <SearchTerm title={item} onPress={onSearchTermPress} />}
            keyExtractor={item => item} />
        </SafeAreaView>
        <Text style={styles.heading}>{searchValue ? `${searchValue}'s Top Works` : "❤"}</Text>
        <SafeAreaView>
          <FlatList
            onRefresh={onReload}
            refreshing={isRefreshing}
            data={topWorks}
            ListEmptyComponent={<EmptyList searchValue={searchValue} />}
            renderItem={({ item }) => <Book title={item} />}
            keyExtractor={item => item} />
        </SafeAreaView>
      </View>
      <ClearView onPress={onPressClearView} isVisible={!!searchValue} />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: '100%',
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 10
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    marginBottom: 10
  }
});

export default App;
