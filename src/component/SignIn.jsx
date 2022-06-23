import {
	TextInput,
	Button,
	View,
	StyleSheet,
	Text,
	Pressable,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useSignIn } from "../hooks/useSignIn";

const validationSchema = yup.object().shape({
	username: yup
		.string()
		.min(4, "username must be greater or equal to 4 characters")
		.required("username is required"),
	password: yup
		.string()
		.min(6, "Password must be greater or equal to 6 characters")
		.required("Password is required"),
});

const styles = StyleSheet.create({
	input: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		margin: 10,
		borderRadius: 5,
		padding: 5,
	},
	errorText: {
		color: "red",
	},
	submitBtn: {
		backgroundColor: "#00BFFF",
		padding: 10,
		borderRadius: 5,
		margin: 10,
		color: "white",
		fontWeight: "bold",
		fontSize: 20,
		textAlign: "center",
	},
});

const SignIn = () => {
	const [signIn] = useSignIn();

	const onFormSubmit = async (values) => {
		const { username, password } = values;

		try {
			const { data } = await signIn({ username, password });
			console.log(data);
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<View>
			<Formik
				initialValues={{ username: "", password: "" }}
				onSubmit={async (values, actions) => {
					actions.resetForm();
					await onFormSubmit(values);
				}}
				validationSchema={validationSchema}
			>
				{(props) => (
					<View>
						<TextInput
							style={styles.input}
							placeholder="username"
							onChangeText={props.handleChange("username")}
							value={props.values.username}
							onBlur={props.handleBlur("username")}
						/>
						{props.touched.username && props.errors.username && (
							<Text style={styles.errorText}>{props.errors.username}</Text>
						)}
						<TextInput
							style={styles.input}
							secureTextEntry
							placeholder="password"
							onChangeText={props.handleChange("password")}
							value={props.values.password}
							onBlur={props.handleBlur("password")}
						/>
						{props.touched.password && props.errors.password && (
							<Text style={styles.errorText}>{props.errors.password}</Text>
						)}
						<Pressable onPress={props.handleSubmit}>
							<Text style={styles.submitBtn} title="Submit">
								Sign in
							</Text>
						</Pressable>
					</View>
				)}
			</Formik>
		</View>
	);
};

export default SignIn;
