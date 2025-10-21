-- Employees working for "First Bank Corporation" earning
-- more than Ksh. 10000
SELECT e.employee-name, e-street, e.city
FROM employee e
JOIN works w ON e.empno = w.employee-no
WHERE w.company-name = 'First Bank Corporation' AND w.salary > 10000; 


-- Employees who live in the same cities as the 
-- companies they work for

SELECT DISTINCT e.employee-name
FROM employee e
JOIN works w ON e.empno = w.employee-no
JOIN company c ON w.company-name = c.company-name
WHERE e.city = c.city;


-- Employees who do not work for "First Bank Corporation"
SELECT e.employee-name FROM employee e
JOIN works w ON e.empno = w.employee-no
WHERE w.company-name <> 'First Bank Corporation';



-- 1

CREATE DATABASE school_system;
USE school_system;


-- Table for courses
CREATE TABLE courses (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    department VARCHAR(100)
);

-- Table for students

CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    gpa DECIMAL(3,2),
    course_id INT,
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);




SELECT s.first_name, s.last_name, s.gpa, c.course_name
FROM students s
JOIN courses c ON s.course_id = c.course_id
WHERE c.course_name = 'Computer Science'
AND s.gpa > 3.5;



UPDATE students s
JOIN courses c ON s.course_id = c.course_id
SET s.gpa = s.gpa + 0.1
WHERE c.department = 'Engineering';
