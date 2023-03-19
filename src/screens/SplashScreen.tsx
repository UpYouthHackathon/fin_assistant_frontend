import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { NavigationStackProp } from "react-navigation-stack";
import CookieManager from "@react-native-cookies/cookies";

export default function SplashScreen({
	navigation,
}: {
	navigation: NavigationStackProp;
}) {
	useEffect(() => {
		CookieManager.getAll()
			.then((cookie) => {
				console.log(cookie);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	setTimeout(() => {
		navigation.navigate("Login");
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
