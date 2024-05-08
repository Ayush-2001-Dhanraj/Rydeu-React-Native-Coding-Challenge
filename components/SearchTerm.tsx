import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

interface SearchTermProps { title: string, onPress: (term: string) => void };

const SearchTerm = ({ title, onPress }: SearchTermProps) => {
    return (
        <TouchableOpacity onPress={() => onPress(title)}>
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SearchTerm

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 5,
        marginBottom: 10,
        marginRight: 10,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    text: {
        fontSize: 12
    }
})