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
// import { useState } from "react";
// import InputField from "./components/InputField";

// function App() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     alert("Registration completed for " + formData.name);
//   }

//   return (
//     <div>
//       <h1>Student Registration</h1>

//       <form onSubmit={handleSubmit}>
//         <InputField
//           label="Student Name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Enter your name"
//         />

//         <InputField
//           label="Email Address"
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Enter your email"
//         />

//         <InputField
//           label="Password"
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Enter your password"
//         />

//         <button type="submit">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;









// //pattern 6 conditional rendering of success message
// import { useState } from "react";

// function App() {
//   const [course, setCourse] = useState("");
//   const[submitted, setSubmitted] = useState(false);
//   const[password, setPassword] = useState("");
//   const[showPassword, setShowPassword] = useState(false);
  
//   function handleSubmit(event) {
//     event.preventDefault();
//     setSubmitted(true);
//   }

//   return(
//     <div>
//       <h1>Student Registration</h1>


//       <form onSubmit={handleSubmit}>
//         <label> Select Course: </label>
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

//         <label> Password: </label>
//         <input
//           type={showPassword ? "text" : "password"}
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter your password"
//         />
//         <button
//           type="button"
//           onClick={() => setShowPassword(!showPassword)}
//         >
//           {showPassword ? "Hide" : "Show"} Password
//         </button>

//         <br/><br/>

//         <button type="submit">Submit</button>

//         {submitted && (
//           <p>Registration completed for {course}</p>
//         )}
//       </form>
//     </div>
//   )
// }
// export default App









//code to run accessibleform.jsx
// import AccessibleForm from "./AccessibleForm";

// function App() {
//   return (
//     <div>
//       <AccessibleForm />
//     </div>
//   );
// }

// export default App;









// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [errors, setErrors] = useState({});
//   const [success, setSuccess] = useState(false);

//   function handleSubmit(event) {
//     event.preventDefault();

//     const newErrors = {};

    
//     if (name.trim() === "") {
//       newErrors.name = "Name is required";
//     }

  
//     if (!email.includes("@")) {
//       newErrors.email = "Enter a valid email";
//     }

    
//     if (password.length < 8) {
//       newErrors.password =
//         "Password must contain at least 8 characters";
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       setSuccess(true);
//     } else {
//       setSuccess(false);
//     }
//   }

//   return (
//     <div>
//       <h1>Student Registration</h1>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Student Name:</label>
//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <p>{errors.name}</p>
//         </div>

//         <div>
//           <label>Email:</label>
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <p>{errors.email}</p>
//         </div>

//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <p>{errors.password}</p>
//         </div>

//         <button type="submit">Register</button>
//       </form>

//       {success && (
//         <h3>Registration Successful!</h3>
//       )}
//     </div>
//   );
// }

// export default App;









// //student Schema validation using zod
// import studentSchema from "./schemas/studentSchema";

// function App() {
//   const student={
//     name:"Priya",
//     email:"priya@example.com",
//     age:21
//   }
//   const result=studentSchema.safeParse(student)
//   if(result.success){
//     console.log("Validation successful:", result.data)
//   }else{
//     console.log("Validation failed:", result.error.issues)
//   }
//   return(
//     <div>
//       <h1>Zod Validation</h1>
//       <p>Open the browser console to see the validation results.</p>
//     </div>
//   ) 
// }
// export default App;









// //stuent schema validation using zod with form validation
// import { useState } from "react";
// import studentSchema from "./schemas/studentSchema";

// function App() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: ""
//   });

//   const [errors, setErrors] = useState({});
//   const [success, setSuccess] = useState(false);

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     const result = studentSchema.safeParse(formData);

//     if (result.success) {
//       setErrors({});
//       setSuccess(true);
//       console.log("Validation successful:", result.data);
//     } else {
//       const newErrors = {};
//       result.error.issues.forEach((issue) => {
//         newErrors[issue.path[0]] = issue.message;
//       });
//       setErrors(newErrors);
//     }
//   }

//   return(
//     <div>
//       <h1>Student Registration with Zod Validation</h1>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Student Name:</label>
//           <input
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//           />
//           {errors.name && <p>{errors.name}</p>}
//         </div>

