import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';

import categoryReducer from './Category/categorySlice.js.js';

const logger=(store)=>(next)=>(action)=>{
    console.log(store.getstore());
    next(action);
};

const store = configureStore({
    category: categoryReducer,
    middleware: (getDefaultMiddleware) =>[...getDefaultMiddleware(),logger],
});

// Store has all of the default middleware added, _plus_ the logger middleware