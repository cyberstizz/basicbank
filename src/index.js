import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from 'redux';
import { Provider } from 'react-redux';
import { DepositReducer } from './components/reducers/DepositReducer';
import { WithdrawReducer } from './components/reducers/WithdrawReducer';
import { TransferReducer } from './components/reducers/TransferReducer';


export const basicBankstore = configureStore({
  DEPOSIT_FROM: 'PASS',
  DEPOSIT_AMOUNT: 'PASS',
  WITHDRAW_FROM: 'PASS',
  WITHDRAW_AMOUNT: 'PASS',
  TRANSFER_FROM: 'PASS',
  TRANSFER_TO: 'PASS',
  TRANSFER_AMOUNT: 'PASS'
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={configureStore}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
