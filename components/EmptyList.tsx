import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

type EmptyListProps = { searchValue: string }

const EmptyList = ({ searchValue }: EmptyListProps) => {
    return (
        <View>
            <Text style={styles.text}>{searchValue ? 'No Books found...' : `Made By: Ayush Dhanraj ${`\n`} (dhanrajaayush123@gmail.com)`}</Text>
        </View>
    )
}

export default EmptyList

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        textAlign: 'center',
    }
})