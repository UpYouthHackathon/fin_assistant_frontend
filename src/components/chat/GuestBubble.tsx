import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";

export default function GuestBubble({ content }: { content: string }) {
	const FinAssistant = require("../../assets/images/finassistant.png");
	return (
		<View style={styles.container}>
			<Image style={styles.avatar} source={FinAssistant} />
			<View style={styles.bubble}>
				<Text style={styles.content}>{content}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		maxWidth: "70%",
		display: "flex",
		flexDirection: "row",
		alignItems: "flex-end",
	},

	avatar: {
		borderRadius: 50,
	},

	bubble: {
		maxWidth: "100%",
		marginLeft: 10,
		backgroundColor: "#e9e9eb",
		borderRadius: 10,
		padding: 10,
		marginBottom: 3,
	},

	content: {
		color: "#000",
		...GlobalStyles.h3,
	},
});
