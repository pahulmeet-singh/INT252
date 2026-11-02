import useCounter from "./components/hooks/useCounter"
function CounterTwo(){
    const {count, increase, decrease, reset}=useCounter(0)
  return (
    <div>
        <h2> CounterOne </h2>
        <p> Count: {count} </p>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterTwo