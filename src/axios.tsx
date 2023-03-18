import axios from "axios";

const baseURL: string = "https://9211-113-185-53-18.ap.ngrok.io/v1/";

const instance = axios.create({
	baseURL,
	headers: {
		"Content-Type": "Application/json",
	},
});

export default instance;
