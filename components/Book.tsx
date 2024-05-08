import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type BookProps = { title: string };

const Book = ({ title }: BookProps) => {
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
        </View>
    )
}

export default Book

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    }
})