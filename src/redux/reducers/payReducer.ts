import { UPDATE } from '../actions/actionTypes';
import { IAction, IPay } from './types'

const initialState = {
    source: 100,
    target: 97,
    fiatFee: 0.01,
    absFee: 2.99,
    totalFee: 3,
}


export const payReducer = (state: IPay = initialState, action: IAction): IPay => {
    switch (action.type) {
        case UPDATE: {
            const data = action.payload
            return {
                source: +data.source_amount,
                target: +data.target_amount,
                fiatFee: +data.fiat_blockchain_fee,
                absFee: +data.absolute_internal_fee,
                totalFee: +data.total_fee,
            }
        }
        default: {
            return state;
        }
    }
};