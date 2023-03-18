import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},

	title: {
		fontSize: 20,
		fontFamily: "OpenSans-Bold",
	},

	subtitle: {
		fontSize: 16,
		fontFamily: "OpenSans-Regular",
		color: "gray",
	},

	h1: {
		fontSize: 18,
		fontWeight: "600",
	},

	h2: {
		fontSize: 16,
		fontWeight: "400",
	},

	h3: {
		fontSize: 14,
		fontWeight: "600",
	},

	shadow: {
		shadowColor: "gray",
		shadowOpacity: 0.2,
		shadowOffset: { width: 0, height: 1 },
	},
});
