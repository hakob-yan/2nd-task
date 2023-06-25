import axios from 'axios';
import { Dispatch } from 'redux';
import { UNVALID, UPDATE, VALID } from './actionTypes'
import { BASEURL, TOKEN, QUOTES, CURRENCY,CHECKOUT } from './consts';

const axiosInst = axios.create({ baseURL: BASEURL })

const valid = () => {
    return {
        type: VALID,
    }
}

export const unValid = (payload: string) => {
    return {
        type: UNVALID,
        payload: payload
    }
}


export const sendPostRequest = (amount: number, target: string) => async (dispatch: Dispatch) => {
    try {
        const resp = await axiosInst.post(QUOTES, {
            source_currency: CURRENCY,
            target_crypto_asset_id: TOKEN,
            payment_method: CHECKOUT,
            [target]: `${amount}`
        })

        dispatch(valid())
        dispatch({ type: UPDATE, payload: resp.data });

    } catch (err: any) {
        const e = err.response.data.message
        dispatch(unValid(e))
       }
}


