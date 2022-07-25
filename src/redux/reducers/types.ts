export interface IData {
    source_amount: string,
    target_amount: string,
    fiat_blockchain_fee: string,
    absolute_internal_fee: string,
    total_fee: string,
}


export interface IAction {
    type: string;
    payload: IData
}
export interface IErrAction {
    type: string;
    payload: string
}

export interface IPay {
    source: number,
    target: number,
    fiatFee: number,
    absFee: number,
    totalFee: number,

}

export interface IError {
    error: string
}