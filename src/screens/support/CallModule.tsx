import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-ionicons";

export default function CallModule() {
	return (
		<View style={styles.container}>
			<View style={styles.rowStyle}>
				<TouchableOpacity style={styles.buttonStyle}>
					<Icon name="aperture" size={30} color="#fff" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonStyle}>
					<Icon name="volume-off" size={30} color="#fff" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonStyle}>
					<Icon name="reverse-camera" size={30} color="#fff" />
				</TouchableOpacity>
				<TouchableOpacity
					style={{ ...styles.buttonStyle, backgroundColor: "#ca3636" }}
				>
					<Icon name="close" size={30} color="#fff" />
				</TouchableOpacity>
			</View>
			<View style={styles.rowStyle}>
				<TouchableOpacity style={{ ...styles.buttonStyle, width: "45%" }}>
					<Icon name="videocam" size={30} color="#fff" />
					<Text style={{ marginLeft: 10, color: "#fff" }}>Camera</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{ ...styles.buttonStyle, width: "45%" }}>
					<Icon name="volume-high" size={30} color="#fff" />
					<Text style={{ marginLeft: 10, color: "#fff" }}>Speaker</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#152238",
		height: 250,
		width: "100%",
		paddingHorizontal: 40,
		marginTop: "auto",
	},

	rowStyle: {
		marginBottom: 20,
		flex: 1,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	buttonStyle: {
		padding: 10,
		width: 50,
		height: 50,
		borderRadius: 50,
		backgroundColor: "#444",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
});
