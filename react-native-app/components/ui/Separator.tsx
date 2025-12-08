import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { colors } from '../../utils/colors';

// @ts-ignore
const Separator = ({text}) => {
    return (
        <View style={styles.container}>
            <View style={styles.line}></View>
            <Text style={styles.text}>{text}</Text>
            <View style={styles.line}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    text: {
        color: colors.blue,
        fontWeight: '500',
    },
    line: {
        backgroundColor: colors.lightGray,
        height: 1,
        flex: 1,
        marginVertical: 8,
    }
})

export default Separator;