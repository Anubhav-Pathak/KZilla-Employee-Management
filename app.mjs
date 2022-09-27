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
const port = 3000;
app.listen(process.env.PORT || port)
// mongoose.connect()
// .then(result => {
//     console.log("Database Connected !");
//     app.listen(process.env.PORT || port);
// })
// .catch(error => {
//     console.log(error);
// });
