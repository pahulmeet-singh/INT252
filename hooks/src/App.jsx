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









// import {useState,useMemo} from "react"
// function App(){
//   const[count,setCount]=useState(0)
//   const[input,setInput]=useState(0)

//   function expensiveTask(num){
//     console.log("Inside Expensive Task")
//     for(let i=0;i<=1000000;i++){}
//     return num*2
//   }
//   let doubleValue=useMemo(()=>expensiveTask(input),[input])
//   return(
//     <div>
//       <button onClick={()=>setCount(count+1)}>
//         Increase
//       </button>
//       <div>
//         Count:{count}
//       </div>
//       <input
//       type="number"
//       placeholder="enter number"
//       value={input}
//       onChange={(e)=>setInput(e.target.value)}
//       />
//       <div>
//         Double:{doubleValue}
//       </div>
//     </div>
//   )
// }
// export default App;









// import {useState,useCallback} from "react"
// import StudentCard from "./components/StudentCard"
// function App(){
//   const [count,setCount]=useState(0)
//   const handleView=useCallback(()=>{
//     console.log("Viewing Student details")
//   },[])
//   return(
//     <div>
//       <h1>
//         Student Dashboard
//       </h1>
//       <h2> Counter: {count}</h2>
//       <button onClick={()=>setCount(count+1)}>
//         Increase Count
//       </button>
//       <hr/>
//       <StudentCard name="John Doe" onView={handleView}/>
//       <StudentCard name="Jane Smith" onView={handleView}/>
//       <StudentCard name="Alice Json" onView={handleView}/>
//     </div>
//   )
// }
// export default App







// import CounterOne from "./CounterOne";
// import CounterTwo from "./CounterTwo";

// function App(){
//   return(
//     <div>
//       <CounterOne/>
//       <hr/>
//       <CounterTwo/>
//     </div>
//   )
// }
// export default App









// import {useState} from "react"
// function App(){
//   const[name,setName]=useState("")
//   function handleChange(e){
//     setName(e.target.value)
//   }
//   return(
//     <div>
//       <h1> Controlled </h1>
//       <label htmlFor="studentName">
//         Name:
//       </label>
//       <input
//         id="studentName"
//         type="text"
//         value={name}
//         onChange={handleChange}
//         placeholder="Enter your name"
//       />
//       <p>Hello, {name}</p>
//     </div>
//   )
// }
// export default App









// import {useRef} from "react"
// function App(){
//   const nameRef=useRef(null)
//   function handleSubmit(e){
//     e.preventDefault()
//     alert("Student Name: " + nameRef.current.value)
//   }
//   return(
//     <div>
//       <h1> UnControlled </h1>
//       <form onSubmit={handleSubmit}>
//       <label htmlFor="studentName">
//         Name:
//       </label>
//       <input
//         id="studentName"
//         type="text"
//         ref={nameRef}
//         placeholder="Enter your name"
//       />
//       <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }
// export default App









// import {useRef} from "react"
// function App(){
//   const nameRef=useRef(null)
//   function handleSubmit(e){
//     e.preventDefault()
//     alert("Student Name: " + nameRef.current.value)
//   }
//   return(
//     <div>
//       <h1> UnControlled </h1>
//       <form onSubmit={handleSubmit}>
//       <label htmlFor="studentName">
//         Name:
//       </label>
//       <input
//         id="studentName"
//         type="text"
//         ref={nameRef}
//         placeholder="Enter your name"
//       />
//       <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }
// export default App









// import {useState} from "react"
// function App(){
//   const [name,setName]=useState("")
//   const [email,setEmail]=useState("")
//   const[course,setCourse]=useState("")
//   const[gender,setGender]=useState("")

//   function handleSubmit(e){
//     e.preventDefault()

//     alert(
//       "Name: " + name + "\n" +
//       "Email: " + email + "\n" +
//       "Course: " + course
//     )
//   }
//   return(
//     <div>
//       <h1> Student Registration</h1>

//       <form onSubmit={handleSubmit}>
//         <label> Student Name:</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter your name"
//         />

//         <br/><br/>

//         <label> Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email"
//         />

//         <br/><br/>

//         <label> Course:</label>
//         <select
//           value={course}
//           onChange={(e) => setCourse(e.target.value)}
//         >
//           <option value="">Select a course</option>
//           <option value="React">React</option>
//           <option value="Node.js">Node.js</option>
//           <option value="Python">Python</option>
//         </select>

//         <br/><br/>
//         <label> Gender:</label>
//         <input
//           type="radio"
//           name="gender"
//           value="Male"
//           checked={gender === "Male"}
//           onChange={(e) => setGender(e.target.value)}
//         /> Male

//         <input
//           type="radio"
//           name="gender"
//           value="Female"
//           checked={gender === "Female"}
//           onChange={(e) => setGender(e.target.value)}
//         /> Female

