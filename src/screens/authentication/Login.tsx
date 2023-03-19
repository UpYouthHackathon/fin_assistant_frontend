import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
	Button,
} from "react-native";
import React, { useState } from "react";
import { NavigationStackProp } from "react-navigation-stack";
import GlobalStyles from "../../styles/GlobalStyles";
import TouchableButton from "../../components/buttons/TouchableButton";
import OTP from "../../components/inputs/OTP";
import Input from "../../components/inputs/Input";
import { useUser } from "../../redux/hooks/useUser";

export default function Login({
	navigation,
}: {
	navigation: NavigationStackProp;
}) {
	const { user, login } = useUser();
	const [password, setPassword] = useState<string>("");

	function Login() {
		login(user.phoneNumber, password);
		navigation.navigate("Root");
	}

	function goBack() {
		navigation.goBack();
	}

	function toRegister() {
		navigation.navigate("Register");
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<SafeAreaView style={styles.container}>
				<View style={styles.titleContainer}>
					<Text style={GlobalStyles.title}>Welcome</Text>
					<Text
						style={{
							...GlobalStyles.subtitle,
							marginTop: 10,
							textAlign: "center",
						}}
					>
						{user.fullName}
					</Text>
					<Text
						style={{
							...GlobalStyles.subtitle,
							textAlign: "center",
						}}
					>
						( {user.phoneNumber} )
					</Text>
				</View>
				<View style={styles.bodyContainer}>
					<Input
						style={{ width: "100%" }}
						value={password}
						onChangeText={setPassword}
						placeholder="Enter your password"
						keyboardType="default"
						isError={password.length > 0 && password.length < 8}
						errorMsg="Password must be at least 8 characters"
					/>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableButton
						disabled={password.length < 8}
						style={styles.button}
						text="LOGIN"
						onPress={Login}
					/>
					<Button title="Forgot password?" onPress={goBack} />
					<Button title="Sign out" color="black" onPress={toRegister} />
				</View>
			</SafeAreaView>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		alignItems: "center",
	},

	titleContainer: {
		width: "80%",
		marginTop: 50,
		marginBottom: 40,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},

	bodyContainer: {
		width: "80%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
	},

	buttonContainer: {
		width: "80%",
	},

	button: {
		marginLeft: "auto",
		marginTop: 20,
		marginBottom: 15,
		width: "100%",
	},
});
