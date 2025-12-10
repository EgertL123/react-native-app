import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { colors } from '@/utils/colors';

export default function MyListings() {
    const router = useRouter();

    const myProducts = [
        { id: 1, name: "Coffee Chair", category: "chair", price: 49.99, image: require("@/assets/tabs/coffee_chair.png") },
        { id: 2, name: "Simple Desk", category: "table", price: 50.00, image: require("@/assets/tabs/simple_desk.png") },
        { id: 3, name: "Black Simple Lamp", category: "popular", price: 12.00, image: require("@/assets/tabs/black_lamp.png") },
        { id: 4, name: "Minimal Stand", category: "other", price: 12.00, image: require("@/assets/tabs/minimal_stand.png") },
    ];

    const handleBack = () => {
        router.back();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={handleBack} style={styles.backButton}>
                    <Image
                        source={require('@/assets/tabs/back.png')}
                        style={styles.backIcon}
                    />
                </Pressable>
                <Text style={styles.headerTitle}>My Listings</Text>
                <View style={styles.headerPlaceholder} />
            </View>
            <ScrollView style={styles.content}>
                <View style={styles.productsGrid}>
                    {myProducts.map((product) => (
                        <Pressable
                            key={product.id}
                            style={styles.productCard}
                            onPress={() => router.push(`/details?productId=${product.id}`)}
                        >
                            <View style={styles.productImageContainer}>
                                <Image source={product.image} style={styles.productImage} />
                            </View>
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={styles.productPrice}>$ {product.price.toFixed(2)}</Text>
                            <Text style={styles.categoryBadge}>{product.category}</Text>
                        </Pressable>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    backButton: {
        padding: 8,
    },
    backIcon: {
        width: 8,
        height: 15,
        tintColor: colors.blue,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#333',
    },
    headerPlaceholder: {
        width: 40,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    productsGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingBottom: 100,
    },
    productCard: {
        width: "48%",
        backgroundColor: "#f8f8f8",
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
    },
    productImageContainer: {
        width: "100%",
        height: 100,
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    productImage: {
        width: 80,
        height: 80,
        resizeMode: "cover",
    },
    productName: {
        fontSize: 14,
        fontWeight: "500",
        color: "#333",
        marginBottom: 4,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: "600",
        color: "#000",
        marginBottom: 4,
    },
    categoryBadge: {
        fontSize: 12,
        color: colors.blue,
        textTransform: 'capitalize',
    },
});
