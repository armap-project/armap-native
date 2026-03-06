import { Slot } from "expo-router";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import ThemedSafeView from "../src/components/themed/safeView";

import { ThemeProvider } from "../src/themeCtx";

export default function RootLayout() {
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
