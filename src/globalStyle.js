import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "./themeCtx";

export function useStyles() {
    const { theme } = useTheme();

    return useMemo(
        () =>
            StyleSheet.create({
                text: {
                    color: theme.fg,
                    fontSize: 18,
                    fontFamily: "GoogleSans",
                },
                logo: {
                    fontSize: 48,
                    fontFamily: "GoogleSansItalic",
                },
            }),
        [theme],
    );
}
