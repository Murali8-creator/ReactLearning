import {  configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import authSlice from './auth';



// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + action.value,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if(action.type === 'toggle'){
//     return {
//         counter: state.counter,
//         showCounter: !state.showCounter,
//     }
//   }

//   return state;
// };




const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});



export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;