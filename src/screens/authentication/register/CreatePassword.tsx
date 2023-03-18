import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationStackProp } from "react-navigation-stack";
import GlobalStyles from "../../../styles/GlobalStyles";
import Input from "../../../components/inputs/Input";
import DatePickerInput from "../../../components/inputs/DatePickerInput";
import TouchableButton from "../../../components/buttons/TouchableButton";
import { useUser } from "../../../redux/hooks/useUser";
import { setUser } from "../../../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { IUser } from "../../../interfaces/user.interface";

export default function CreatePassword({
	navigation,
}: {
	navigation: NavigationStackProp;
}) {
	const dispatch = useDispatch();
	const { register, user } = useUser();
	const [fullName, setFullName] = useState("");
	const [password, setPassword] = useState("");
	const [rePassword, setRePassword] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState<Date>(new Date());
	const [isValid, setIsValid] = useState<boolean>(false);

	useEffect(() => {
		if (checkValidity()) {
			setIsValid(true);
		} else if (isValid) {
			setIsValid(false);
		}
	}, [fullName, password, rePassword, dateOfBirth]);

	function checkValidity() {
		if (fullName.length < 8) {
			return false;
		}
		if (password.length < 8) {
			return false;
		}
		if (password !== rePassword) {
			return false;
		}
		if (dateOfBirth.getFullYear() >= new Date().getFullYear()) {
			return false;
		}
		return true;
	}

	function Register() {
		const newUser: IUser = { ...user, fullName, password, dateOfBirth };
		dispatch(setUser(newUser));
		register(newUser);
		navigation.navigate("Login");
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={GlobalStyles.title}>Create a name and password</Text>
				<Text style={{ ...GlobalStyles.subtitle, marginTop: 10 }}>
					Lorem ipsum
				</Text>
			</View>
			<View style={styles.bodyContainer}>
				<Input
					style={styles.phoneInput}
					onChangeText={setFullName}
					value={fullName}
					placeholder="Enter your full name"
					keyboardType="default"
					isError={fullName.length > 0 && fullName.length < 8}
					errorMsg="Full name must be at least 8 characters"
				/>
				<Input
					style={styles.phoneInput}
					onChangeText={setPassword}
					value={password}
					placeholder="Enter a new password"
					keyboardType="default"
					isError={password.length > 0 && password.length < 8}
					errorMsg="Password must be at least 8 characters"
				/>
				<Input
					style={styles.phoneInput}
					onChangeText={setRePassword}
					value={rePassword}
					placeholder="Re-enter the password"
					keyboardType="default"
					isError={rePassword.length > 0 && rePassword !== password}
					errorMsg="Password does not match"
				/>
				<DatePickerInput
					style={styles.phoneInput}
					date={dateOfBirth}
					handleConfirm={setDateOfBirth}
					placeholder="Date of birth"
				/>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableButton
					disabled={!isValid}
					style={styles.button}
					text="NEXT"
					onPress={Register}
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
		marginBottom: 10,
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
