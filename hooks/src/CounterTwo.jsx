import useCounter from "./components/hooks/useCounter"
function CounterTwo(){
    const {count, increase, decrease, reset}=useCounter(10)
  return (
    <div>
        <h2> CounterTwo </h2>
        <p> Count: {count} </p>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterTwo