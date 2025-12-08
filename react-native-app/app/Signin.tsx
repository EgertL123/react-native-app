import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import AuthHeader from "@/components/ui/AuthHeader";
import Input from "@/components/ui/Input";
import Button from "@/components/Button";
import Separator from "@/components/ui/Separator";
import GoogleLogin from "@/components/ui/GoogleLogin";
import {colors} from "@/utils/colors";

export default function Signin() {

    return (
        <View style={styles.container}>
            <AuthHeader title="Sign In" />
            <Input label="Email" placeholder="example@gmail.com" isPassword={false} />
            <Input isPassword label="Password" placeholder="******"/>
            <Button style={styles.button} title="Sign In" onPress={undefined} />
            <Separator text="Or sign up with" />
            <GoogleLogin />
            <Text style={styles.footerText}>Already have an account?
                <Text style={styles.footerLink}>Sign In</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 18,
        height: 18,
    },
    title: {
        fontSize: 26,
        fontWeight: '500',
        color: colors.blue,
        paddingHorizontal: 16,
    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },
    agreeText: {
        color: colors.blue,
        marginHorizontal: 14,
    },
    agreeTextBold: {
        fontWeight: 'bold',
    },
    footerText: {
        color: colors.blue,
        marginBottom: 56,
        textAlign: 'center',
        alignSelf: 'center',
    },
    footerLink: {
        fontWeight: 'bold',
    },
    button: {
        alignItems: 'center',
        marginVertical: 20,
        alignSelf: 'center',
    }
});