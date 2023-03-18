import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";

export default function TouchableButton({
	children,
	text,
	onPress,
	style,
	disabled,
}: {
	children?: JSX.Element;
	text?: string;
	onPress: () => void;
	style?: any;
	disabled?: boolean;
}) {
	return (
		<TouchableOpacity
			disabled={disabled}
			onPress={onPress}
			style={
				disabled
					? { ...styles.buttonDisabled, ...style }
					: { ...styles.buttonActive, ...style }
			}
		>
			{children ? children : <Text style={styles.textButton}>{text}</Text>}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	buttonActive: {
		backgroundColor: "#65a147",
		padding: 10,
		borderRadius: 50,
		...GlobalStyles.shadow,
	},

	buttonDisabled: {
		backgroundColor: "#a3a2bb",
		padding: 10,
		borderRadius: 50,
		...GlobalStyles.shadow,
	},

	textButton: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "500",
		marginLeft: "auto",
		marginRight: "auto",
	},
});
