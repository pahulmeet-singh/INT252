

function StudentDetails({student}){
    if(!student){
        return <p>No student selected. Select a student to see details</p>
    }
    return (
        <div>
            <h2>Student Details</h2>
            <p>Name: {student.name}</p>
            <p>Course: {student.course}</p>
            <p>Roll No: {student.rollNo}</p>
        </div>
    )
}
export default StudentDetails;