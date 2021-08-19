import React, {useState} from 'react';
import './App.css';
import Message from "./Message";

function App() {
  const[inputText, setInputText] = useState("");

  return (
    <div className="App">
      <div>Hello, people!</div>
      <button onClick={(e) => setInputText("Let’s code to ReactJS!")}>Press the button</button>
      <Message textToShow={inputText}/>
    </div>
  );
}

export default App;
