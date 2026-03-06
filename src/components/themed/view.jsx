import { View } from "react-native";
import { useTheme } from "../../themeCtx";

export default function ThemedView({ style, ...props }) {
    const { theme } = useTheme();

    return <View style={[{ backgroundColor: theme.bg }, style]} {...props} />;
}
