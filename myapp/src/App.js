import { useState } from 'react';

import './App.css';


function App() {

const [count , setCount] = useState(0);
const [guestcount, setGuestCount] = useState(0);

function btn1(){
  setCount(count+1)
  document.querySelector("#home-score").innerHTML = count
}

function btn2(){
  setCount(count+2)
  document.querySelector("#home-score").innerHTML = count
}

function btn3(){
  setCount(count+3)
  document.querySelector("#home-score").innerHTML = count
}

function btn01(){
  setGuestCount(guestcount+1)
  document.querySelector("#guest-score").innerHTML = guestcount
}

function btn02(){
  setGuestCount(guestcount+2)
  document.querySelector("#guest-score").innerHTML = guestcount
}

function btn03(){
  setGuestCount(guestcount+3)
  document.querySelector("#guest-score").innerHTML = guestcount
}

  return (
    <div className="App">
      <h2>basket-ball score board</h2>

<div className="App-container">

<div className="home">
  <h4>HOME</h4>
  <p id="home-score">{count}</p>
  <button id="btn1" onClick={()=>btn1()}>+1</button>
  <button id="btn2" onClick={()=>btn2()}>+2</button>
  <button id="btn3" onClick={()=>btn3()}>+3</button>

</div>
<div className="guest">
<h4>GUEST</h4>
  <p id="guest-score">{guestcount}</p>
  <button id="btn01" onClick={()=>btn01()}>+1</button>
  <button id="btn02" onClick={()=>btn02()}>+2</button>
  <button id="btn03" onClick={()=>btn03()}>+3</button>
</div>

</div>

    </div>
  );
}

export default App;
