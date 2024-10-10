import * as Yup from "yup";
export const postSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, "Please insert at least 2 characters")
        .max(50, "Please insert maximun 50 characters")
        .required("Title is required"),
    description: Yup.string().required("Description is required"),
});