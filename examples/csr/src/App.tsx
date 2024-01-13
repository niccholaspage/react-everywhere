import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <Counter />
    </div>
  );
}
