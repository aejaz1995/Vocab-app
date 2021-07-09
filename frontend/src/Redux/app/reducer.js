import {  GET_WORD_REQUEST ,
    GET_WORD_SUCCESS ,
    GET_WORD_FAILURE } from "./actionTypes"


const initialState = {
    words:[],
    isError:false
}

export const reducer = (state=initialState, {type, payload})=>{
    
    switch(type){

        case GET_WORD_SUCCESS:
            return {
                ...state,
                words: [...payload]
            }
        default :
        return state
    }
}