import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { colors } from '@/utils/colors';

export default function Settings() {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    const handleFAQ = () => {
        console.log('Navigate to FAQ successful');
    };

    const handleContact = () => {
        console.log('Navigate to contact successful');
    };

    const handlePrivacy = () => {
        console.log('Navigate to privacy & terms successful');
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
                <Text style={styles.title}>Settings</Text>
                <View style={styles.placeholder} />
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Personal Information</Text>
                    <View style={styles.infoCard}>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Username</Text>
                            <Text style={styles.infoValue}>John Doe</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Email</Text>
                            <Text style={styles.infoValue}>john.doe@example.com</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Help Center</Text>
                    <Pressable style={styles.settingItem} onPress={handleFAQ}>
                        <Text style={styles.settingText}>FAQ</Text>
                        <Image
                            source={require('@/assets/tabs/forward.png')}
                            style={styles.forwardIcon}
                        />
                    </Pressable>
                    <Pressable style={styles.settingItem} onPress={handleContact}>
                        <Text style={styles.settingText}>Contact Us</Text>
                        <Image
                            source={require('@/assets/tabs/forward.png')}
                            style={styles.forwardIcon}
                        />
                    </Pressable>
                    <Pressable style={styles.settingItem} onPress={handlePrivacy}>
                        <Text style={styles.settingText}>Privacy & Terms</Text>
                        <Image
                            source={require('@/assets/tabs/forward.png')}
                            style={styles.forwardIcon}
                        />
                    </Pressable>
                </View>
            </ScrollView>
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
    placeholder: {
        width: 40,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    section: {
        marginTop: 24,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#999',
        marginBottom: 12,
        letterSpacing: 0.5,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        marginBottom: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    settingText: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.blue,
    },
    forwardIcon: {
        width: 8,
        height: 14,
        tintColor: colors.blue,
    },
    versionContainer: {
        alignItems: 'center',
        paddingVertical: 32,
    },
    versionText: {
        fontSize: 14,
        color: '#999',
    },
    infoCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        paddingHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    infoRow: {
        paddingVertical: 16,
    },
    infoLabel: {
        fontSize: 14,
        fontWeight: '500',
        color: '#999',
        marginBottom: 4,
    },
    infoValue: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.blue,
    },
    divider: {
        height: 1,
        backgroundColor: '#f0f0f0',
    },

});
