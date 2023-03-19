import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationStackProp } from "react-navigation-stack";
import TouchableButton from "../../components/buttons/TouchableButton";
import GlobalStyles from "../../styles/GlobalStyles";

export default function AICallScreen({
	navigation,
}: {
	navigation: NavigationStackProp;
}) {
	return (
		<View>
			<ImageBackground
				resizeMode="cover"
				source={require("../../assets/images/supportBackground.png")}
			>
				<View style={styles.contentContainer}>
					<View style={styles.drawerContainer}>
						<Text style={styles.title}>Select customer support type</Text>
						<TouchableButton
							style={styles.button}
							onPress={() => navigation.navigate("AI Call Screen")}
							text="FinAssistant AI Broker"
						/>
						<TouchableButton
							style={{ ...styles.button, backgroundColor: "blue" }}
							onPress={() => {}}
							text="FinAssistant Broker"
						/>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},

	background: {
		flex: 1,
		width: "100%",
	},

	contentContainer: {
		width: "100%",
		height: "100%",
	},

	drawerContainer: {
		width: "100%",
		height: 270,
		marginTop: "auto",
		backgroundColor: "#fff",
		// opacity: 0.5,
		borderRadius: 25,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-evenly",
		paddingBottom: 75,
	},

	title: {
		...GlobalStyles.h1,
	},

	button: {
		width: "80%",
	},
});
