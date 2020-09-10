export const INPUT_CHANGE = "@input/INPUT_CHANGE";
export const INPUT_CLEAR = '@input/INPUT_CLEAR';

export interface IInputChange {
    type: typeof INPUT_CHANGE,
    payload: string
}

export interface IInputClear {
    type: typeof INPUT_CLEAR
}

export type InputActionType = IInputChange | IInputClear