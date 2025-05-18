const zod = require('zod');

// name: {
//         type: String,
//         required: true
//     },
//     age: {
//         type: Number
//     },
//     gender: {
//         type: String
//     },
//     status: {
//         type: Boolean,
//         default: true
//     },
//     sports: [
//         {
//             type: String
//         }
//     ],
//     bloodgroups: {
//         enum: ["A+", "B+", "A-", "B-", "O+"],
//         type: String
//     },
//     // roleId: {
//     //     type: Schema.Types.ObjectId,
//     //     ref: "role"
//     // }
//     role: {
//         type: Schema.Types.ObjectId,
//         ref: "role"
//     }

const userValidationSchema = zod.object({
    name: zod.string().min(2, { message: "Name must be at least 2 characters long." }).max(30).nonempty("Name is required"),
    age: zod.number().min(1, { message: "Age must be at least 1." }).max(100, { message: "Age must be less than 100." }),
    email: zod.string().email("Invalid email format").nonempty("Email is required"),
    password: zod.string().min(8, { message: "Password must be at least 8 characters long." }).max(20).nonempty("Password is required"),
    gender: zod.string(),
    status: zod.boolean(),
    sports: zod.array(zod.string()),
    bloodgroups: zod.enum(["A+", "B+", "A-", "B-", "O+"]),
    role: zod.string()
}).strict();// .strict() is used to ensure that no extra fields are present in the object

module.exports = userValidationSchema