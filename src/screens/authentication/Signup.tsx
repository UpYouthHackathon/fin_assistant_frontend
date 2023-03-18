import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { NavigationStackProp } from "react-navigation-stack";
import GlobalStyles from "../../styles/GlobalStyles";
import Input from "../../components/inputs/Input";
import TouchableButton from "../../components/buttons/TouchableButton";
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";
import { useUser } from "../../redux/hooks/useUser";

export default function Signup({
	navigation,
}: {
	navigation: NavigationStackProp;
}) {
	const { login } = useUser();
	const [phoneNumber, setPhoneNumber] = useState("");
	const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>([
		{
			id: "1",
			label: "I have read and agree to the terms of use of FinAssistant",
			value: "agree",
			size: 20,
		},
	]);

	login("0123456789", "12345678");

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={GlobalStyles.title}>Enter your phone number</Text>
				<Text style={{ ...GlobalStyles.subtitle, marginTop: 10 }}>
					Lorem ipsum
				</Text>
			</View>
			<View style={styles.bodyContainer}>
				<Input
					style={styles.phoneInput}
					onChangeText={setPhoneNumber}
					value={phoneNumber}
					keyboardType="number-pad"
				/>
				<RadioGroup radioButtons={radioButtons} onPress={setRadioButtons} />
				<TouchableButton
					disabled
					style={styles.button}
					text="NEXT"
					onPress={() => {}}
				/>
			</View>
		</SafeAreaView>
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
		marginVertical: 50,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},

	bodyContainer: {
		width: "80%",
	},

	phoneInput: {
		width: "100%",
		marginBottom: 20,
	},

	button: {
		marginLeft: "auto",
		marginTop: 20,
		width: 100,
	},
});
