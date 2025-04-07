const express = require('express');
const app = express();
const PORT = 3000;

// =================== GET API ================

app.get('/test', (req, res) => {
    console.log("test api called...");
    res.json({
        message: "test api called..."
    })
})

var users = [
    {
        id: 1,
        name: "Riddh Modi",
        age: 23,
        gender: "male",
        city: "Ahmedabad"
    },
    {
        id: 2,
        name: "Sumit Jadav",
        age: 22,
        gender: "male",
        city: "Ahmedabad"
    }
]

app.get('/users', (req, res) => {
    res.json({
        message: "user found...",
        data: users
    })
})

app.get('/user/:id', (req, res) => {
    console.log("user id : ", req.params.id)
    const foundUser = users.find((user) => user.id == req.params.id)
    console.log(foundUser)
    if (foundUser) {
        res.json({
            message: "User Found...",
            data: foundUser
        })
    }
    else {
        res.json({
            message: "User Not Found...",
            data: {}
        })
    }
})

// ================== EMPLOYEE ====================

var employees = [
    {
        id: 101,
        name: "Riddh Modi",
        salary: 12000,
        age: 21
    },
    {
        id: 102,
        name: "Sumit",
        salary: 20000,
        age: 23
    },
    {
        id: 103,
        name: "Preet",
        salary: 15000,
        age: 21
    },
    {
        id: 104,
        name: "Mayur",
        salary: 10000,
        age: 30
    }
]

app.get('/employee/:salary', (req, res) => {
    console.log(req.params.salary);
    const employeesAboveSalary = employees.filter((employee) => employee.salary >= req.params.salary);
    // filter always return n]balnk array so you have to check the length of the array 
    if (employeesAboveSalary.length > 0) {
        res.json({
            message: `Employees with salary ${req.params.salary} or above`,
            data: employeesAboveSalary
        })
    }
    else {
        res.json({
            message: `No employees with salary above ${req.params.salary}`,
            data: []
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const user = require("./user")
console.log(user.userName, user.userAge)
console.log(user.test(12))