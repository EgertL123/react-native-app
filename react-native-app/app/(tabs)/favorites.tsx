import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/utils/colors';

export default function Favorites() {
    const favoriteProducts = [
        { id: 1, name: "Coffee Chair", category: "chair", price: 49.99, image: require("@/assets/tabs/coffee_chair.png") },
        { id: 3, name: "Black Simple Lamp", category: "popular", price: 12.00, image: require("@/assets/tabs/black_lamp.png") },
        { id: 4, name: "Minimal Stand", category: "other", price: 12.00, image: require("@/assets/tabs/minimal_stand.png") },
    ];

    const renderItem = ({ item }: { item: typeof favoriteProducts[0] }) => (
        <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.productInfo}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.removeIcon}>
                <Ionicons name="close" size={20} color={colors.blue} />
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Favorites</Text>
            {favoriteProducts.length === 0 ? (
                <Text style={styles.emptyText}>No favorites yet.</Text>
            ) : (
                <FlatList
                    data={favoriteProducts}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{ paddingBottom: 100 }}
                />

            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingTop: 50,
    },
    header: {
        fontSize: 22,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 20
    },
    emptyText: {
        textAlign: "center",
        marginTop: 50,
        fontSize: 16,
        color: "#888"
    },
    card: {
        backgroundColor: "#f9f9f9",
        borderRadius: 12,
        marginBottom: 20,
        width: "100%",
        padding: 10,
        flexDirection: "row",
        alignItems: "flex-start",
        position: "relative"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 15,
        alignSelf: "flex-start"
    },
    removeIcon: {
        position: "absolute",
        top: 12,
        right: 12,
        backgroundColor: "#fff",
        borderRadius: 50,
        padding: 6,
        width: 32,
        height: 32,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 14,
        fontWeight: "600",
        marginTop: 10
    },
    price: {
        fontSize: 13,
        color: "#4F63AC",
        marginTop: 4
    },
    productInfo: {
        flex: 1,
        justifyContent: "center"
    },
});
