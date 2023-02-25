//withdraw amount

const initialWithdrawState = () => {
    return {
        amount: 0
    }
}

const initialState = initialWithdrawState()

export const WithdrawReducer = (state = initialState, action) => {

    switch(action.type){
        case 'WITHDRAW_AMOUNT':
        return {
            amount: action.amount
            };
        case 'WITHDRAW_FROM':
            return {
                account: action.account
            };
            default:
            return state;
    };
    
};


//withdraw from



//deposit amount



//deposit from



//transfer amount



//transfer from


//transfer to