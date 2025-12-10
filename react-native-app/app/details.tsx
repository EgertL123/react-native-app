import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Details() {
    const router = useRouter();
    const { productId } = useLocalSearchParams();
    const [product, setProduct] = useState<any>(null);

    const products = [
        { id: 1, name: "Coffee Chair", category: "chair", price: 49.99, image: require("@/assets/tabs/coffee_chair.png"), description: "A comfortable coffee chair perfect for your living room." },
        { id: 2, name: "Simple Desk", category: "table", price: 50.00, image: require("@/assets/tabs/simple_desk.png"), description: "A simple and elegant desk for your workspace." },
        { id: 3, name: "Black Simple Lamp", category: "popular", price: 12.00, image: require("@/assets/tabs/black_lamp.png"), description: "A sleek black lamp for modern interiors." },
        { id: 4, name: "Minimal Stand", category: "other", price: 12.00, image: require("@/assets/tabs/minimal_stand.png"), description: "A minimal stand for any room." },
    ];

    useEffect(() => {
        const foundProduct = products.find((p) => p.id === Number(productId));
        setProduct(foundProduct);
    }, [productId]);

    if (!product) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#4F63AC" />
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <Image source={product.image} style={styles.image} />
            <View style={styles.card}>
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.price}>${product.price.toFixed(2)}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <View style={styles.buttonsContainer}>
                    <Pressable style={styles.backButton} onPress={() => router.back()}>
                        <Text style={styles.backButtonText}>Back</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    image: { width: "100%", height: 400 },
    card: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        marginTop: -40,
        padding: 20,
    },
    title: { fontSize: 24, fontWeight: "600", marginBottom: 8 },
    price: { fontSize: 30, fontWeight: "700", marginBottom: 12 },
    description: { fontSize: 14, color: "#606060", lineHeight: 22 },
    buttonsContainer: { marginTop: 20 },
    backButton: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: "#4F63AC",
        borderRadius: 12,
        alignItems: "center",
    },
    backButtonText: { color: "#fff", fontWeight: "600" },
    loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
});
