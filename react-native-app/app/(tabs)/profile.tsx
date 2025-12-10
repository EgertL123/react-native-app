import React from 'react';
import { View, Text, StyleSheet, Pressable, Alert, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { colors } from '@/utils/colors';

export default function Profile() {
    const router = useRouter();

    const handleLogout = () => {
        Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Logout',
                    style: 'destructive',
                    onPress: () => {
                        router.replace('/Signin')
                    }
                }
            ]
        );
    };

    const handleMyListings = () => {
        router.push('/my-listings');
    };

    const handleSettings = () => {
        router.push('/settings');
    };

    const handleAddListing = () => {
        router.push('/create-listing');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileContent}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerLeft}>
                        <Text style={styles.title}>Profile</Text>
                        <Text style={styles.username}>John Doe</Text>
                        <Text style={styles.email}>john.doe@example.com</Text>
                    </View>
                    <Pressable onPress={handleLogout}>
                        <Image
                            source={require('@/assets/tabs/logout.png')}
                            style={styles.logoutIcon}
                        />
                    </Pressable>
                </View>

                <View style={styles.topButtonsContainer}>
                    <Pressable style={styles.topButton} onPress={handleMyListings}>
                        <View style={styles.buttonContent}>
                            <View style={styles.textContainer}>
                                <Text style={styles.topButtonText}>My Listings</Text>
                                <Text style={styles.topButtonSubtext}>Already have 10 listings</Text>
                            </View>
                            <Image
                                source={require('@/assets/tabs/forward.png')}
                                style={styles.forwardIcon}
                            />
                        </View>
                    </Pressable>
                    <Pressable style={styles.topButton} onPress={handleSettings}>
                        <View style={styles.buttonContent}>
                            <View style={styles.textContainer}>
                                <Text style={styles.topButtonText}>Settings</Text>
                                <Text style={styles.topButtonSubtext}>Account, FAQ, Contact</Text>
                            </View>
                            <Image
                                source={require('@/assets/tabs/forward.png')}
                                style={styles.forwardIcon}
                            />
                        </View>
                    </Pressable>
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <Pressable style={styles.addListingButton} onPress={handleAddListing}>
                    <Text style={styles.addListingButtonText}>Add A New Listing</Text>
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
    profileContent: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    headerLeft: {
        flex: 1,
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'center',
    },
    username: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginTop: 8,
    },
    email: {
        fontSize: 14,
        fontWeight: '400',
        color: '#666',
        marginTop: 4,
    },
    logoutIcon: {
        width: 18,
        height: 17,
    },
    topButtonsContainer: {
        gap: 12,
        marginBottom: 24,
    },
    topButton: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    topButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.blue,
    },
    topButtonSubtext: {
        fontSize: 14,
        fontWeight: '400',
        color: '#666',
        marginTop: 4,
    },
    bottomContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    addListingButton: {
        paddingVertical: 24,
        backgroundColor: '#4F63AC',
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    addListingButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },
    buttonContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    textContainer: {
        flex: 1,
    },
    forwardIcon: {
        width: 8,
        height: 14,
        tintColor: colors.blue,
    },
});
