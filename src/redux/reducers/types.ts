export interface IData {
    id: string,
    source_currency: string,
    target_crypto_asset_id: string,
    source_amount: string,
    target_amount: string,
    fiat_blockchain_fee: string,
    absolute_internal_fee: string,
    full_fee: string,
    internal_fee_percent: string,
    expires_at: string
}


export interface IAction {
    type: string;
    payload: IData
}
