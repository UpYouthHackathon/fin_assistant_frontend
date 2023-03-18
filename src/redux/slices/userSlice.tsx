import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/user.interface";

export interface UserState {
	user: IUser;
}

const initialState: UserState = {
	user: {
		_id: "",
		fullName: "",
		dateOfBirth: new Date(),
		phoneNumber: "",
		email: "",
		occupation: "",
		password: "",
		role: "",
	},
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload;
			console.log("setUser", state.user);
		},
	},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
