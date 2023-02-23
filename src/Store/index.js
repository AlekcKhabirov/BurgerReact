import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';

import categoryReducer from './Category/categorySlice';


const logger=(store)=>(next)=>(action)=>{
    console.log(store.getstore());
    next(action);
};

export const store = configureStore((
    reducer:{
        category: categoryReducer,
    }
))



/*const store = configureStore({
    category: categoryReducer,
    middleware: (getDefaultMiddleware) =>[...getDefaultMiddleware(),logger],
});

// Store has all of the default middleware added, _plus_ the logger middleware