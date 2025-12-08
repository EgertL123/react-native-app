import React from "react";
import {
    Text,
    View,
    Image,
    Pressable,
} from "react-native";
import { useRouter } from 'expo-router';
import Button from "../components/Button";
import { styles } from "./styles";

export default function Splash () {
const router = useRouter();

        const onSignup = () => {
            router.push('/Signup')
        }

        const onSignIn = () => {
            router.push('/Signin')
        }

    return (
        <View style={styles.container}>
            <Image resizeMode={"contain"} style={styles.image} source={require('../assets/splash_image.png')}/>

            <View style={styles.titleContainer}>
        <Text style={styles.title}>You&#39;ll Find</Text>
            <Text style={[styles.title, styles.innerTitle]}>All You Need </Text>
            <Text style={styles.title}> Here!</Text>
            </View>

            <Button onPress={onSignup} style={styles.title} title="Sign Up" />

            <Pressable onPress={onSignIn} hitSlop={20}>
                <Text style={styles.footerText}>Sign In</Text>
            </Pressable>
        </View>
    )
}