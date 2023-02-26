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
        amount: amount
    }
};



//deposit from
export const depositFromActionCreater = (account) => {
    return {
        type: 'DEPOSIT_FROM',
        account: account
    }
};



//transfer amount
export const transferAmountActionCreater = (amount) => {
    return {
        type: 'TRANSFER_AMOUNT',
        amount: amount
    }
};



//transfer to
export const transferToActionCreater = (account) => {
    return {
        type: 'TRANSFER_TO',
        accountt: account
    }
};



//transfer from
export const transferFromActionCreater = (account) => {
    return {
        type: 'TRANSFER_FROM',
        account: account
    }
};