//withdraw amount

const loadState = () => {
    return {
        withdraw_from: null,
        withdraw_amount: null
    }
};

const initialState = loadState()

export const WithdrawReducer = (state = initialState, action) => {

    switch(action.type){
        case 'WITHDRAW_AMOUNT':
        return {...state,
            withdraw_amount: action.withdraw_amount
            };
        case 'WITHDRAW_FROM':
            return {...state,
                withdraw_from: action.withdraw_from
            };
            default:
            return state;
    };

};


