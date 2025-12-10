import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { colors } from '@/utils/colors';

const CATEGORIES = [
    'Chair',
    'Table',
    'Armchair',
    'Bed',
    'Other'
];

export default function CreateListing() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [showCategories, setShowCategories] = useState(false);

    const handleBack = () => {
        router.back();
    };

    const handleSubmit = () => {
        if (!title || !category || !price || !description) {
            Alert.alert('Validation', 'Please fill all fields');
            return;
        }

        Alert.alert('Success', 'Listing added successfully!', [
            { text: 'OK', onPress: () => router.back() }
        ]);
    };

    const selectCategory = (selectedCategory: string) => {
        setCategory(selectedCategory);
        setShowCategories(false);
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
                <Text style={styles.title}>Add New Listing</Text>
                <View style={styles.headerPlaceholder} />
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.imageSection}>
                    <Pressable style={styles.imagePlaceholder}>
                        <Text style={styles.imagePlaceholderText}>+ Add Photo</Text>
                    </Pressable>
                </View>

                <View style={styles.form}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Title</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Listing title"
                            placeholderTextColor="#999"
                            value={title}
                            onChangeText={setTitle}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Category</Text>
                        <Pressable
                            style={styles.dropdownButton}
                            onPress={() => setShowCategories(!showCategories)}
                        >
                            <Text style={[styles.dropdownText, !category && styles.placeholderText]}>
                                {category || 'Select the category'}
                            </Text>
                            <Image
                                source={require('@/assets/tabs/forward.png')}
                                style={[styles.dropdownIcon, showCategories && styles.dropdownIconUp]}
                            />
                        </Pressable>
                        {showCategories && (
                            <View style={styles.dropdownList}>
                                {CATEGORIES.map((cat) => (
                                    <Pressable
                                        key={cat}
                                        style={styles.categoryItem}
                                        onPress={() => selectCategory(cat)}
                                    >
                                        <Text style={styles.categoryText}>{cat}</Text>
                                    </Pressable>
                                ))}
                            </View>
                        )}
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Price</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter price in USD"
                            placeholderTextColor="#999"
                            value={price}
                            onChangeText={setPrice}
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Description</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Tell us more..."
                            placeholderTextColor="#999"
                            value={description}
                            onChangeText={setDescription}
                            multiline
                            numberOfLines={5}
                            textAlignVertical="top"
                        />
                    </View>
                </View>
            </ScrollView>

            <View style={styles.bottomContainer}>
                <Pressable style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    title: {
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
    imageSection: {
        marginTop: 24,
        marginBottom: 32,
    },
    imagePlaceholder: {
        height: 200,
        backgroundColor: '#f5f5f5',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#e0e0e0',
        borderStyle: 'dashed',
    },
    imagePlaceholderText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#999',
    },
    form: {
        gap: 20,
    },
    inputGroup: {
        gap: 8,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.blue,
    },
    input: {
        backgroundColor: '#f9f9f9',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        color: '#333',
    },
    textArea: {
        height: 120,
        paddingTop: 14,
    },
    dropdownButton: {
        backgroundColor: '#f9f9f9',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    dropdownText: {
        fontSize: 16,
        color: '#333',
    },
    placeholderText: {
        color: '#999',
    },
    dropdownIcon: {
        width: 8,
        height: 14,
        tintColor: colors.blue,
        transform: [{ rotate: '90deg' }],
    },
    dropdownIconUp: {
        transform: [{ rotate: '-90deg' }],
    },
    dropdownList: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginTop: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    categoryItem: {
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    categoryText: {
        fontSize: 16,
        color: '#333',
    },
    bottomContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
    },
    submitButton: {
        paddingVertical: 16,
        backgroundColor: colors.blue,
        borderRadius: 12,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },
});