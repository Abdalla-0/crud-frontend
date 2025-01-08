import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { actionLogin, actionLogout } from "../../../store/auth/authSlice";
import { useAppDispatch } from "../../../store/hook";

const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="header">
      <h1>CRUD APP</h1>
      <ul className="nav rounded-1">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="post/add">Add Post</NavLink>
        </li>
        <li className="login">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" size="sm">
              login
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                style={{ color: "#333", fontWeight: 500 }}
                onClick={() => dispatch(actionLogin())}
              >
                Login
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "#333", fontWeight: 500 }}
                onClick={() => dispatch(actionLogout())}
              >
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
    </div>
  );
};

export default Header;
