import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface ClearViewProps {
    onPress: () => void,
    isVisible: boolean
}

const ClearView = ({ onPress, isVisible }: ClearViewProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            {isVisible && (
                <View style={styles.floatingBtn}>
                    <Text style={styles.text}>Clear</Text>
                </View>
            )}
        </TouchableOpacity>
    )
}

export default ClearView

const styles = StyleSheet.create({
    floatingBtn: {
        position: 'absolute',
        bottom: 75,
        right: 25,
        borderRadius: 50,
        padding: 10,
        backgroundColor: '#ccc',
        color: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 5,
    },
    text: {
        color: "#000",
        fontWeight: "700"
    }
})