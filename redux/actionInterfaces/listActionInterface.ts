import { ITodo } from "../../interfaces";

export const ADD_ITEM = '@list/ADD_ITEM';
export const DELETE_ITEM = '@list/DELETE_ITEM';

interface IAddItem {
    type: typeof ADD_ITEM
    payload: ITodo
}

interface IDeleteItem {
    type: typeof DELETE_ITEM
    payload: number
}

export type ListActionInterface = IAddItem | IDeleteItem;