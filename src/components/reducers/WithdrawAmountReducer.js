//withdraw amount

export const WithdrawAmountReducer = (state, action) => {

    switch(action.type){
        case 'WITHDRAW_AMOUNT':
        return {...state,
            withdraw_amount: action.withdraw_amount
            };
        case 'WITHDRAW_FROM':
            return {...state,
                from_account: action.from_account
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