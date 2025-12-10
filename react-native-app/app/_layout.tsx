import React, { useEffect } from "react";
import { colors } from "@/utils/colors";
import { Stack, useRouter } from 'expo-router';
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function Layout() {

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