//         <br/><br/>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }
// export default App









// import {useState} from "react"
// function App(){
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     course: "",
//     gender: ""
//   })

//   function handleChange(e) {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   function handleSubmit(e) {
//     e.preventDefault()

//     alert(JSON.stringify(formData, null, 2))
//   }

//   return(
//     <div>
//       <h1> Student Registration</h1>

//       <form onSubmit={handleChange}>
//         <label> Student Name:</label>
//         <input
//           type="text"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Enter your name"
//         />

//         <br/><br/>

//         <label> Email:</label>
//         <input
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Enter your email"
//         />

//         <br/><br/>

//         <label> Course:</label>
//         <select
//           value={formData.course}
//           onChange={handleChange}
//         >
//           <option value="">Select a course</option>
//           <option value="React">React</option>
//           <option value="Node.js">Node.js</option>
//           <option value="Python">Python</option>
//         </select>

//         <br/><br/>
//         <label> Gender:</label>
//         <input
//           type="radio"
//           name="gender"
//           value="Male"
//           checked={formData.gender === "Male"}
//           onChange={handleChange}
//         /> Male

//         <input
//           type="radio"
//           name="gender"
//           value="Female"
//           checked={formData.gender === "Female"}
//           onChange={handleChange}
//         /> Female

//         <br/><br/>

//         <button onClick={handleSubmit} type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }
// export default App









//pattern3 form state with validation and errors
// import { useState } from "react";

// function App() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: ""
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));

//     // Clear the success message when editing
//     setSubmitted(false);
//   }

//   function validateForm() {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Enter a valid email";
//     }

//     return newErrors;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     const newErrors = validateForm();
//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       setSubmitted(true);
//       console.log("Form submitted:", formData);
//     } else {
//       setSubmitted(false);
//     }
//   }

//   return (
//     <div>
//       <h1>Registration with Validation</h1>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Student Name:</label>
//           <input
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter name"
//           />

//           {errors.name && <p>{errors.name}</p>}
//         </div>

//         <br />

//         <div>
//           <label>Email:</label>
//           <input
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter email"
//           />

//           {errors.email && <p>{errors.email}</p>}
//         </div>

//         <br />

//         <button type="submit">Submit</button>
//       </form>

//       {submitted && (
//         <p>Form submitted successfully!</p>
//       )}
//     </div>
//   );
// }

// export default App;









// pattern 4 with useReducer hook
// import { useReducer } from "react";

// const initialState = {
//   name: "",
//   email: "",
//   errors: {},
//   submitted: false
// };

// function formReducer(state, action) {
//   switch (action.type) {
//     case "CHANGE":
//       return {
//         ...state,
//         [action.name]: action.value,
//         submitted: false
//       };

//     case "SET_ERRORS":
//       return {
//         ...state,
//         errors: action.errors,
//         submitted: false
//       };

//     case "SUBMIT_SUCCESS":
//       return {
//         ...state,
//         errors: {},
//         submitted: true
//       };

//     case "RESET":
//       return initialState;

//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(
//     formReducer,
//     initialState
//   );

//   function handleChange(event) {
//     const { name, value } = event.target;

//     dispatch({
//       type: "CHANGE",
//       name,
//       value
//     });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     const newErrors = {};

//     if (!state.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
//       newErrors.email = "Enter a valid email";
//     }

//     if (Object.keys(newErrors).length > 0) {
//       dispatch({
//         type: "SET_ERRORS",
//         errors: newErrors
//       });
//       return;
//     }

//     dispatch({ type: "SUBMIT_SUCCESS" });

//     console.log("Submitted:", {
//       name: state.name,
//       email: state.email
//     });
//   }

//   return (
//     <div>
//       <h1>Registration with useReducer</h1>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Student Name:</label>
//           <input
//             name="name"
//             value={state.name}
//             onChange={handleChange}
//             placeholder="Enter name"
//           />

//           {state.errors.name && (
//             <p>{state.errors.name}</p>
//           )}
//         </div>

//         <br />

//         <div>
//           <label>Email:</label>
//           <input
//             name="email"
//             type="email"
//             value={state.email}
//             onChange={handleChange}
//             placeholder="Enter email"
//           />

//           {state.errors.email && (
//             <p>{state.errors.email}</p>
//           )}
//         </div>

//         <br />

//         <button type="submit">Submit</button>{" "}
//         <button
//           type="button"
//           onClick={() => dispatch({ type: "RESET" })}
//         >
//           Reset
//         </button>
//       </form>

//       {state.submitted && (
//         <p>Form submitted successfully!</p>
//       )}
//     </div>
//   );
// }

// export default App;









//pattern 5 with input field
import { useState } from "react";
import InputField from "./components/InputField";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    alert("Registration completed for " + formData.name);
  }

  return (
    <div>
      <h1>Student Registration</h1>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Student Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <InputField
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;