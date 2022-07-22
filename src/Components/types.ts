export interface IPay {
    source: number,
    target: number,
    fiatFee: number,
    absFee: number,
    fullFee: number
}
export  interface IState {
    payReducer: IPay
}