//         <br />

//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//           />
//           {errors.email && <p>{errors.email}</p>}
//         </div>

//         <br />

//         <div>
//           <label htmlFor="age">Age:</label>
//           <input
//             id="age"
//             name="age"
//             type="number"
//             value={formData.age}
//             onChange={handleChange}
//             placeholder="Enter your age"
//           />
//           {errors.age && <p>{errors.age}</p>}
//         </div>

//         <br />

//         <button type="submit">Register</button>
//       </form>

//       {success && (
//         <h3>Registration Successful!</h3>
//       )}
//     </div>
//   );
// }

// export default App;









// //build a registration form with
// 1. controlled inputs for every field
// 2. a reusable TextField with label and error
// 3. an extra fiels when role is other
// 4. a zod schema, with refine for confirm password
// 5. connect it with safeParse or zodResolver
// 6. test it using the keyboard only

// // schema roles:
// name: atleat 2 characters
// email: a valid email
// password: at least 8 characters
// confirm: must match password
// role: student, teacher, other
// otherRole: required if role is other

// import { useState } from "react";
// import studentSchema from "./schemas/studentSchema";

// function App() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: ""
//   });

//   const [errors, setErrors] = useState({});
//   const [success, setSuccess] = useState(false);

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     const result = studentSchema.safeParse(formData);

//     if (result.success) {
//       setErrors({});
//       setSuccess(true);
//       console.log("Validation successful:", result.data);
//     } else {
//       const newErrors = {};
//       result.error.issues.forEach((issue) => {
//         newErrors[issue.path[0]] = issue.message;
//       });
//       setErrors(newErrors);
//     }
//   }

//   return(
//     <div>
//       <h1>Student Registration with Zod Validation</h1>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Student Name:</label>
//           <input
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//           />
//           {errors.name && <p>{errors.name}</p>}
//         </div>

//         <br />

//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//           />
//           {errors.email && <p>{errors.email}</p>}
//         </div>

//         <br />

//         <div>
//           <label htmlFor="age">Age:</label>
//           <input
//             id="age"
//             name="age"
//             type="number"
//             value={formData.age}
//             onChange={handleChange}
//             placeholder="Enter your age"
//           />
//           {errors.age && <p>{errors.age}</p>}
//         </div>

//         <br />

//         <button type="submit">Register</button>
//       </form>

//       {success && (
//         <h3>Registration Successful!</h3>
//       )}
//     </div>
//   );
// }

// export default App;









// why do we use get and post methods in form submission?
// The GET and POST methods are two of the most commonly used HTTP methods for form submission, and they serve different purposes:

// 1. **GET Method**:
//    - The GET method is used to request data from a server. When a form is submitted using the GET method, the form data is appended to the URL as query parameters.
//    - It is suitable for retrieving data without causing any side effects on the server (e.g., searching or filtering).
//    - The data sent via GET is visible in the URL, which can be bookmarked or shared, but it has limitations on the amount of data that can be sent (URL length restrictions).
//    - Example: `https://example.com/search?query=react`

// 2. **POST Method**:
//    - The POST method is used to send data to a server to create or update resources. When a form is submitted using the POST method, the form data is included in the body of the HTTP request.
//    - It is suitable for operations that have side effects on the server (e.g., creating a new user, submitting a form).
//    - The data sent via POST is not visible in the URL, making it more secure for sensitive information (like passwords).
//    - There are no size limitations for the data sent in the body of a POST request.

// In summary, use GET for retrieving data and POST for sending data that modifies server state or includes sensitive information.


//diff between put and patch methods in form submission?
// The PUT and PATCH methods are both used to update resources on a server, but they have different semantics and use cases:

// 1. **PUT Method**:
//    - The PUT method is used to update an existing resource or create a new resource if it does not exist. When using PUT, the client sends the complete representation of the resource to the server.
//    - It is idempotent, meaning that making the same PUT request multiple times will have the same effect as making it once.
//    - Example: If you have a user resource at `/users/1`, sending a PUT request with the full user data will replace the existing user data with the new data.

