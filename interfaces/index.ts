export interface ITodo {
    text: string,
    id: number
}

export interface IRootState {
    input: string,
    list: ITodo[]
}