import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},

	title: {
		fontSize: 20,
		// fontFamily: "OpenSans-Bold",
		fontWeight: "600",
	},

	subtitle: {
		fontSize: 16,
		// fontFamily: "OpenSans-Regular",
		fontWeight: "400",
		color: "gray",
	},

	h1: {
		fontSize: 18,
		// fontFamily: "OpenSans-Bold",
		fontWeight: "600",
	},

	h2: {
		fontSize: 16,
		// fontFamily: "OpenSans-Medium",
		fontWeight: "500",
	},

	h3: {
		fontSize: 14,
		// fontFamily: "OpenSans-Regular",
		fontWeight: "400",
	},

	shadow: {
		shadowColor: "gray",
		shadowOpacity: 0.2,
		shadowOffset: { width: 0, height: 1 },
	},
});
