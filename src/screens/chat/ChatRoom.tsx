import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	Image,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import React from "react";
import UserBubble from "../../components/chat/UserBubble";
import GuestBubble from "../../components/chat/GuestBubble";
import Input from "../../components/inputs/Input";
import GlobalStyles from "../../styles/GlobalStyles";
import { IMessage } from "../../interfaces/message.interface";
import { fakeData } from "../../assets/data/fakeChat";
import useChat from "../../redux/hooks/useChat";

function renderItem({
	item,
	index,
	data,
}: {
	item: IMessage;
	index: number;
	data: IMessage[];
}) {
	return (
		<View>
			{(index === 0 ||
				new Date(item.createdAt).getTime() -
					new Date(data[index - 1].createdAt).getTime() >=
					300000) && (
				<Text style={styles.textTime}>
					{new Date(item.createdAt).toLocaleString()}
				</Text>
			)}
			{item.senderId === "2" ? (
				<UserBubble content={item.content} />
			) : (
				<GuestBubble content={item.content} />
			)}
			{index < data.length && data[index + 1]?._id !== "2" && (
				<View style={{ marginBottom: 10 }} />
			)}
		</View>
	);
}

export default function ChatRoom() {
	const { callGPT } = useChat();
	const [text, setText] = React.useState<string>("");

	function Send() {
		callGPT(text);
	}

	return (
		<View style={styles.container}>
			<FlatList
				style={styles.flatList}
				data={fakeData}
				renderItem={({ item, index }) =>
					renderItem({ item, index, data: fakeData })
				}
			/>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				keyboardVerticalOffset={70}
				style={styles.inputContainer}
			>
				<TouchableOpacity>
					<Image source={require("../../assets/images/camera.png")} />
				</TouchableOpacity>
				<Input
					style={styles.input}
					placeholder="Type a message"
					value={text}
					onChangeText={setText}
					keyboardType="default"
				/>
				<TouchableOpacity onPress={Send}>
					<Image source={require("../../assets/images/send.png")} />
				</TouchableOpacity>
			</KeyboardAvoidingView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		paddingHorizontal: 20,
	},

	flatList: {
		height: "100%",
	},

	inputContainer: {
		// flex: 1,
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 10,
		marginTop: 10,
		...GlobalStyles.shadow,
	},

	input: {
		flex: 1,
		marginLeft: 10,
		marginRight: 0,
	},

	touchable: {
		backgroundColor: "blue",
	},

	textTime: {
		...GlobalStyles.subtitle,
		fontSize: 10,
		marginLeft: "auto",
		marginRight: "auto",
		marginBottom: 5,
		marginTop: 10,
	},
});
