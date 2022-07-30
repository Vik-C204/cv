import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        primary: {
            main: "#333",
            50: "#e3f2fd",
            100: "#bbdefb",
            200: "#90caf9",
            300: "#64b5f6",
            400: "#64b5f6",
            500: "#333", // Only transition between 500 and 600 matters
            600: "#111",
            700: "#1976d2",
            800: "#1565c0",
            900: "#0d47a1"
        }
    }
});

export default theme;