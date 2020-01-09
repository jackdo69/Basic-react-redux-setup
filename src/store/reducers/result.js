import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../utility';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})})
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArr = [...state.results];
            // newArr.results.splice(id, 1)
            const updatedArray = state.results.filter(el => (
                el.id !== action.id
            ))
            return updateObject(state, {results: updatedArray});   
    }
    return state;
};

export default reducer;