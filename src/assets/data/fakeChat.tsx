import { IMessage } from "../../interfaces/message.interface";

export const fakeData: IMessage[] = [
	{
		_id: "1",
		senderId: "2",
		roomId: "3",
		content: "hello there stranger",
		createdAt: "2011-10-05T14:48:00.000Z",
	},
	{
		_id: "2",
		senderId: "2",
		roomId: "3",
		content: "hello there stranger",
		createdAt: "2011-10-05T14:51:00.000Z",
	},
	{
		_id: "3",
		senderId: "4",
		roomId: "3",
		content: "hello there stranger",
		createdAt: "2011-10-05T14:52:00.000Z",
	},
	{
		_id: "4",
		senderId: "2",
		roomId: "3",
		content: "hello there stranger",
		createdAt: "2011-10-05T14:55:00.000Z",
	},
	{
		_id: "5",
		senderId: "4",
		roomId: "3",
		content: "hello there stranger",
		createdAt: "2011-10-05T14:59:00.000Z",
	},
];
