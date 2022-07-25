import { UNVALID, VALID } from "../actions/actionTypes"
import { IErrAction, IError } from "./types"

export const errorReducer = (state: IError = { error: "" }, action: IErrAction) => {
    switch (action.type) {
        case UNVALID: {
            return { error: action.payload }
        }
        case VALID: {
            return { error: "" }
        }
        default: {
            return state
        }
    }
}