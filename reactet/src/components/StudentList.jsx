function StudentList({ students, onSelectStudent }) {
    return(
        <div>
            <h2>Students</h2>
            {students.map((student) => (        
                <button
                key={student.id}
                onClick={()=> onSelectStudent(student)}>
                    {student.name}
                </button>
            ))}
        </div>
    )
}
export default StudentList;