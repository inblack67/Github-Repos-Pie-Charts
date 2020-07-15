import { PURE_PIES, ERROR, GET_REPOS } from '../types';

export default (state, action) => {
    const { type, payload } = action;

    switch(type){
        case GET_REPOS: 
        return {
            ...state,
            repos: payload.data,
            user: payload.user
        }
        case PURE_PIES: 
        return {
            ...state,
            pies: payload,
            loading: false
        }
        case ERROR: 
        return {
            ...state,
            repos: [],
            pies: [],
            loading: false
        }
        default: return state;
    }
}