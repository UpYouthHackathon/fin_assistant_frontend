import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";

export default function ChatItem({
	receiver,
	onPress,
}: {
	receiver: string;
	onPress: () => {};
}) {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<Text style={styles.receiver}>{receiver}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 5,
		backgroundColor: "#fff",
		padding: 10,
	},

	receiver: {
		marginLeft: "auto",
		marginRight: "auto",
		...GlobalStyles.h1,
		color: "#000",
	},
});
