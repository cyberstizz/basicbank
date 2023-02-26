import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    test: 'it works',
}

const WithdrawSlice = createSlice({
    name: 'withdraw',
    initialState: [initialState],
    reducers:{
        withdraw_amount: (state = initialState, action) => {
                return {
                test: action.test
                }
                },
        withdraw_from: (state = initialState, action) => {
              state.withdraw_from = action.withdraw_from
            }
        }
    }
);

export const { withdraw_amount, withdraw_from } = WithdrawSlice.actions
export default WithdrawSlice.reducer