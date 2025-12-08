import React from 'react';
import { StyleSheet, Pressable, Image, Text, View } from 'react-native';
import { colors } from '../../utils/colors';
import { router } from 'expo-router';

// @ts-ignore
const AuthHeader = ({title}) => {
    return (
        <View style={styles.container}>
            <Pressable hitSlop={20} onPress={() => router.back()}>
                <Image style={styles.image} source={require('../../assets/auth_back.png')} />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        marginLeft: 16,
        marginVertical: 22,
        width: 18,
        height: 18,
    },
    title: {
        color: colors.blue,
        marginVertical: 22,
        fontSize: 26,
        fontWeight: '500',
        paddingHorizontal: 16,
    }
})

export default AuthHeader;