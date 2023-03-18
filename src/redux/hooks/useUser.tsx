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
			// console.log(res.data.user);
		} catch (err) {
			console.log(err);
		} finally {
			console.log("finale");
		}
		// console.log("login press")
		// dispatch(setUser({
		//  id: "1",
		//  fullName: "Fuk",
		//  dateOfBirth: "Fuk",
		//  phoneNumber: "Fuk",
		//  email,
		//  occupation: "Fuk",
		//  password,
		//  role: "Fuk",
		// }));
	}
	return {
		user,
		login,
	};
}
