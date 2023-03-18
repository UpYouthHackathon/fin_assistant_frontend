import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import GlobalStyles from "../../styles/GlobalStyles";

export default function OTP({
	onCodeChanged,
}: {
	onCodeChanged: (code: string) => void;
}) {
	return (
		<OTPInputView
			editable
			style={styles.container}
			codeInputFieldStyle={styles.underlineStyleBase}
			codeInputHighlightStyle={styles.underlineStyleHighLighted}
			onCodeChanged={onCodeChanged}
			autoFocusOnLoad
			pinCount={6}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 50,
		marginTop: 0,
	},

	underlineStyleBase: {
		backgroundColor: "#fff",
		borderRadius: 5,
		width: 40,
		height: 40,
		borderWidth: 0,
		color: "black",
		...GlobalStyles.h3,
		...GlobalStyles.shadow,
	},

	underlineStyleHighLighted: {
		borderColor: "#03DAC6",
	},
});
