//build a simple counter

import { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>
        Update Count
      </button>
      <br />
      Count is: {count}
    </div>
  );
}
export default Counter;