//withdraw amount

const initialWithdrawState = () => {
    return {
        amount: 0
    }
}

const initialState = initialWithdrawState()

export const WithdrawReducer = (state = initialState, action) => {

    switch(action.type){
        case 'Withdraw':
        return {...state,
                items: [...state.items, action.name] 
            };
        case 'REMOVE_FROM_CART':
            return {...state.items.map(item => item.title !== action.payload)};
        // case 'CHANGE_QUANTITY':
        //     // return {...state.items.map(item => {
        //     //         item.title !== action.payload.title ? {...item,quantity: action.payload.quantity} : {item}
        //     // })
        //     //     };
        case 'CLEAR_CART':
            return {
                items: []
            };
            default:
            return state;
    }
    return state
};


//withdraw from



//deposit amount



//deposit from



//transfer amount



//transfer from


//transfer to