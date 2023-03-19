import { ImageBackground, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationStackProp } from "react-navigation-stack";
import Disclaimer from "../../components/support/Disclaimer";
import CallModule from "./CallModule";
import GuestBubble from "../../components/chat/GuestBubble";
import UserBubble from "../../components/chat/UserBubble";
import { fakeData } from "../../assets/data/fakeChat";
import { IMessage } from "../../interfaces/message.interface";

export default function SupportScreen({
	navigation,
}: {
	navigation: NavigationStackProp;
}) {
	const [startCall, setStartCall] = useState<boolean>(false);
	let textStack: IMessage[] = [];

	useEffect(() => {
		if (startCall) {
			let i = 0;
			setTimeout(() => {
				if (i < fakeData.length) {
					textStack.push(fakeData[i]);
					i++;
				}
			}, 2000);
		}
	}, [startCall]);

	return (
		<View>
			<ImageBackground
				resizeMode="cover"
				source={require("../../assets/images/supportBackground.png")}
			>
				<View style={styles.contentContainer}>
					<Disclaimer startCall={() => setStartCall(true)} />
					{textStack.map((val, index) =>
						val._id === "2" ? (
							<UserBubble content={val.content} />
						) : (
							<GuestBubble content={val.content} />
						)
					)}
					{startCall && <CallModule />}
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		width: "100%",
		height: "100%",
	},
});
