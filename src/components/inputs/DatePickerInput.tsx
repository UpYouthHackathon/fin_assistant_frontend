import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import { DateTime } from "luxon";
import DatePicker, { DatePickerProps } from "react-native-date-picker";

export default function DatePickerInput({
	date,
	handleConfirm,
	placeholder,
	style,
	isError,
	errorMsg,
	mode,
}: {
	date: Date;
	handleConfirm: (date: Date) => void;
	placeholder?: string;
	style?: any;
	isError?: boolean;
	errorMsg?: string;
	mode?: DatePickerProps["mode"];
}) {
	const dt = DateTime.local();
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
	function onConfirm(date: Date) {
		handleConfirm(date);
		setDatePickerVisibility(false);
	}

	function toggleDatePicker() {
		setDatePickerVisibility(!isDatePickerVisible);
	}

	return (
		<View style={style}>
			<TouchableOpacity style={styles.button} onPress={toggleDatePicker}>
				<Text style={styles.buttonText}>
					{placeholder && dt.year <= date.getFullYear()
						? placeholder
						: date.toLocaleDateString()}
				</Text>
			</TouchableOpacity>
			{isError ? (
				<Text style={styles.error}>{errorMsg}</Text>
			) : (
				<Text style={styles.error}></Text>
			)}
			<DatePicker
				open={isDatePickerVisible}
				date={date}
				onConfirm={onConfirm}
				onCancel={toggleDatePicker}
				modal
				mode={mode ? mode : "date"}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 10,
		padding: 12,
		width: "100%",
		backgroundColor: "#fff",
		// ...GlobalStyles.shadow,
	},

	buttonText: {
		fontSize: 14,
		color: "gray",
	},

	error: {
		marginLeft: 5,
		marginTop: 5,
		color: "red",
		...GlobalStyles.h3,
		fontSize: 10,
	},
});
