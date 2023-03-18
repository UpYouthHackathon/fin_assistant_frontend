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
import GlobalStyles from "../../../styles/GlobalStyles";
import TouchableButton from "../../../components/buttons/TouchableButton";
import OTP from "../../../components/inputs/OTP";
import { useUser } from "../../../redux/hooks/useUser";

export default function VerifyCode({
	navigation,
}: {
	navigation: NavigationStackProp;
}) {
	const { user } = useUser();
	const [code, setCode] = useState<string>("");

	function nextScreen() {
		navigation.navigate("CreatePassword");
	}

	function goBack() {
		navigation.goBack();
	}

	function onCodeChanged(code: string) {
		setCode(code);
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<SafeAreaView style={styles.container}>
				<View style={styles.titleContainer}>
					<Text style={GlobalStyles.title}>Enter verification code</Text>
					<Text
						style={{
							...GlobalStyles.subtitle,
							marginTop: 10,
							textAlign: "center",
						}}
					>
						We have sent an OTP code to the phone number {user.phoneNumber}
					</Text>
				</View>
				<View style={styles.bodyContainer}>
					<OTP onCodeChanged={onCodeChanged} />
					<Text
						style={{ ...GlobalStyles.subtitle, fontSize: 16, marginTop: 20 }}
					>
						Resend verification code
					</Text>
					<Button title="Edit phone number" onPress={goBack} />
				</View>
				<View style={styles.buttonContainer}>
					<TouchableButton
						disabled={code.length < 6}
						style={styles.button}
						text="NEXT"
						onPress={nextScreen}
					/>
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
		width: 100,
	},
});
