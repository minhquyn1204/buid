import { ActionTypes } from "../constants/ActionTypes";

const initialState ={
    posts:[],
    loading: false,
    error:null,
};

export const postReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ActionTypes.SET_DATA:
            return {...state,posts:action.payload}
        default:
            return state;
    }
}