// 2. **PATCH Method**:
//    - The PATCH method is used to apply partial updates to an existing resource. Instead of sending the complete representation of the resource, the client sends only the changes that need to be applied.
//    - It is not necessarily idempotent, as applying the same PATCH request multiple times may result in different outcomes depending on the current state of the resource.
//    - Example: If you want to update only the email of a user at `/users/1`, you can send a PATCH request with just the new email, and the server will update only that field without affecting other fields.

// In summary, use PUT when you want to replace the entire resource, and use PATCH when you want to make partial updates to an existing resource.


//wbu delete method in form submission?
// The DELETE method is used to remove a resource from the server. When a form is submitted using the DELETE method, it indicates that the client wants to delete a specific resource identified by the URL.

// In summary, the DELETE method is used to remove resources from the server, and it is typically used in RESTful APIs to delete specific items or records.









//19 nov - forms
// import { useState } from "react";

// function App(){
//   const[name, setName]=useState("")
//   const[email, setEmail]=useState("")

//   const sendData=async()=>{
//     const response=await fetch(
//       "https://jsonplaceholder.typicode.com/posts",
//       {
//         method:"POST",
//         headers:{
//           "Content-Type":"application/json"
//         },
//         body:JSON.stringify({name,email})
//       }
//     )
//     const data=await response.json()
//     console.log(data)
//     alert("Form submitted successfully!")
//   }

//   return(
//     <div>
//       <h1>Form Submission</h1>
//       <form onSubmit={(e)=>{
//         e.preventDefault()
//         sendData()
//       }}>
//         <label>Name:</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e)=>setName(e.target.value)}
//           placeholder="Enter your name"
//         />
//         <br/><br/>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e)=>setEmail(e.target.value)}
//           placeholder="Enter your email"
//         />
//         <br/><br/>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//     )
// }
// export default App;

//diff between api and server
// An API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other. It defines how requests and responses should be structured, enabling developers to interact with a service or application programmatically. APIs can be used to access data, perform operations, or integrate functionalities from one application into another.

// A server, on the other hand, is a physical or virtual machine that hosts applications, services, or data and responds to requests from clients (such as web browsers or mobile apps). The server processes incoming requests, executes the necessary operations, and sends back responses. Servers can host APIs, websites, databases, and other services that clients can access over a network.

// In summary, an API is a set of rules for communication between software applications, 
// while a server is the infrastructure that hosts and serves those applications or services.


//what is restAPI?
// REST API (Representational State Transfer Application Programming Interface) is a type of web service that follows the principles of REST architecture. It allows clients to interact with a server using standard HTTP methods (GET, POST, PUT, PATCH, DELETE) to perform CRUD (Create, Read, Update, Delete) operations on resources. REST APIs are stateless, meaning each request from a client contains all the information needed for the server to process it, and they often use JSON or XML for data exchange. REST APIs are widely used for building scalable and maintainable web services.
// In summary, a REST API is a web service that enables communication between clients and servers using standard HTTP methods and follows the principles of REST architecture.

// 7 principles - client server:
// 1. Client-Server Architecture: The client and server are separate entities that communicate over a network. The client is responsible for the user interface and user experience, while the server handles data storage, processing, and business logic.
// 2. Statelessness: Each request from the client to the server must contain all the information needed to understand and process the request. The server does not store any client context between requests, making each request independent and self-contained.
// 3. Cacheability: Responses from the server can be marked as cacheable or non-cacheable. Cacheable responses can be stored by clients or intermediaries (like proxies) to improve performance and reduce the need for repeated requests.
// 4. Layered System: The architecture can be composed of multiple layers, with each layer having a specific responsibility. Clients do not need to know whether they are communicating directly with the server or through an intermediary layer, such as a load balancer or proxy.
// 5. Uniform Interface: A consistent and standardized interface is used for communication between clients and servers. This includes using standard HTTP methods (GET, POST, PUT, DELETE), resource URIs, and media types (like JSON or XML) for data representation.
// 6. Code on Demand (optional): Servers can provide executable code (like JavaScript) to clients, allowing them to extend their functionality. This is an optional constraint and is not always implemented in RESTful systems.
// 7. Resource-Based: Resources are identified by unique URIs (Uniform Resource Identifiers), and clients interact with these resources using standard HTTP methods. Each resource can have multiple representations (like JSON or XML), and the server can provide the appropriate representation based on the client's request.


