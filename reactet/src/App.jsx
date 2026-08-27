// printing hello world in react
// function App() {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//     </div>
//   );
// }

// export default App;

// using JSX to display a simple introduction
function App() {
  const name = "John Doe";
  const course = "BTech";
  const sem = 1;
  return(
    <div>
      <h1>My Intro</h1>
      <p>Name: {name}</p>
      <p>Course: {course}</p>
      <p>Semester: {sem}</p>
    </div>
  )
}

export default App;

// these parentheses allow us to write multi-line JSX code without any issues. It is a common practice to wrap the JSX code in parentheses for better readability and to avoid potential errors when returning multiple lines of JSX.

