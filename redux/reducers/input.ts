import { InputActionType, INPUT_CHANGE, INPUT_CLEAR } from './../actionInterfaces/inputActionInterface';

const initialState: string = '';

export default (state = initialState, action: InputActionType) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return action.payload
        case INPUT_CLEAR:
            return initialState
        default:
            return state
    }
}