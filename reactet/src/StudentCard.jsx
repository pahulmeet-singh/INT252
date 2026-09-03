// function StudentCard() {
//   return (
//     <>
//     <div>
//       <h2> Pahul</h2>
//       <p> CSE </p>
//       <p> Roll no: 12345</p>
//     </div>
//     </>
//   )
// }
// export default StudentCard;



//learning props in react
function StudentCard(props) {
  return (
    <>
    <div>
      <h2>{props.name}</h2>
      <p>{props.course}</p>
      <p> Roll no: {props.rollNo}</p>
    </div>
    </>
  )
}
export default StudentCard;