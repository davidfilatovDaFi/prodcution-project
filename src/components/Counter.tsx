import { useState } from "react";
import classes from "./Counter.module.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button
        className={classes.btn}
        onClick={() => setCounter((counter) => counter + 1)}
      ></button>
      <h2>{counter}</h2>
    </div>
  );
};

export default Counter;
