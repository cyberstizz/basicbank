//withdraw from

const initialWithdrawState = () => {
    return {
        account: null
    }
}

const initialState = initialWithdrawState()

export const WithdrawFromReducer = (state = initialState, action) => {

    switch(action.type){
        case 'WITHDRAW_From':
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