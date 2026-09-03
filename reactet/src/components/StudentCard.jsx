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
// function StudentCard(props) {
//   return (
//     <>
//     <div>
//       <h2>{props.name}</h2>
//       <p>{props.course}</p>
//       <p> Roll no: {props.rollNo}</p>
//     </div>
//     </>
//   )
// }
// export default StudentCard;


//destructuring props in react
// function StudentCard({ name, course, rollNo }) {
//   return (
//     <>
//     <div>
//       <h2>{name}</h2>
//       <p>{course}</p>
//       <p> Roll no: {rollNo}</p>
//     </div>
//     </>
//   )
// }
// export default StudentCard;


//multiple components in react
import Button from './Button';
import Card from './Card';
import StudentHeader from './StudentHeader';
function StudentCard({ name, course, rollNo, isActive }) {
  return (
    <Card>
      <StudentHeader name={name} />

      <p>{course}</p>
      <p> Roll no: {rollNo}</p>

      {/* //ternary operator in react */}
      {isActive ? (
        <p>Active Student</p>
      ) : (
        <p>Inactive Student</p>
      )}

      {/* demonstrating and operator in react */}
      {isActive && <p>Welcome to the course!</p>}

      <Button>View Profile</Button>
    </Card>
  )
}
export default StudentCard;