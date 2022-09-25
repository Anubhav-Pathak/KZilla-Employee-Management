import Employee from "../models/employee.mjs";
export const getHome = (request, respond, next) => {
    Employee
    .find()
    .then(employees => {
        respond.render("client/home", {
            docTitle: "KZilla | Home",
            employees: employees
        });
    })
    .catch(error => {
        console.log(error);
    });
}
export const getLogin = (request, respond, next) => {
    const valid = request.query.valid;
    respond.render("client/login", {
        docTitle: "KZilla | Login",
        validity: valid
    });
};
export const postLogin = (request, respond, next) => {
    const empId = request.body.id;
    Employee
    .findById(empId)
    .then(employee => {
        respond.redirect(`/admin`);
    })
    .catch(error =>{
        respond.redirect('/login?valid=false');
    });
};