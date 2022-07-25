import { IError, IPay } from "../reducers/types"

export interface IState {
    payReducer: IPay
    errorReducer: IError
}