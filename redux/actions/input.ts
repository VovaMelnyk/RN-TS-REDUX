import { InputActionType, INPUT_CLEAR, INPUT_CHANGE } from './../actionInterfaces/inputActionInterface';

export const inputChange = (text: string): InputActionType => ({
    type: INPUT_CHANGE,
    payload: text
});

export const inputClear = (): InputActionType => ({
    type: INPUT_CLEAR,
})