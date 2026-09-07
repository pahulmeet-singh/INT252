function StudentList({ students }) {
    return(
        <div>
            <h2>Students</h2>
            {students.map((student) => {
                <button
                key={student.id}
                onClick={()}
            })}
        </div>
    )
}
export default StudentList;