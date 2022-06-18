import { TextInput, Button, View, StyleSheet } from "react-native";
import { Formik } from "formik";

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    },
});

const SignIn = () => {
    return (
        <View>
            <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="username"
                            onChangeText={props.handleChange("username")}
                            value={props.values.username}
                        />

                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            placeholder="password"
                            onChangeText={props.handleChange("password")}
                            value={props.values.password}
                        />

                        <Button
                            color={"#00BFFF"}
                            style={styles.submitBtn}
                            title="Submit"
                            onPress={props.handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    );
};

export default SignIn;
