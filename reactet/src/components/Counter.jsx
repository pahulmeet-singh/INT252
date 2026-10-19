// import {useState} from 'react';
// function App(){
//     const [counter, setCounter] = useState(0);
//     const [counterHeading] = useState("Counter");
//     function handleIncrement(){
//         setCounter(counter + 1);
//     }
//     function handleDecrement(){
//         setCounter(counter - 1);
//     }
//     return(
//         <div className={'text-center'}>
//             <h1>{counterHeading}</h1>
//             <h2>{counter}</h2>
//             <button onClick={handleIncrement}>Increment</button>
//             <button onClick={handleDecrement}>Decrement</button>
//         </div>
//     )
// }
// export default App;


import {useState} from 'react';
function App(){
    const [counter, setCounter] = useState(0);
    const [counterHeading,setCounterHeading] = useState("Counter Heading");

    function handleInc(){
        setCounter(counter + 1);
    }
    function reset(){
        setCounter(0);
        setCounterHeading("Pahul");
    }
    console.log("Rendering");

    function undo(){
        setTimeout(reset, 5000);
    }
    function handleTripleInc(){
        setCounter((counter)=>counter + 1);
        setCounter((counter)=>counter + 1);
        setCounter((counter)=>counter + 1);
    }
    return(
        <div className="container">
            <h1>{counterHeading}</h1>
            <div>{counter}</div>
            <div>
                <button onClick={handleInc}>+</button> <br/>
                <button onClick={handleTripleInc}>+++</button>
            </div>
            <div>
                <button onClick={reset}>Reset</button>
                <button onClick={undo}>Undo in 5 sec</button>
            </div>
        </div>
    )
}
export default App;