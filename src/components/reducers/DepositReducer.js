//withdraw amount

const loadState = () => {
    return {
        deposit_from: 0,
        deposit_amount: 0
    }
};

const initialState = loadState()

export const DepositReducer = (state = initialState, action) => {

    switch(action.type){
        case 'DEPOSIT_AMOUNT':
        return {...state,
            deposit_amount: action.deposit_amount
            };
        case 'DEPOSIT_FROM':
            return {...state,
                deposit_from: action.from_account
            };
            default:
            return state;
    };

};


