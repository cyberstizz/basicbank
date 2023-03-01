//delete amount

const loadState = () => {
    return {
        delete_account: 0
    }
};

const initialState = loadState()

export const DeleteReducer = (state = initialState, action) => {

    switch(action.type){
        case 'DELETE_ACCOUNT':
        return {...state,
            delete_account: action.delete_account
            };
            default:
            return state;
    };

};


