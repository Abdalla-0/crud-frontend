import { Button, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { actionAddPosts } from "../../store/posts/postsSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Feedback/Loading";
import { useFormik } from "formik";
import { postSchema } from "../../utils/postSchema";

const AddPost = () => {
  const { loading, error } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { title: "", description: "" },
    validationSchema: postSchema,
    onSubmit: (values) => {
      if (!values.title || !values.description) {
        alert("Please fill out all fields.");
        return;
      }
      const id = String(Math.floor(Math.random() * 500));

      dispatch(
        actionAddPosts({
          id,
          title: values.title,
          description: values.description,
        })
      )
        .unwrap()
        .then(() => navigate("/"));
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
          isInvalid={!!formik.errors.title}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.title}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
          isInvalid={!!formik.errors.description}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.description}
        </Form.Control.Feedback>
      </Form.Group>
      <Loading loading={loading} error={error}>
        <Button type="submit">Submit</Button>
      </Loading>
    </Form>
  );
};

export default AddPost;
