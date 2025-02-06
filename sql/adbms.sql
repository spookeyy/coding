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