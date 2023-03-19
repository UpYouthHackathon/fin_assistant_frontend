import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import React from "react";
import { NavigationStackProp } from "react-navigation-stack";
import ChatItem from "./ChatItem";

export default function Chats({
	navigation,
}: {
	navigation: NavigationStackProp;
}) {
	return (
		<SafeAreaView style={styles.container}>
			<ChatItem
				receiver="FinAssistant AI"
				onPress={() => navigation.navigate("ChatRoom")}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
});
