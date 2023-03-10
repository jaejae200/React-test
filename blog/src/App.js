/* eslint-disable  */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [a, b] = useState(['남자 코트 추천', '222', '333']);
  let [따봉, count] = useState(0); 

  function 함수(){
    count(따봉+1)
  }


  return (
    <div className="App">
      <div>
        <h4>{ a[0] } <span onClick={ 함수 }>👩</span> {따봉} </h4>
      </div>
      <h4>{ a[1] }</h4>
      <h4>{ a[2] }</h4>
    </div>
  );
}

export default App;
