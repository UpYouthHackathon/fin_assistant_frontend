import React from "react";
import { UserState, setUser } from "../slices/userSlice";
import axios from "../../axios";
import { IUser } from "../../interfaces/user.interface";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { postAPI } from "../../api/postAPI";

export function useUser() {
	const user: IUser = useSelector((state: RootState) => state.user.user);
	const dispatch: AppDispatch = useDispatch();

	async function login(phoneNumber: string, password: string) {
		try {
			const res = await axios.post(postAPI().login, {
				phoneNumber,
				password,
			});
			console.log("Login success", res.data.user);
		} catch (err) {
			console.log(err);
		}
	}

	async function register(user: IUser) {
		try {
			const res = await axios.post(postAPI().register, user);
			console.log("Register success", res.data.user);
		} catch (err) {
			console.log(err);
		}
	}

	return {
		user,
		login,
		register,
	};
}
