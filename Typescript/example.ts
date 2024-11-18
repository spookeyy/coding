// creating an object.
// explicitly describing the object using "interface" declaration
interface User {
    name: string;
    id: number;
}
// object conforms to the shape of interface by using syntax
// like; : TypeName after a variable declaration
const user: User = {
    name: "King",
    id: 1
}

interface Course {
    name: string;
    course_id: number;
}

const newCourse: Course = {
    name: "Computer Science",
    course_id: 0
}
