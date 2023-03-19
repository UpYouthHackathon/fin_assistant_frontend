import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";

export default function UserBubble({ content }: { content: string }) {
	return (
		<View style={styles.container}>
			<Text style={styles.content}>{content}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginLeft: "auto",
		maxWidth: "70%",
		backgroundColor: "#65a147",
		borderRadius: 10,
		padding: 10,
		marginBottom: 3,
	},

	content: {
		color: "#fff",
		...GlobalStyles.h3,
	},
});
