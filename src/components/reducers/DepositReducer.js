//DepositReducer

const loadState = () => {
    return {
        deposit_from: null,
        deposit_amount: null
    }
};

const initialState = loadState()


export const DepositReducer = (state = initialState, action) => {

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
