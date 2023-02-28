import {Link} from 'react-router-dom'
import { useState } from 'react'
import './DeleteComponent.css'
import { useDispatch } from 'react-redux'
// import { depositAmountActionCreater } from './ActionCreaters'

const DeleteComponent = (props) => {

const [deleteAccount, setDeleteAccount] = useState(null)


    const deleteChangeHandler = (event) => {
        setDeleteAccount(event.target.value)
    }

  const dispatch = useDispatch()

    return (
<div className='fullDeleteComponent'>
          
          
          <div className='toprow'>
            <div className='Xout' onClick={props.xoutHandler}>x</div>
            <div className='deleteHeader'>delete</div>
          </div>

          <div className='deleteSection'>
            <div className='deleteSectionHeader'>Delete Amount</div>
            <input onChange={deleteChangeHandler} type='text' placeholder='$0.00' className='depositField'></input>
          </div>
          <div className='descriptionSection'>description</div>
          <button onClick={props.depositHandler} className='depositButton'>Make deposit</button>

          
          
          
          </div>          )
    }
    
    
    export default DeleteComponent;