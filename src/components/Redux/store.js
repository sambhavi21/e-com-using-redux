 import {createStore,applyMiddleware}  from 'redux'
import  thunk from 'redux-thunk';
import e_com_reducer from './e-com-components/e-com-reducer';
const store=createStore(e_com_reducer,applyMiddleware(thunk));
export default store;
