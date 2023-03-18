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
}: {
	onChangeText: (text: string) => void;
	value: string;
	placeholder?: string;
	keyboardType: KeyboardTypeOptions;
	style?: any;
}) {
	return (
		<TextInput
			style={{ ...styles.keyboard, ...style }}
			onChangeText={onChangeText}
			value={value}
			placeholder={placeholder}
			keyboardType={keyboardType}
		/>
	);
}

const styles = StyleSheet.create({
	keyboard: {
		borderRadius: 10,
		padding: 12,
		// height: 42,
		width: 100,
		backgroundColor: "#fff",
		...GlobalStyles.shadow,
	},
});
