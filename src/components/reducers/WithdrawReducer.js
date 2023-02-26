//withdraw amount

const loadState = () => {
    return {
        withdraw_from: '',
        withdraw_amount: null
    }
};

const initialState = loadState()

export const WithdrawReducer = (state = initialState, action) => {

    switch(action.type){
        case 'WITHDRAW_AMOUNT':
        return {
            withdraw_amount: action.withdraw_amount
            };
        case 'WITHDRAW_FROM':
            return {
                from_account: action.from_account
            };
            default:
            return state;
    };

};


