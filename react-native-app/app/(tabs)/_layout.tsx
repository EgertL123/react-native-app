import React from 'react';
import { Tabs } from "expo-router";
import { Image } from 'react-native';
import { colors } from '@/utils/colors';

export default function TabLayout () {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {borderTopColor: colors.lightGray}
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? require('@/assets/tabs/home_active.png') : require('@/assets/tabs/home.png')}
                            style={{
                                width: 24,
                                height: 24,
                                resizeMode: 'contain'
                        }}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="favorites"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? require('@/assets/tabs/bookmark_active.png') : require('@/assets/tabs/bookmark.png')}
                            style={{
                                width: 24,
                                height: 24,
                                resizeMode: 'contain'
                            }}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? require('@/assets/tabs/profile_active.png') : require('@/assets/tabs/profile.png')}
                            style={{
                                width: 24,
                                height: 24,
                                resizeMode: 'contain'
                            }}
                        />
                    )
                }}
            />
        </Tabs>
    )
}
