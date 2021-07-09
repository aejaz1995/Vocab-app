import {  GET_WORD_REQUEST ,
 GET_WORD_SUCCESS ,
 GET_WORD_FAILURE } from "./actionTypes"

 export const getWordRequest =()=>{

    return {
        type: GET_WORD_REQUEST
    }
 }

//  export const getWordSuccess =()=>{

//     return {
//         type: GET_WORD_SUCCESS
//     }
//  }

 export const getWordSuccess =(payload)=>{
    console.log(payload,"pa")
    return {
        type: GET_WORD_SUCCESS,
        payload:payload
    }
 }