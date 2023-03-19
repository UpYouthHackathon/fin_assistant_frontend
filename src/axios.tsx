import axios from "axios";

const baseURL: string = "https://ef08-113-185-53-65.ap.ngrok.io/v1/";

const instance = axios.create({
	baseURL,
	headers: {
		"Content-Type": "Application/json",
	},
});

export default instance;
