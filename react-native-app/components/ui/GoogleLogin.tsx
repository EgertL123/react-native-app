import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

import { colors } from '../../utils/colors';

const GoogleLogin = () => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.container}>
            <Image style={styles.image} source={require('../../assets/google.png')} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkGray,
        borderRadius: 14,
        width: '45%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginBottom: 50
    },
    image: {
        width: 30,
        height: 30,
    }
})

export default React.memo(GoogleLogin);