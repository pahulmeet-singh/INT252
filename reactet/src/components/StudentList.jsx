function StudentList({ students, onSelectStudent }) {
    return(
        <div className="flex flex-col gap-4">
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