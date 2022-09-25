import mongoose, { Schema } from "mongoose";
const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: Number,
    gender: String,
    phone: String
});
export const Employee = mongoose.model("Employee",employeeSchema);
export default Employee;