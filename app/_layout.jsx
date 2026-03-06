import { Slot } from "expo-router";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import ThemedSafeView from "../src/components/themed/safeView";

import { ThemeProvider } from "../src/themeCtx";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        GoogleSans: require("../assets/fonts/GoogleSans.ttf"),
        GoogleSansItalic: require("../assets/fonts/GoogleSansItalic.ttf"),
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        // loading placeholder
        return null;
    }

    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <ThemedSafeView style={{ flex: 1, padding: 15 }}>
                    <Slot />
                </ThemedSafeView>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}
