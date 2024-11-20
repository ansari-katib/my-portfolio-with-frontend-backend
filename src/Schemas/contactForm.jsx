import { name } from "ejs";
import * as Yup from "yup";

export const ContactSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("please enter your name "),
    email: Yup.string().email().required("please enter your email "),
    subject: Yup.string().min(5).required("please enter the subject "),
    message: Yup.string().min(20).max(100).required("please enter your message ")
})