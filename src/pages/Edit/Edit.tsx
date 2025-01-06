import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import usePostDetails from "../../hooks/use-post-details";
import Loading from "../../components/Feedback/Loading";
import { useAppDispatch } from "../../store/hook";
import { actionEditPosts, clearPost } from "../../store/posts/postsSlice";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { postSchema } from "../../utils/postSchema";

const Edit = () => {
  const dispatch = useAppDispatch();
  const { post, loading, error } = usePostDetails();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearPost());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      title: post?.title || "",
      description: post?.description || "",
    },
    validationSchema: postSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (!values.title || !values.description) {
        alert("Please fill out all fields.");
        return;
      }
      dispatch(
        actionEditPosts({
          id: post?.id as string,
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

export default Edit;
