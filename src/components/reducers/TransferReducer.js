//transferReducer

export const TransferReducer = (state, action) => {

    switch(action.type){
        case 'TRANSFER_FROM':
        return {...state,
            transfer_from: action.transfer_from
            };
        case 'TRANSFER_TO':
        return {...state,
                transfer_to: action.transfer_to
            };
        case 'TRANSFER_AMOUNT':
        return {...state,
            transfer_Amount: action.transfer_Amount
            };
            default:
            return state;
    };

};
