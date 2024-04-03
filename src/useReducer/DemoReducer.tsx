import { useReducer } from "react";

type State = {
  count: number;
  error: string | null;
};

type Action = {
  type: "increment" | "decrement";
};

function reducer(state: State, action: Action) {
  //   const { type } = action;

  switch (action.type) {
    case "increment": {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Maximum reached" : null,
      };
    }
    case "decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Minimum reached" : null,
      };
    }
    default:
      return state;
  }
}

export default function DemoReducer() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });
  return (
    <div>
      <h1>Count: {state.count}</h1>
      {state.error && <div className="mb-2 text-red-500">{state.error}</div>}
      <button
        className="mb-2 p-2"
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>
      <br />
      <button className="p-2" onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>
    </div>
  );
}
