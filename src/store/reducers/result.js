import * as actionTypes from '../actions/actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArr = [...state.results];
            // newArr.results.splice(id, 1)
            const updatedArray = state.results.filter(el => (
                el.id !== action.id
            ))
            return {
                ...state,
                results: updatedArray
            }

        
    }
    return state;
};

export default reducer;