SELECT name FROM Tenants; 


-- # MySQL https://leetcode.com/problems/combine-two-tables/
SELECT p.FirstName, p.LastName, a.City, a.State
FROM Person p
LEFT JOIN Address a
ON (p.PersonId = a.PersonId);

-- # MySQL https://leetcode.com/problems/second-highest-salary/
SELECT Max(Salary) as SecondHighestSalary FROM Employee where Salary < (select max(Salary) from Employee);