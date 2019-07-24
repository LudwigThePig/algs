SELECT name FROM Tenants; 


-- # MySQL https://leetcode.com/problems/combine-two-tables/
SELECT p.FirstName, p.LastName, a.City, a.State
FROM Person p
LEFT JOIN Address a
ON (p.PersonId = a.PersonId);

-- # MySQL https://leetcode.com/problems/second-highest-salary/
SELECT Max(Salary) as SecondHighestSalary FROM Employee where Salary < (select max(Salary) from Employee);

-- # MySQL https://leetcode.com/problems/delete-duplicate-emails/
DELETE t1 FROM Person t1
INNER JOIN Person t2
WHERE t1.email = t2.email and t1.id > t2.email;

DELETE t1 from Person t1
LEFT JOIN Person t2
ON t1.email = t2.email
WHERE t1.id > t2.id;

-- # MySQL https://leetcode.com/problems/rising-temperature/
SELECT t1.Id FROM Weather t1
INNER JOIN Weather t2
WHERE t1.Temperature > t2.Temperature
AND t1.RecordDate = DATE_ADD(t2.RecordDate, INTERVAL 1 DAY);


-- https://leetcode.com/problems/employees-earning-more-than-their-managers/
SELECT e.Name as Employee FROM Employee as e, Employee as m
WHERE  e.ManagerId = m.Id 
AND e.Salary > e.Salary;


-- https://leetcode.com/problems/duplicate-emails/
SELECT DISTINCT Email 
FROM Person
GROUP BY Email
HAVING count(1) > 1