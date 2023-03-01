import {Link} from 'react-router-dom'
import { useId, useState } from 'react'
import { useEffect } from 'react'
import './DeleteComponent.css'
import { useDispatch } from 'react-redux'
import { DeleteFromActionCreater } from './ActionCreaters';
// import { depositAmountActionCreater } from './ActionCreaters'

const DeleteComponent = (props) => {


    const API_HOST = 'http://localhost:8000';

    let _csrfToken = null;
  
    const getCsrfToken = async () => {
      if (_csrfToken === null) {
        const response = await fetch(`${API_HOST}/csrf/`, {
          credentials: 'include',
        });
        const data = await response.json();
        _csrfToken = data.csrfToken;
      }
      return _csrfToken;
    }


    const dispatch = useDispatch();

useEffect(() => {

    console.log(props)
}, [])

const [deleteAccount, setDeleteAccount] = useState(null)


    const deleteChangeHandler = (event) => {
        setDeleteAccount(event.target.value)
    };

    const depositHandler = (event) => {
        event.preventDefault();

        //put account into top level basic bank store

        const account_to_delete = event.target.value;

        dispatch(withdrawFromActionCreater(account_to_delete))



        //



    }


    return (
<div className='fullDeleteComponent'>
          
          
          <div className='toprow'>
            <div className='Xout' onClick={props.xoutHandler}>x</div>
            <div className='deleteHeader'>delete</div>
          </div>

          <div className='deleteSection'>
            <div className='deleteSectionHeader'>Delete which account</div>
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