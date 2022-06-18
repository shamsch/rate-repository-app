import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#00BFFF",
        padding: 10,
        flexDirection: "row",
    },
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    item: {
        marginRight: 10,
    },
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Pressable style={styles.item}>
                    <Link to="/">
                        <Text style={styles.text}>Repositories</Text>
                    </Link>
                </Pressable>
                <Pressable style={styles.item}>
                    <Link to="/login">
                        <Text style={styles.text}>Sign In</Text>
                    </Link>
                </Pressable>
            </ScrollView>
        </View>
    );
};

export default AppBar;
