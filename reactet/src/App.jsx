// printing hello world in react
// function App() {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//     </div>
//   );
// }

// export default App;

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