//what is fetch api?
// The Fetch API is a modern JavaScript interface that allows developers to make network requests to retrieve resources from a server. It provides a more powerful and flexible way to handle HTTP requests and responses compared to older methods like XMLHttpRequest. The Fetch API uses Promises, making it easier to work with asynchronous operations and handle responses in a cleaner way.

// In summary, the Fetch API is a modern JavaScript interface for making network requests, 
// providing a more flexible and promise-based approach to handling HTTP requests and responses.


// import { useEffect, useState } from "react";

// function App() {
//   const [students,setStudents]=useState([])

//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response)=>response.json())
//     .then((data)=>{
//       setStudents(data)
//     })
//     .catch(error=>{
//       console.error("Error fetching students:", error)
//     })
//   },[])

//   return(
//     <div>
//       <h1>Students List</h1>
//       {students.map(student =>(
//         <div key={student.id}>
//           <h2>{student.name}</h2>
//           <p>Email: {student.email}</p>
//           <p>Phone: {student.phone}</p>
//         </div>
//       ))}
//     </div>
//   )
// }
// export default App;


// rendering changes on basis of dependency list in 4 scenarios:
// The useEffect hook in React allows you to perform side effects in functional components. The behavior of the effect can be controlled by specifying a dependency list, which determines when the effect should run. Here are four scenarios based on the dependency list:
// 1. Empty Dependency List: The effect runs only once after the initial render.
// 2. No Dependency List: The effect runs after every render.
// 3. Specific Dependencies: The effect runs only when the specified dependencies change.
// 4. Cleanup Function: The effect can return a cleanup function that runs before the component unmounts or before the effect runs again.









// //using POST method for the previous example
// import { useEffect, useState } from "react";

// function App() {
//   const [students,setStudents]=useState([])

//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users",{
//       method:"POST",
//       headers:{
//         "Content-Type":"application/json"
//       },
//       body:JSON.stringify({name:"John Doe",email:"john.doe@example.com"})
//     })
//     .then((response)=>response.json())
//     .then((data)=>{
//       setStudents(data)
//     })
//     .catch(error=>{
//       console.error("Error fetching students:", error)
//     })
//   },[])

//   return(
//     <div>
//       <h1>Students List</h1>
//       {students.map(student =>(
//         <div key={student.id}>
//           <h2>{student.name}</h2>
//           <p>Email: {student.email}</p>
//           <p>Phone: {student.phone}</p>
//         </div>
//       ))}
//     </div>
//   )
// }
// export default App;









// // TANSTACK
// import { useQuery } from '@tanstack/react-query';

// function App() {

//   const fetchStudents = async () => {

//     const response = await fetch(
//       'https://jsonplaceholder.typicode.com/users'
//     );

//     if (!response.ok) {
//       throw new Error('Failed to fetch students');
//     }

//     return response.json();
//   };

//   const {
//     data,
//     isPending,
//     isError,
//     error,
//     isFetching
//   } = useQuery({

//     queryKey: ['students'],

//     queryFn: fetchStudents,

//     staleTime: 10000,

//     refetchOnWindowFocus: true,

//     refetchInterval: 15000

//   });

//   if (isPending) {
//     return <h2>Loading Students...</h2>;
//   }

//   if (isError) {
//     return <h2>Error: {error.message}</h2>;
//   }

//   return (
//     <div>

//       <h1>Student Dashboard</h1>

//       {isFetching && (
//         <p>Updating data in background...</p>
//       )}

//       {data.length === 0 ? (
//         <h3>No Students Found</h3>
//       ) : (
//         data.map(student => (
//           <div key={student.id}>
//             <h3>{student.name}</h3>
//             <p>{student.email}</p>
//           </div>
//         ))
//       )}

//     </div>
//   );
// }

// export default App;









// Pages folder 
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Students from "./pages/Students"

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/students" element={<Students/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App