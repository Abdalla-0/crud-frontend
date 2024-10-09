import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import usePostDetails from "../../hooks/use-post-details";
import Loading from "../../components/Feedback/Loading";
import { useAppDispatch } from "../../store/hook";
import { actionEditPosts } from "../../store/posts/postsSlice";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const dispatch = useAppDispatch();
  const { post, loading, error } = usePostDetails();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (post && !title && !description) {
      setTitle(post?.title);
      setDescription(post?.description);
    }
  }, [post, title, description]);

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(actionEditPosts({ id: post?.id as string, title, description }))
      .unwrap()
      .then(() => navigate("/"));
  };
  return (
    <Form onSubmit={formSubmitHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Loading loading={loading} error={error}>
        <Button type="submit">Submit</Button>
      </Loading>
    </Form>
  );
};

export default Edit;
