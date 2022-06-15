import { useEffect, useState } from "react";

const Main = () => {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  let [count, setCount] = useState(0);
  useEffect(() => {
    console.log("UseEffect1 Ran");
  }, []);
  useEffect(() => {
    console.log("UseEffect2 Ran");
    if (toggleTwo)
      console.log("toggleTwo slice of state is true so this code runs");
  }, [toggleTwo]);
  useEffect(() => {
    const myInterval = setInterval(() => {
      console.log(`UseEffect3 with interval number ${count} is running`);
      clearInterval(myInterval);
    }, 1000);
  }, [count]);
  return (
    <div>
      {console.log("rendered or re-rendered")}
      <h1>Main Component</h1>
      <button onClick={() => setToggleOne(!toggleOne)}>ToggleOne</button>
      <button onClick={() => setToggleTwo(!toggleTwo)}>ToggleTwo</button>
      <button onClick={() => setCount((count += 1))}>Count {count}</button>
    </div>
  );
};

export default Main;
