import { ITodo } from './../../interfaces/index';
import { ListActionInterface, ADD_ITEM, DELETE_ITEM } from "../actionInterfaces/listActionInterface";

export const addItem = (task: ITodo): ListActionInterface => ({
    type: ADD_ITEM,
    payload: task
})

export const deleteItem = (id: number): ListActionInterface => ({
    type: DELETE_ITEM,
    payload: id
})