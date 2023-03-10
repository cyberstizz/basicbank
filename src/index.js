import React from 'react';
import { configureStore } from "@reduxjs/toolkit";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { WithdrawReducer } from './components/reducers/WithdrawReducer';
import { TransferReducer } from './components/reducers/TransferReducer';
import { DepositReducer } from './components/reducers/DepositReducer';
import { DeleteReducer } from './components/reducers/DeleteReducer';


export const basicBankstore = configureStore({
  reducer:  {
    withdraw: WithdrawReducer,
    transfer: TransferReducer,
    deposit: DepositReducer,
    delete: DeleteReducer
  }
  
  
  // withdraw_from: WithdrawReducer,
  // withdraw_amount: WithdrawReducer,
  // transfer_from: TransferReducer,
  // transfer_to: TransferReducer,
  // transfer_amount: TransferReducer
  
});

basicBankstore.subscribe(() => {
  console.log(basicBankstore.getState())
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={basicBankstore}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
