import './AccountCard.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { withdrawFromActionCreater, depositFromActionCreater, transferFromActionCreater } from './ActionCreaters'
import { useDispatch } from 'react-redux';


const DeleteBasicBankComponent = (props) => {


  const dispatch = useDispatch();   

  return (
            <div>
                this is the delete component

            </div>
  )
}

export default DeleteBasicBankComponent;
