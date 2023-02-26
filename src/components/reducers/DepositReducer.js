//withdraw amount

const loadState = () => {
    return {
        deposit_from: 'this is deposit from',
        deposit_amount: 'this is deposit amount'
    }
};

const initialState = loadState()

export const DepositReducer = (state = initialState, action) => {

    switch(action.type){
        case 'Deposit_AMOUNT':
        return {
            withdraw_amount: action.withdraw_amount
            };
        case 'Deposit_FROM':
            return {
                from_account: action.from_account
            };
            default:
            return state;
    };

};


