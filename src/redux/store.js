import {createStore} from 'redux';

import reducer from './reduces/index'

export default function configureStore(initialState){
  const store =  createStore(reducer, initialState)
  return store;
}