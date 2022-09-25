//packages
import path from 'path';
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

//files
import clientRoute from "./routes/client.mjs"
import adminRoute from "./routes/admin.mjs"

//app
const app = express();

//dependencies
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(path.resolve(),"public")));

//routes
app.use('/admin', adminRoute);
app.use(clientRoute);
app.use((request,respond,next)=>{
    respond.render("404",{
        docTitle: "You fucked up !"
    })
});

// connection
const port = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://m001-student:oyCvs3f25KUffLv4@sandbox.f8vu2.mongodb.net/employee_management?retryWrites=true&w=majority")
.then(result => {
    console.log("Database Connected !");
    app.listen(port);
})
.catch(error => {
    console.log(error);
});