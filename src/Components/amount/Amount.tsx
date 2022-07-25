import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendPostRequest, unValid } from '../../redux/actions/action'
import { MESSAGE, SOURCE, TARGET } from '../../redux/actions/consts'
import { IPay } from '../../redux/reducers/types'
import { IState } from '../../redux/store/types'
import { useDebounce } from 'use-debounce';
import './amount.css'



export const Amount: React.FC = () => {
    
    const dispatch = useDispatch();
    const data: IPay = useSelector((state: IState) => state.payReducer)
    const { absFee, fiatFee, source, target, totalFee } = data;
    
    const [pay, setPay] = useState<number>(100);
    const [receive, setReceive] = useState<number>(25)
    const [debouncePay] = useDebounce<number>(pay, 800);
    const [debounceReceive] = useDebounce<number>(receive, 800);

      const handleInputPay = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        const val = evt.target.value;
        if (!isNaN(+val) ) { setPay(+val) }
        else { dispatch(unValid(MESSAGE)) }
    }

    const handleInputReceive = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        const val = evt.target.value;
        if (!isNaN(+val)) { setReceive(+val) }
        else { dispatch(unValid(MESSAGE)) }
    }
    useEffect(() => {
        dispatch(sendPostRequest(receive, TARGET));
    }, [debounceReceive])
    useEffect(() => {
        dispatch(sendPostRequest(pay, SOURCE));
    }, [debouncePay])

    useEffect(() => {
        setPay(source);
        setReceive(target)
    }, [source,target])
    
    return (
        <form className='Amount'>
            <h3 className='Title'>Select Your Amount</h3>
            <div className="Pay">
                <h5 className='h5'>You Pay</h5>
                <input onChange={handleInputPay} value={pay} className="Input-value" type="text" />
                <div className='Currency'>
                    <h5 className='USD'>USD</h5>
                    <div className='Img-1'></div>
                </div>
            </div>
            <div className='Fees'>
                <div className='Circle'></div>
                <span className='Circle-fees' >F e e s</span>
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
                        <h4 className='Fee'>{`${totalFee}$`}</h4></div>
                </div>
            </div>
            <div className="Receive">
                <h5 className='h5'>You Receive</h5>
                <input onChange={handleInputReceive} value={receive} className="Input-value" type="text" />
                <div className='Currency'><h5 className='USD'>USDC EVMOS</h5>
                    <div className='Img-2'></div>
                </div>
            </div>
            <input className='Buy-button' type="submit" value='Buy Now' />
        </form >
    )
}