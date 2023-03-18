import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Button,
	Touchable,
	TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import TouchableButton from "../../components/buttons/TouchableButton";
import { useUser } from "../../redux/hooks/useUser";
import { NavigationStackProp } from "react-navigation-stack";

export default function Login({
	navigation,
}: {
	navigation: NavigationStackProp;
}) {
	const { login, user } = useUser();

	useEffect(() => {
		console.log("user", user);
	}, [user]);

	const onPressLogin = () => {
		login("votindu@gmail.com", "tindu2003");
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={GlobalStyles.h1}>Heading 1</Text>
			<Text style={GlobalStyles.h2}>Heading 2</Text>
			<Text style={GlobalStyles.h3}>Heading 3</Text>
			<TouchableButton text="TouchableButton" onPress={() => {}} />
			<Button title="Login" onPress={onPressLogin} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: "auto",
		marginBottom: "auto",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
});
