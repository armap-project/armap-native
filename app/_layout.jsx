import { Slot } from "expo-router";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import ThemedSafeView from "../src/components/themed/safeView";

import { View } from "react-native";
import { Text } from "react-native";

import { Stack } from "expo-router";

import { ThemeProvider } from "../src/themeCtx";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        GoogleSans: require("../assets/fonts/GoogleSans-Regular.ttf"),
        GoogleSansItalic: require("../assets/fonts/GoogleSans-Italic.ttf"),
        GoogleSansBold: require("../assets/fonts/GoogleSans-Bold.ttf"),
        GoogleSansBoldItalic: require("../assets/fonts/GoogleSans-BoldItalic.ttf"),
    });

    useEffect(() => {
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        // loading placeholder
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <Stack
                    screenOptions={{
                        headerShown: false,
                        animation: "fade_from_bottom",
                        gestureEnabled: false,
                        animationDuration: 100,
                    }}
                />
            </ThemeProvider>
        </SafeAreaProvider>
    );
}
