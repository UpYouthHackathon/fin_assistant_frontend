import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationStackProp } from "react-navigation-stack";
import GlobalStyles from "../../../styles/GlobalStyles";
import Input from "../../../components/inputs/Input";
import TouchableButton from "../../../components/buttons/TouchableButton";
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";
import { useUser } from "../../../redux/hooks/useUser";
import { setUser } from "../../../redux/slices/userSlice";
import { useDispatch } from "react-redux";

export default function Signup({
	navigation,
}: {
	navigation: NavigationStackProp;
}) {
	const dispatch = useDispatch();
	const { user } = useUser();
	const [phoneNumber, setPhoneNumber] = useState<string>(user.phoneNumber);
	const [isPhoneNumber, setIsPhoneNumber] = useState<boolean>(
		user.phoneNumber ? true : false
	);
	const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>([
		{
			id: "1",
			label: "I have read and agree to the terms of use of FinAssistant",
			value: "agree",
			size: 20,
		},
	]);

	useEffect(() => {
		checkPhoneNumber();
	}, [phoneNumber]);

	function checkPhoneNumber() {
		const reg = new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/);
		if (reg.test(phoneNumber)) {
			setIsPhoneNumber(true);
		} else if (isPhoneNumber) {
			setIsPhoneNumber(false);
		}
	}

	function nextScreen() {
		dispatch(setUser({ ...user, phoneNumber }));
		navigation.push("VerifyCode");
	}

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
			</View>
			<View style={styles.buttonContainer}>
				<TouchableButton
					disabled={!isPhoneNumber}
					style={styles.button}
					text="NEXT"
					onPress={nextScreen}
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

	buttonContainer: {
		width: "80%",
	},

	button: {
		marginLeft: "auto",
		marginTop: 20,
		width: 100,
	},
});
