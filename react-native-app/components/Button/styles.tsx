import { StyleSheet } from "react-native";

import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        padding: 8,
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderRadius: 8,
        width: '80%'
    },
    title: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
})