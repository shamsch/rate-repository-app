import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#00BFFF",
        padding: 10,
    },
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Pressable>
                <Text style={styles.text}>Repositories</Text>
            </Pressable>
            <Pressable>
                <Link to="/login">
                    <Text style={styles.text}>Sign In</Text>
                </Link>
            </Pressable>
        </View>
    );
};

export default AppBar;
