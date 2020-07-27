/* write your SQL query below */

SELECT * FROM maintable_XPTH2 m
WHERE m.LastName = 'Smith'
OR m.FirstName =  'Robert'
ORDER BY m.Age asc