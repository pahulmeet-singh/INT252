// function Students(){
//     return(
//         <div>
//             <h1>Student Dashboard</h1>
//             <p>Student Data</p>
//         </div>
//     )
// }
// export default Students;

import { useSearchParams } from "react-router";

function Students() {

    const [searchParams, setSearchParams] = useSearchParams();

    const course = searchParams.get("course");
    const year = searchParams.get("year");

    function changeCourse(){
        setSearchParams({course: "BTech", year: 3});
    }
    return(
        <div>
            <h1>Student Dashboard</h1>
            <p>Student Data</p>
            <h2>Course: {course}</h2>
            <h2>Year: {year}</h2>
            <button onClick={changeCourse}>Change Course</button>
        </div>
    )

}
export default Students;