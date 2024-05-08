import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

interface Props {
  value: string;
  onChange: (text: string) => void;
  onSearch: () => void;
  onClear: () => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange, onSearch, onClear }) => {
  const onPressSearch = () => onSearch();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder="Search Author name..."
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.clearButton} onPress={onPressSearch}>
        <Text style={styles.clearButtonText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.clearButton} onPress={onClear}>
        <Text style={styles.clearButtonText}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  clearButton: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  clearButtonText: {
    color: '#fff',
  },
});

export default SearchBar;
