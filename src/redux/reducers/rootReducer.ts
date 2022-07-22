import { UPDATE } from '../actions/actionTypes'
import { IPay } from '../../Components/types'
import { combineReducers } from 'redux';
import { IAction } from './types';


const initialState = {
    source: 20,
    target: 19.39,
    fiatFee: 3.96,
    absFee: 2.83,
    fullFee: 3.96

}


const payReducer = (state: IPay = initialState, action: IAction): IPay => {
    switch (action.type) {
        case UPDATE: {
            const data = action.payload

            return {
                source: +data.source_amount,
                target: +data.target_amount,
                fiatFee: +data.fiat_blockchain_fee,
                absFee: +data.absolute_internal_fee,
                fullFee: +data.full_fee
            }
        }
        default: {
            return state;
        }
    }
};

export const rootReducer = combineReducers({ payReducer })

