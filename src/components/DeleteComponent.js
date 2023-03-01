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

    const deleteHandler = (event) => {

        //put account into top level basic bank store

        const account_to_delete = event.target.value;

        //make sure that it is working correctly
        console.log(account_to_delete)

        //dispatch the account to deleter

        dispatch(DeleteFromActionCreater(account_to_delete))

        //open the confirmation page



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
                {props.data.map((account, index) => {
                   return <option key={index}>{account.accountnumber}</option>
                })}
            </select>
          </div>
          <div className='descriptionSection'>description</div>
          <button onClick={depositHandler} className='deleteButton'>Delete</button>

          
          
          
          </div> 
         )
    }
    
    
    export default DeleteComponent;