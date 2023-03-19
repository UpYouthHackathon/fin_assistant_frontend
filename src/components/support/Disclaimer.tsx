import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import GlobalStyles from "../../styles/GlobalStyles";

export default function Disclaimer({ startCall }: { startCall: () => void }) {
	const [showModal, setShowModal] = useState(true);

	return (
		<Modal visible={showModal} animationType="slide" transparent>
			<View style={styles.drawerContainer}>
				<View style={styles.topView}>
					<Text style={styles.title}>FinAssistant AI Broker</Text>
					<TouchableOpacity
						onPress={() => {
							setShowModal(false);
							startCall();
						}}
					>
						<Text style={styles.closeButton}>X</Text>
					</TouchableOpacity>
				</View>
				<Text
					style={{
						...GlobalStyles.subtitle,
						fontSize: 12,
						width: "100%",
						marginTop: 5,
					}}
				>
					While we have safeguards in place, the system may occasionally
					generate incorrect or misleading information and produce offensive or
					biased content.
				</Text>
				<Text style={{ ...GlobalStyles.h1, marginVertical: 10 }}>
					Capabilities
				</Text>
				<View style={styles.flexStartView}>
					<Text style={styles.bulletPoint}>
						- Receive and answer user's questions
					</Text>
					<Text style={styles.bulletPoint}>
						- Remember the previous answers
					</Text>
					<Text style={styles.bulletPoint}>
						- Show empathy and give investment advices based on past
						interactions
					</Text>
				</View>
				<Text style={{ ...GlobalStyles.h1, marginVertical: 10 }}>
					Limitation
				</Text>
				<View style={styles.flexStartView}>
					<Text style={styles.bulletPoint}>
						- May occasionally produce harmful instructions or biased content
					</Text>
					<Text style={styles.bulletPoint}>
						- May generate incorrect information
					</Text>
					<Text style={styles.bulletPoint}>
						- May misunderstand user's intention due to voice audio quality
					</Text>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	topView: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 10,
	},

	closeButton: {
		...GlobalStyles.subtitle,
	},

	background: {
		flex: 1,
		width: "100%",
	},

	contentContainer: {
		width: "100%",
		height: "100%",
	},

	drawerContainer: {
		width: "85%",
		paddingHorizontal: 25,
		marginTop: "auto",
		marginBottom: "auto",
		marginLeft: "auto",
		marginRight: "auto",
		backgroundColor: "#fff",
		// opacity: 0.5,
		borderRadius: 10,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-evenly",
		paddingVertical: 20,
	},

	title: {
		...GlobalStyles.title,
	},

	flexStartView: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
	},

	bulletPoint: {
		marginBottom: 5,
		fontWeight: "300",
		fontSize: 14,
	},
});
