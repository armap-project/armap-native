import ThemedText from "../src/components/themed/text";
import ThemedView from "../src/components/themed/view";
import ThemedSafeView from "../src/components/themed/safeView";

import { useStyles } from "../src/globalStyle";

const Main = () => {
    const styles = useStyles();
    return (
        <ThemedView>
            <ThemedText style={styles.logo}>ArMap</ThemedText>
            <ThemedText>Index</ThemedText>
        </ThemedView>
    );
};

export default Main;
