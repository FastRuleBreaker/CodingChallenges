select department.name, COUNT(student.id) from department
left outer join student on student.DEPT_ID = department.id
group by department.id
order by COUNT(student.id) desc, department.name asc