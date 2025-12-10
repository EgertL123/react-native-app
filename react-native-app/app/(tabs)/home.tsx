import React, { useState } from "react";
import { useRouter } from "expo-router";
import { colors } from '@/utils/colors';
import { View, Text, Image, Pressable, ScrollView, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
    const router = useRouter();

    const products = [
        { id: 1, name: "Coffee Chair", category: "chair", price: 49.99, image: require("@/assets/tabs/coffee_chair.png") },
        { id: 2, name: "Simple Desk", category: "table", price: 50.00, image: require("@/assets/tabs/simple_desk.png") },
        { id: 3, name: "Black Simple Lamp", category: "popular", price: 12.00, image: require("@/assets/tabs/black_lamp.png") },
        { id: 4, name: "Minimal Stand", category: "other", price: 12.00, image: require("@/assets/tabs/minimal_stand.png") },
    ];

    const [activeCategory, setActiveCategory] = useState<string>("popular");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [displayedProducts, setDisplayedProducts] = useState(products);

    const handleSearch = (query: string) => {
        setSearchQuery(query);

        let filtered = products;

        // Filter by search query
        if (query.trim()) {
            filtered = filtered.filter((p) =>
                p.name.toLowerCase().includes(query.toLowerCase())
            );
        }

        // Filter by category (unless "popular" which shows all)
        if (activeCategory !== "popular") {
            filtered = filtered.filter((p) => p.category === activeCategory);
        }

        setDisplayedProducts(filtered);
    };

    const handlePress = (category: string) => {
        setActiveCategory(category);

        let filtered = products;

        // Apply search filter if there's a query
        if (searchQuery.trim()) {
            filtered = filtered.filter((p) =>
                p.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Apply category filter
        if (category !== "popular") {
            filtered = filtered.filter((p) => p.category === category);
        }

        setDisplayedProducts(filtered);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.searchContainer}>
                    <Image
                        source={require("@/assets/tabs/search.png")}
                        style={styles.searchIcon}
                        resizeMode="contain"
                    />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Find All You Need"
                        value={searchQuery}
                        onChangeText={handleSearch}
                        placeholderTextColor="#999"
                    />
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.categoriesScroll}
                >
                    <View style={styles.categoriesContainer}>
                        {[
                            { key: "popular", icon: require("@/assets/tabs/star.png"), label: "Popular" },
                            { key: "chair", icon: require("@/assets/tabs/chair.png"), label: "Chair" },
                            { key: "table", icon: require("@/assets/tabs/table.png"), label: "Table" },
                            { key: "armchair", icon: require("@/assets/tabs/armchair.png"), label: "Armchair" },
                            { key: "bed", icon: require("@/assets/tabs/bed.png"), label: "Bed" },
                            { key: "other", icon: require("@/assets/tabs/armchair.png"), label: "Other" },
                        ].map((category) => (
                            <View key={category.key} style={styles.categoryItem}>
                                <Pressable
                                    onPress={() => handlePress(category.key)}
                                    style={[
                                        styles.categoryIcon,
                                        {
                                            backgroundColor:
                                                activeCategory === category.key ? colors.blue : "#f8f8f8",
                                        },
                                    ]}
                                >
                                    <Image
                                        source={category.icon}
                                        style={{
                                            width: 24,
                                            height: 24,
                                            tintColor:
                                                activeCategory === category.key ? "#fff" : colors.blue,
                                        }}
                                        resizeMode="contain"
                                    />
                                </Pressable>
                                <Text style={styles.categoryText}>{category.label}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>

                {/* Products */}
                <View style={styles.productsGrid}>
                    {displayedProducts.map((product) => (
                        <View key={product.id} style={styles.productCard}>
                            <View style={styles.productImageContainer}>
                                <Image source={product.image} style={styles.productImage} />
                            </View>
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={styles.productPrice}>$ {product.price.toFixed(2)}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f8f8f8",
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 12,
        marginTop: 20,
        marginBottom: 30,
    },
    searchIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: "#333",
    },
    categoriesScroll: {
        maxHeight: 120,
        marginBottom: 5,
    },
    categoriesContainer: {
        flexDirection: "row",
        gap: 15,
    },
    categoryItem: {
        alignItems: "center",
        marginRight: 10,
    },
    categoryIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,
    },
    categoryText: {
        fontSize: 12,
        color: "#666",
        textAlign: "center",
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
    },
});
