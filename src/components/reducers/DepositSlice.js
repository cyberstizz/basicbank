import { createSlice } from "@reduxjs/toolkit";


const depositSlice = createSlice({
    name: 'deposit',
    initialState: {
        deposit_amount: null,
        deposit_from: null
    },
    reducers:{

        addDeposit(state, action){
            state.push({
                deposit_from: action.deposit_from,
            })
        }, addAmount(state, action){
            state.push({
                deposit_amount: action.deposit_amount
            })
        }
    }
});

export const { addDeposit, addAmount } = depositSlice.actions
export default DepositSlice.reducer