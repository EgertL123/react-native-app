import React from 'react';
import { TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { colors } from '../../utils/colors';

// @ts-ignore
const Checkbox = ({checked, onCheck}) => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.container} onPress={() => onCheck(!checked)}>
            { checked ? (
                <View style={styles.innerContainer}>
                    <Image style={styles.checkIcon} source={require('../../assets/check.png')} />
                </View>
            ) : null}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 22,
        height: 22,
        borderColor: colors.grey,
        borderWidth: 1,
        borderRadius: 4,
    },
    innerContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.grey,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkIcon: {
        width: 12,
        height: 9
    }
})

export default Checkbox;