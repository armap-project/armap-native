import ThemedText from "../src/components/themed/text";
import ThemedView from "../src/components/themed/view";
import ThemedSafeView from "../src/components/themed/safeView";

import { useStyles } from "../src/globalStyle";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Main = () => {
    const styles = useStyles();
    return (
        <ThemedSafeView
            style={{
                flex: 1,
            }}
        >
            <ThemedView
                style={{
                    marginBottom: 30,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginLeft: 25,
                    marginRight: 25,
                }}
            >
                <ThemedText style={styles.logo}>ArMap</ThemedText>
                <MaterialIcons name="dark-mode" size={24} color="black" />
            </ThemedView>
        </ThemedSafeView>
    );
};

export default Main;
