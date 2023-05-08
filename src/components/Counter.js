import React,{useState} from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
      };
      const clickString = props.click || 'Click'; //props가 존재하면 값을 받아오고 아니면 'Clcik'

      return (
          <button onClick={increment}>
            {clickString} {count}</button>
      );
}

export default Counter;

