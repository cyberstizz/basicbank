import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import './DeleteComponent.css'
import { useDispatch } from 'react-redux'
// import { depositAmountActionCreater } from './ActionCreaters'

const DeleteComponent = (props) => {


useEffect(() => {

    console.log(props)
}, [])

const [deleteAccount, setDeleteAccount] = useState(null)


    const deleteChangeHandler = (event) => {
        setDeleteAccount(event.target.value)
    }


    return (
<div className='fullDeleteComponent'>
          
          
          <div className='toprow'>
            <div className='Xout' onClick={props.xoutHandler}>x</div>
            <div className='deleteHeader'>delete</div>
          </div>

          <div className='deleteSection'>
            <div className='deleteSectionHeader'>Which account do you want to delete</div>
            <select placeholder="Delete Type" type="text" className="deletetype" onChange={deleteChangeHandler}>
                {props.data.map((account) => {
                   return <option>{account.accountnumber}</option>
                })}
            </select>
          </div>
          <div className='descriptionSection'>description</div>
          <button onClick={props.depositHandler} className='deleteButton'>Delete</button>

          
          
          
          </div>          )
    }
    
    
    export default DeleteComponent;