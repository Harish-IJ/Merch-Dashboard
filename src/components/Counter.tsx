import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../store/store";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "../store/counter/counterSlice";
import { useRef } from "react";
import clsx from "clsx";
import buttonStyles from "../styles/Button.module.scss";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div>
      <h3>{count}</h3>
      <div>
        <button
          className={clsx(buttonStyles.button, buttonStyles["button--primary"])}
          onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <input type='number' ref={ref} />
        <button
          onClick={() =>
            dispatch(incrementByAmount(Number(ref.current?.value)))
          }>
          Increment by amount
        </button>
        <button
          onClick={() => dispatch(incrementAsync(Number(ref.current?.value)))}>
          Increment Async
        </button>
      </div>
    </div>
  );
};

export default Counter;
