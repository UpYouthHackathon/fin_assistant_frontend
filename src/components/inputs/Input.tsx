import {
	StyleSheet,
	Text,
	View,
	TextInput,
	KeyboardTypeOptions,
	StyleProp,
} from "react-native";
import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";

export default function Input({
	onChangeText,
	value,
	placeholder,
	keyboardType,
	style,
	isError,
	errorMsg,
}: {
	onChangeText: (text: string) => void;
	value: string;
	placeholder?: string;
	keyboardType: KeyboardTypeOptions;
	style?: any;
	isError?: boolean;
	errorMsg?: string;
}) {
	return (
		<View style={style}>
			<TextInput
				style={styles.keyboard}
				onChangeText={onChangeText}
				value={value}
				placeholder={placeholder}
				keyboardType={keyboardType}
			/>
			{isError ? (
				<Text style={styles.error}>{errorMsg}</Text>
			) : (
				<Text style={styles.error}></Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	keyboard: {
		borderRadius: 10,
		padding: 12,
		width: "100%",
		backgroundColor: "#fff",
		// ...GlobalStyles.shadow,
	},

	error: {
		marginLeft: 5,
		marginTop: 5,
		color: "red",
		...GlobalStyles.h3,
		fontSize: 10,
	},
});
