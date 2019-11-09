import React, { useRef } from "react";

class Username extends React.Component {
  state = { value: "" };

  changeValue(value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return <h1>{value}</h1>;
  }
}

export default function App() {
    const inputEl = useRef(null);

  function clickHandler() {
    console.log(inputEl.current)
    console.log(inputEl.current.changeValue("fewfe"))
  }
  

  return (
    <div>
      <button onClick={clickHandler}>Change Username</button>
      <input type="text" />
      <h1>Kashan is a genius boy :) [Commit 1]</h1>
      <h1>Kashan is a choclatey boy :) [Commit 3]</h1>
      <Username ref={inputEl}/>
    </div>
  );
}