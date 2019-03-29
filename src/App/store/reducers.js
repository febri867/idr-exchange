import initialState from './state'
import {
    CHANGE_NOMINAL
} from "./actions"

export default (state = initialState, { type, payload }) => {
   switch (type){
       case CHANGE_NOMINAL:
           return {
               ...state,
               base: {
                   value: payload.value
               }
           };
       default:
           return state
   }
}
