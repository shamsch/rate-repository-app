import Constants from "expo-constants";
import { StyleSheet, View, Platform } from "react-native";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList ";
import { Route, Routes, Navigate, useNavigate } from "react-router-native";
import SignIn from "./SignIn";
import Repository from "./Repository";
import { Review } from "./Review";
import SignUp from "./SignUp";

const styles = StyleSheet.create({
    container: {
        fontFamily: Platform.OS === "ios" ? "Arial" : "Roboto",
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path="/" element={<RepositoryList />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="*" element={<Navigate to="/" replace />} />
				<Route path="/repository/:id" element={<Repository/>} />
				<Route path="/createReview" element={<Review/>}/>
				<Route path="/signup" element={<SignUp />} />
            </Routes>
        </View>
    );
};

export default Main;
