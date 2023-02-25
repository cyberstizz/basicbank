//DepositReducer

export const DepositReducer = (state, action) => {

    switch(action.type){
        case 'DEPOSIT_FROM':
        return {...state,
            deposit_from: action.deposit_from
            };
        case 'DEPOSIT_AMOUNT':
        return {...state,
                deposit_amount: action.deposit_amount
            };
            default:
            return state;
    };

};
