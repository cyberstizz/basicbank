import './DeleteBasicBankComponent.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { withdrawFromActionCreater, depositFromActionCreater, transferFromActionCreater } from './ActionCreaters'
import { useDispatch } from 'react-redux';


const DeleteBasicBankComponent = (props) => {


  const dispatch = useDispatch();   

  return (
            <div className='fullDeletebb'>
                Are you sure?
                <br/>
                <br/>
                

            </div>
  )
}

export default DeleteBasicBankComponent;
