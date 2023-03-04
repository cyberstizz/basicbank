import {Link} from 'react-router-dom'
import { useId, useState } from 'react'
import { useEffect } from 'react'
import './DeleteComponent.css'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteFromActionCreater } from './ActionCreaters';
// import { depositAmountActionCreater } from './ActionCreaters'

const DeleteComponent = (props) => {

    const accountToDelete = useSelector((state) => state.delete.delete_account)


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

        dispatch(DeleteFromActionCreater(event.target.value))


    };

    const deleteHandler = () => {

        if(accountToDelete == 0){
            console.log(props.data[0].accountnumber)
            dispatch(DeleteFromActionCreater(props.data[0].accountnumber))

        }else{
        //make sure that it is working correctly
        console.log(accountToDelete)
    }

    console.log(props.data[0]);


       

        //open the confirmation page
        props.deleteOne()


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
                   return <option key={index} className="deletetype">{account.accountnumber}</option>
                })}
            </select>
          </div>
          <button onClick={deleteHandler} className='deleteButton'>Delete</button>

          
          
          
          </div> 
         )
    }
    
    
    export default DeleteComponent;