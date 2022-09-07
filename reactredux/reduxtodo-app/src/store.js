//  import {configureStore} from 'redux';
 
//  const Store=configureStore(rootReducers);
//  export default Store;
import { configureStore } from '@reduxjs/toolkit'
import rootReducers from './reducers'
const Store=configureStore(rootReducers);
export default Store;