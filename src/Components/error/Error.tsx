import React from "react"
import './error.css'
import { useSelector } from "react-redux"
import { IState } from '../../redux/store/types'

export const Error: React.FC = () => {

  const errorMessage = useSelector((state: IState) => state.errorReducer.error)

    return <div className="Error">
               {errorMessage}
           </div>
}