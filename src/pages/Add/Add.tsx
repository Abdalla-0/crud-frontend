import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAppDispatch } from "../../store/hook";
import { actionAddPosts } from "../../store/posts/postsSlice";

const AddPost = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please fill out all fields.");
      return;
    }
    const id = String(Math.floor(Math.random() * 500));
    const userId = "";
    dispatch(actionAddPosts({ id, title, description, userId }));
    setTitle("");
    setDescription("");
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
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default AddPost;
