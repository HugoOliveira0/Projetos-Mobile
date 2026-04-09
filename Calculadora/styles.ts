import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        gap: 8,
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 16,
        color: "#333",
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#555",
        marginBottom: 2,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        backgroundColor: "#fff",
    },
    picker: {
        backgroundColor: "#fff",
        borderRadius: 8,
    },
    button: {
        backgroundColor: "#4a90e2",
        borderRadius: 8,
        padding: 14,
        alignItems: "center",
        marginTop: 8,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
    },
    resultado: {
        fontSize: 20,
        fontWeight: "700",
        textAlign: "center",
        marginTop: 12,
        color: "#333",
    },
});