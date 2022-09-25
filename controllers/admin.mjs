import Employee from "../models/employee.mjs";
export const getHome = (request, respond, next) => {
    Employee
    .find()
    .then(employees => {
        respond.render("admin/home", {
            docTitle: "KZilla | Admin",
            employees: employees
        })
    })
    .catch(error => {
        console.log(error);
    });
};
export const getAddEmployee = (request, respond, next) =>{
    respond.render("admin/add_edit.ejs", {
        docTitle: "KZilla | Admin | Add Employee",
        editing: false
    })
};
export const postAddEmployee = (request, respond, next) => {
    const name = request.body.name;
    const email = request.body.email;
    const age = request.body.age;
    const gender = request.body.gender;
    const phone = request.body.phone;
    const employee = new Employee({name: name, email: email, age: age, gender: gender, phone: phone});
    employee
    .save()
    .then(result => {
        console.log("Employee Added");
        respond.redirect("/admin/add");
    })
    .catch(error => {
        console.log(error);
    });
};
export const getEditEmployee = (request, respond, next) =>{
    const empId = request.params.empId;
    Employee
    .findById(empId)
    .then(employee=>{
        respond.render("admin/add_edit.ejs", {
            docTitle: "KZilla | Admin | Add Employee",
            editing: true,
            employee: employee
        });
    })
    .catch(error => {
        console.log(error);
    });
};
export const postEditEmployee = (request, respond, next) =>{
    const empId = request.body.empId;
    Employee
    .findById(empId)
    .then(employee => {
        employee.name = request.body.name;
        employee.email = request.body.email;
        employee.age = request.body.age;
        employee.gender = request.body.gender;
        employee.phone = request.body.phone;
        return employee.save();
    })
    .then(result => {
        console.log("Employee Info Updated");
        respond.redirect("/admin");
    })
    .catch(error => {
        console.log(error);
    });
};
export const postDeleteEmployee = (request, respond, next) => {
    const empId = request.body.empId;
    Employee
    .findByIdAndRemove(empId)
    .then(result => {
        console.log("Employee Removed");
        respond.redirect("/admin");
    })
    .catch(error => {
        console.log(error);
    });
};