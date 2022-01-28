import { ActionTypes } from '../constants/ActionTypes';
import dataHome from '../constants/dataHome';

export const getid = (id) =>{
    const setid = dataHome[id-1]
    return{
        type:ActionTypes.SET_DATA,
        payload:setid,
    }
}