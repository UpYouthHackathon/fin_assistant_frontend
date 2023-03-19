import { StyleSheet, Text, View } from "react-native";
import React from "react";
import axios from "../../axios";
import { postAPI } from "../../api/postAPI";

export default function useChat() {
	async function callGPT(prompt: string) {
		try {
			const res = await axios.post(postAPI().gpt, { message: prompt });
			console.log(res.data.response);
		} catch (err) {
			console.log(err);
		}
	}
	return {
		callGPT,
	};
}

const styles = StyleSheet.create({});
