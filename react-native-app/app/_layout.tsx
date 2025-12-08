import React, { useEffect } from "react";
import { colors } from "@/utils/colors";
import { Stack, useRouter } from 'expo-router';
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function Layout() {
    const isSignedIn = true;
    const router = useRouter();

    useEffect(() => {
        // Add setTimeout to ensure navigation happens after mount
        const timeout = setTimeout(() => {
            if (isSignedIn) {
                router.replace('/(tabs)/home');
            } else {
                router.replace('/');
            }
        }, 0);

        return () => clearTimeout(timeout);
    }, [isSignedIn]);

    return (
        <SafeAreaProvider>
            <Stack screenOptions={{
                contentStyle: { backgroundColor: colors.white },
                headerShown: false
            }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="Signin" />
                <Stack.Screen name="Signup" />
                <Stack.Screen name="(tabs)" />
            </Stack>
        </SafeAreaProvider>
    );
}
