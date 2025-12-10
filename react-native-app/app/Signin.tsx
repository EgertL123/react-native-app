import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
} from 'react-native';
import AuthHeader from "@/components/ui/AuthHeader";
import Input from "@/components/ui/Input";
import Button from "@/components/Button";
import Separator from "@/components/ui/Separator";
import GoogleLogin from "@/components/ui/GoogleLogin";
import {colors} from "@/utils/colors";
import { useRouter } from 'expo-router';

export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const onSubmit = () => {
        if (!email || !password) {
            Alert.alert("Validation", "Please fill all fields");
            return;
        }

        router.push("/(tabs)/home");
    };

    return (
        <View style={styles.container}>
            <AuthHeader title="Sign In" />
            <Input
                label="Email"
                placeholder="example@gmail.com"
                isPassword={false}
                value={email}
                onChangeText={setEmail}
            />
            <Input isPassword
                   label="Password"
                   placeholder="******"
                   value={password}
                   onChangeText={setPassword}
            />
            <Button style={styles.button} title="Sign In" onPress={onSubmit} />
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