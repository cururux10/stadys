import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

import {Provider} from 'react-redux';
import {createStore,combineReducers} from 'redux';

let default_data = [
  
];

function reducer(state = default_data, action){
  if(action.type === '항목추가'){
  
    let found = state.findIndex((a)=>{return a.id === action.데이터.id});
    
    if( found >= 0 ){
      let copy =[...state];
      copy[found].quan++;
      return copy
    }
    else{
    let copy =[...state];
    copy.push(action.데이터);
    return copy
    }
  }
  else if(action.type === '수량증가') {
    let copy =[...state];
    copy[action.data].quan++;
    return copy
  }
  else if(action.type === '수량감소'){
    let copy = [...state];
    copy[action.data].quan--;
    return copy
  }
  else{
    return state
  }
    
}
let alert초기값 = true;

function reducer2(state = alert초기값, action){
  if(action.type === 'alert닫기'){
    return false
  }else{
    return state
  }
}

let store = createStore(combineReducers({reducer,reducer2}));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
