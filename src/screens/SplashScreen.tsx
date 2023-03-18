import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { NavigationStackProp } from "react-navigation-stack";

export default function SplashScreen({
	navigation,
}: {
	navigation: NavigationStackProp;
}) {
	setTimeout(() => {
		navigation.navigate("Register");
	}, 3000);

	const SplashArt = require("../assets/images/splash.png");
	return (
		<View style={styles.container}>
			<Image source={SplashArt} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
		width: "100%",
		height: "100%",
	},
});
