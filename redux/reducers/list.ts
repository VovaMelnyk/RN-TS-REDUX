import { ITodo } from "../../interfaces";
import { ListActionInterface, ADD_ITEM, DELETE_ITEM } from "../actionInterfaces/listActionInterface";

const initialState: ITodo[] = [];

export default (state = initialState, action: ListActionInterface) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload]
        case DELETE_ITEM:
            return state.filter(el => el.id !== action.payload)
        default:
            return state
    }
}