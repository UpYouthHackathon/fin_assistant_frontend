import {
	StyleSheet,
	Text,
	View,
	Animated,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Chats from "../chat/Chats";
import SupportScreen from "../support/SupportScreen";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import { NavigationStackProp } from "react-navigation-stack";
import HomeIcon from "@mui/icons-material/Home";
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from "react-native-ionicons";
import AICallScreen from "../support/AICallScreen";

const Tab = createBottomTabNavigator();

const RenderIcon = ({
	routeName,
	selectedTab,
}: {
	routeName: string;
	selectedTab: string;
}) => {
	let icon = "";
	switch (routeName) {
		case "Home":
			icon = "home";
			break;
		case "Chats":
			icon = "chatbubbles";
			break;
		case "History":
			icon = "book";
			break;
		case "Profile":
			icon = "person";
			break;
		case "Support":
			icon = "call";
			break;
	}

	console.log(icon);

	return (
		<Icon
			name={icon}
			size={25}
			color={routeName === selectedTab ? "#65a147" : "gray"}
		/>
	);
};

const renderTabBar = ({
	routeName,
	selectedTab,
	navigate,
}: {
	routeName: string;
	selectedTab: string;
	navigate: (selectedTab: string) => void;
}) => {
	return (
		<TouchableOpacity
			onPress={() => navigate(routeName)}
			style={styles.tabbarItem}
		>
			<RenderIcon routeName={routeName} selectedTab={selectedTab} />
		</TouchableOpacity>
	);
};

export default function Root() {
	return (
		// <Tab.Navigator initialRouteName="Hoome">
		// 	<Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
		// 	<Tab.Screen name="Chat" component={Chats} options={{headerShown: false}} />
		// 	<Tab.Screen name="History" component={Home} />
		// 	<Tab.Screen name="Profile" component={Home} />
		// </Tab.Navigator>
		<CurvedBottomBar.Navigator
			style={styles.bottomBar}
			shadowStyle={styles.shadow}
			height={60}
			circleWidth={60}
			bgColor="white"
			type="UP"
			initialRouteName="Chats"
			borderTopLeftRight
			tabBar={renderTabBar}
			renderCircle={({ selectedTab, navigate }) => (
				<Animated.View
					style={
						selectedTab === "Customer Support"
							? { ...styles.btnCircleUp, backgroundColor: "#65a147" }
							: { ...styles.btnCircleUp }
					}
				>
					<TouchableOpacity
						onPress={() => navigate("Customer Support")}
						style={styles.button}
					>
						<Icon
							name="call"
							color={selectedTab === "Customer Support" ? "#fff" : "#000"}
						/>
					</TouchableOpacity>
				</Animated.View>
			)}
		>
			<CurvedBottomBar.Screen name="Home" component={Home} position="LEFT" />
			<CurvedBottomBar.Screen name="Chats" component={Chats} position="LEFT" />
			<CurvedBottomBar.Screen
				name="Customer Support"
				component={AICallScreen}
				position="CENTER"
			/>
			<CurvedBottomBar.Screen
				name="History"
				component={Home}
				position="RIGHT"
			/>
			<CurvedBottomBar.Screen
				name="Profile"
				component={Home}
				position="RIGHT"
			/>
		</CurvedBottomBar.Navigator>
	);
}

const styles = StyleSheet.create({
	bottomBar: {},
	tabbarItem: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},

	btnCircleUp: {
		width: 50,
		height: 50,
		borderRadius: 30,
		borderColor: "#91d171",
		borderWidth: 3,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#E8E8E8",
		bottom: 15,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 1,
	},

	button: {
		flex: 1,
		justifyContent: "center",
	},

	shadow: {
		shadowColor: "#DDDDDD",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 1,
		shadowRadius: 5,
	},
});
