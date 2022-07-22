import axios from 'axios';
import { Dispatch } from 'redux';
import { SOURCE, TARGET, UPDATE } from './actionTypes'
interface IData {
    type: string,
    payload: any
}
const REQUEST = `https://api-qjoa5a5qtq-uc.a.run.app/quotes`;

export function sourceAmount(data: string): IData {
    return {
        type: SOURCE,
        payload: data
    }
}
export function targetAmount(data: string): IData {
    return {
        type: TARGET,
        payload: data
    }
}


export const sendPostRequestAmount = (amount: number) => async (dispatch: Dispatch) => {
    try {
        const resp = await axios.post(REQUEST, {
            source_currency: "USD",
            target_crypto_asset_id: "b2384bf2-b14d-4916-aa97-85633ef05742",
            source_amount: `${amount}`
        });
        dispatch({ type: UPDATE, payload: resp.data });

    } catch (err) {
        console.error(err);
    }
}


export const sendPostRequestTarget = (amount: number) => async (dispatch: Dispatch) => {
    try {
        const resp = await axios.post(REQUEST, {
            source_currency: "USD",
            target_crypto_asset_id: "b2384bf2-b14d-4916-aa97-85633ef05742",
            target_amount: `${amount}`
        });
        
        dispatch({ type: UPDATE, payload: resp.data });

    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}
