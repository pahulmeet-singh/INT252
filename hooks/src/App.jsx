// // Derived State
// // calculating marks and percentage using useState hook in react
// import {useState} from 'react';
// function App(){
//     const [marks, setMarks] = useState(80);
//     // here 80 is the initial state of marks. It can be any number or value you want to start with.
//     const totalMarks = 100;
//     const percentage = (marks / totalMarks) * 100;
//     return(
//         <div>
//           <h1>Derived State</h1>
//           <label>
//             Enter Marks: 
//             <input
//               type="number"
//               min="0"
//               max={totalMarks}
//               value={marks}
//               onChange={(event) => {
//                 const value=Number(event.target.value);
//                 if(value >= 0 && value <= totalMarks){
//                   setMarks(value);
//                 }
//               }}
//             />
//           </label>
//           <h2>Marks: {marks}</h2>
//           <h2>Percentage: {percentage}%</h2>
//         </div>
//     )
// }
// export default App;









// what is useState?
// The `useState` hook is a built-in function in React that allows you to add state management to functional components. It enables you to create and manage state variables within your component, allowing the component to remember values between renders and respond to user interactions or other events.
// When you call `useState`, it returns an array with two elements: the current state value and a function to update that state. You can use the state value in your component's rendering logic, and when you call the update function, React will re-render the component with the new state value.

// use of sideeffects in useeffect?
// The `useEffect` hook is used to handle side effects in functional components. It allows you to perform operations that have side effects, such as fetching data from an API, manipulating the DOM, setting up subscriptions, or performing timers. You can specify dependencies for the effect, which determines when it should run. This helps keep your components clean and focused on rendering while managing side effects in a controlled manner.


// import { useEffect } from 'react';
// function App() {
//   useEffect(() => {
//     first // side effect function
//     return() => {
//       second// cleanup function
//     }
//   },[count]) // dependency list
//   return(
//     <div>
//       Hello
//     </div>
//   )
// }
// export default App;









// // useEffect hook with cleanup function
// import { useEffect, useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);
//   const [total, setTotal] = useState(0);

//   // variation 5 cleanup function
//   useEffect(() => {
//     alert("Count Updated")
//     return () => {
//       alert("Count is unmounted from UI")
//     }
//   }, [count]);

//   function handleClick() {
//     setCount(count + 1);
//   }
//   function handleClickTotal(){
//     setTotal(total + 1);
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>
//         Update Total
//       </button>
//       <br />
//       Count is: {count}
//       <br/>
//       <button onClick={handleClickTotal}>
//         Update total
//       </button>
//       <br />
//       Total is: {total}
//     </div>
//   );
// }

// export default App;

// short definition of prop drilling?
// the process of passing data from a parent component down to child components through multiple levels of the component tree, even if some intermediate components do not need that data. This can lead to unnecessary complexity and make the code harder to maintain.









// import { createContext, useState } from 'react';
// import ChildA from './components/ChildA';

// const UserContext = createContext();
// function App() {
//   const [user, setUser] = useState({ name: 'John' });
//   return(
//     <>
//     <UserContext.Provider value={ user }>
//       <ChildA />
//     </UserContext.Provider>
//     </>
//   )
// }
// export default App;
// export { UserContext };


// what is useState and useEffect
// `useState` is a React hook that allows you to add state to functional components. 
//  It returns an array with two elements: the current state value and a function to update that state.
// `useEffect` is a React hook that allows you to perform side effects in functional components. 
//  It runs after the component has rendered and can be used to fetch data, set up subscriptions, or perform other operations that have side effects.


// what is memoization in react?
// Memoization in React is an optimization technique that helps to improve the performance of functional components by caching the results of expensive function calls and returning the cached result when the same inputs occur again. This prevents unnecessary re-renders and computations, especially for components that receive the same props or state values frequently. React provides hooks like `React.memo` for components and `useMemo` for values to implement memoization effectively.
// what is useMemo in react?
// `useMemo` is a React hook that allows you to memoize the result of a computation or function call, so that it is only recalculated when its dependencies change. It helps optimize performance by preventing unnecessary recalculations of expensive operations during re-renders. You can use `useMemo` to cache values that are derived from props or state, ensuring that they are only recomputed when necessary.









import {useState,useMemo} from "react"
function App(){
  const[count,setCount]=useState(0)
  const[input,setInput]=useState(0)

  function expensiveTask(num){
    console.log("Inside Expensive Task")
    for(let i=0;i<=10000000000;i++){}
    return num*2
  }
  let doubleValue=expensiveTask(input)
  return(
    <div>
      <button onClick={()=>setCount(count+1)}>
        Increase
      </button>
      
    </div>
  )
}