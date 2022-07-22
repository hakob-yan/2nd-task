import React, { useState } from 'react'
import './amount.css'
import { useDispatch, useSelector } from 'react-redux'
import { sourceAmount, sendPostRequestAmount, sendPostRequestTarget } from '../redux/actions/action'
import { TARGET } from '../redux/actions/actionTypes'
import { IState } from './types'



export const Amount: React.FC = () => {
    const [pay, setPay] = useState(30);
    const [rec, setRec] = useState()
    const dispatch = useDispatch();
    const data: IState = useSelector((state: IState) => state)
    const { absFee, fiatFee, source, target } = data.payReducer;

    const handleInputPay = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        const val = evt.target.value;

        if (+val !== NaN) {
            dispatch(sendPostRequestAmount(+val));
        }
    }

    const handleInputReceive = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        const val = evt.target.value;
        if (+evt.target.value !== NaN) {
            dispatch(sendPostRequestTarget(+val));
        }

    }
    console.log(data.payReducer);

    return (
        <form className='Amount'>
            <h3 className='Title'>Select Your Amount</h3>
            <div className="Pay">
                <h5 className='h5'>You Pay</h5>
                <input onChange={handleInputPay} value={source} className="Input-value" type="text" />
                <div className='Currency'>
                    <h5 className='USD'>USD</h5>
                    <div className='Img'></div>
                </div>
            </div>
            <div className='Fees'>
                <div className='Network-calc'>
                    <div className='Count'>
                        <h4>Network Fee</h4>
                        <h4 className='Fee'>{`${fiatFee}$`}</h4>
                    </div>
                    <span className='Operator'>+</span>
                    <div className='Count'>
                        <h4>C14 Fee</h4>
                        <h4 className='Fee'>{`${absFee}$`}</h4>
                    </div>
                    <span className='Operator'>=</span>
                    <div className='Count'><h4>Total Fee</h4>
                        <h4 className='Fee'>{`${(fiatFee + absFee).toFixed(2)}$`}</h4></div>
                </div>
            </div>
            <div className="Receive">
                <h5 className='h5'>You Receive</h5>
                <input onChange={handleInputReceive} value={target} className="Input-value" type="text" />
                <div className='Currency'><h5 className='USD'>USDC EVMOS</h5>
                    <div className='Img2'></div>
                </div>
            </div>
            <input className='Buy-button' type="submit" value='Buy Now' />
        </form >
    )
}