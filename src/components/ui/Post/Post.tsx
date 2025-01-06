import { memo, useState } from "react";
import { TPosts } from "../../../types/posts.type";
import Table from "react-bootstrap/Table";
import { Button, ButtonGroup, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Post = ({
  data,
  deleteDataHandler,
  isLoggedIn,
}: {
  data: TPosts[];
  deleteDataHandler: (id: string) => void;
  isLoggedIn: boolean;
}) => {
  const navigate = useNavigate();
  const [itemClone, setItemClone] = useState<TPosts | null>(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const modal = (item: TPosts) => {
    setShow(true);
    setItemClone(item);
  };
  const confirmDelete = () => {
    if (itemClone?.id) {
      deleteDataHandler(itemClone.id);
    }
  };
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
        {data &&
          data.map((item, index) => (
            <tr key={index}>
              <td>{++index}</td>
              <td>
                <Link to={`post/${item.id}`}>{item.title}</Link>
              </td>
              <td>{item.description}</td>
              <td>
                <ButtonGroup aria-label="Basic example">
                  <Button
                    variant="success"
                    onClick={() => navigate(`post/${item.id}/edit`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    disabled={!isLoggedIn}
                    onClick={() => modal(item)}
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
      </tbody>
      {
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              Are you sure you want to delete this post : ({itemClone?.title})
            </p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={confirmDelete}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </Table>
  );
};

export default memo(Post);
