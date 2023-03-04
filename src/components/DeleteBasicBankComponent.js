import './DeleteBasicBankComponent.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { withdrawFromActionCreater, depositFromActionCreater, transferFromActionCreater } from './ActionCreaters'
import { useDispatch } from 'react-redux';


const DeleteBasicBankComponent = (props) => {


  const dispatch = useDispatch();  
  


  return (
            <div className='fullDeletebb'>

              <div className='deleteBBtoprow'>

            <div className='deleteBBXout' onClick={props.xoutHandler}>&#9747;</div>

               <div className='deletebbHeader'> Are you sure?</div>
                </div>
                <br/>
                <span className='theText'>you only have one account, are sure you want to leave Basic Bank?
                this will delete your entire account with us, so you will not be
                able to log back in
                </span>
                
                <button onClick={props.deleteEverything} className="deletebbbutton">Delete</button>

            </div>
  )
}

export default DeleteBasicBankComponent;
