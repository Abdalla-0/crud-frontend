import Table from "react-bootstrap/Table";
import { Button, ButtonGroup } from "react-bootstrap";
import { TPosts } from "../../../types/posts.type";
import { TLoading } from "../../../types";

type TPostsProps = {
  data: TPosts[];
  loading: TLoading;
  error: string | null;
};

const Post = ({ data, loading, error }: TPostsProps) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr className="text-center">
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {loading === "pending" ? (
          <tr>
            <td colSpan={3}>Loading please wait...</td>
          </tr>
        ) : error ? (
          <tr>
            <td colSpan={3}>{error}</td>
          </tr>
        ) : (
          data &&
          data.map((item, index) => (
            <tr key={item.id}>
              <td>{++index}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>
                <ButtonGroup aria-label="Basic example">
                  <Button variant="success">Edit</Button>
                  <Button variant="danger">Delete</Button>
                </ButtonGroup>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
};

export default Post;
