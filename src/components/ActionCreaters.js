export const withdrawAmountActionCreater = (amount) => {
    return {
        type: 'WITHDRAW_AMOUNT',
        withdraw_amount: amount
    }
};



//withdraw from
export const withdrawFromActionCreater = (account) => {
    return {
        type: 'WITHDRAW_FROM',
        withdraw_from: account
    }
};




//deposit amount
export const depositAmountActionCreater = (amount) => {
    return {
        type: 'DEPOSIT_AMOUNT',
        deposit_amount: amount
    }
};



//deposit from
export const depositFromActionCreater = (account) => {
    return {
        type: 'DEPOSIT_FROM',
        from_account: account
    }
};



//transfer amount
export const transferAmountActionCreater = (amount) => {
    return {
        type: 'TRANSFER_AMOUNT',
        transfer_amount: amount
    }
};



//transfer to
export const transferToActionCreater = (account) => {
    return {
        type: 'TRANSFER_TO',
        transfer_to: account
    }
};



//transfer from
export const transferFromActionCreater = (account) => {
    return {
        type: 'TRANSFER_FROM',
        transfor_from: account
    }
};

export const DeleteFromActionCreater = (account) => {
    return {
        type: 'DELETE_ACCOUNT',
        delete_account: account
    }
};
