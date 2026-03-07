import ThemedText from "../src/components/themed/text";
import ThemedView from "../src/components/themed/view";
import ThemedSafeView from "../src/components/themed/safeView";

import { useStyles } from "../src/globalStyle";

import { BlurView } from "expo-blur";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import MapView from "react-native-maps";

import { useTheme } from "../src/themeCtx";

const Main = () => {
    const styles = useStyles();
    const { theme } = useTheme();

    return (
        <ThemedView
            style={{
                flex: 1,
            }}
        >
            <ThemedSafeView
                style={{
                    position: "absolute",
                    zIndex: 10,
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: theme.bgTranslucent,
                }}
            >
                <ThemedView
                    style={{
                        width: "100%",
                        zIndex: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingLeft: 25,
                        paddingRight: 25,
                        backgroundColor: "transparent",
                    }}
                >
                    <ThemedText style={styles.logo}>ArMap</ThemedText>
                    <MaterialIcons
                        name="dark-mode"
                        size={24}
                        color={theme.fg}
                    />
                </ThemedView>
            </ThemedSafeView>
            <BlurView
                intensity={100}
                experimentalBlurMethod="dimezisBlurView"
            />

            <MapView
                style={{
                    width: "100%",
                    height: "100%",
                }}
                toolbarEnabled={false}
                showsCompass={false}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </ThemedView>
    );
};

export default Main;
