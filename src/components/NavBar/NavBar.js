import {
  DropdownButton,
  Dropdown,
  Form,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = ({ searchFunction, onResetSearch }) => {
  const [input, setInput] = useState("");

  const [dropdown, setDropdown] = useState("Search By");

  const navigate = useNavigate();

  const handleSelect = (e) => {
    setDropdown(e);
  };

  const onResetSearch1 = () => {
    setInput("");
    setDropdown("Search By");
    onResetSearch();
  };

  const submit = (e) => {
    e.preventDefault();
    onResetSearch();
    searchFunction(dropdown, input);

    navigate("/api/postSearch?description="+input);
    /*     setInput("");
    setDropdown("Search By"); */
  };

  return (
    <div>
      <h1 className="blog-name">
        🌴 Funny <span className="Nature">Nature</span> Blog 🦎
      </h1>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink className="bold" to={`/`} onClick={onResetSearch1}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={`/api/posts-tags/cute`} onClick={onResetSearch1}>
              Cute
            </NavLink>
          </li>
          <li>
            <NavLink to={`/api/posts-tags/beautiful`} onClick={onResetSearch1}>
              Beautiful
            </NavLink>
          </li>
          <li>
            <NavLink to={`/api/posts-tags/ugly`} onClick={onResetSearch1}>
              Ugly
            </NavLink>
          </li>
          <li>
            <NavLink to={`/api/posts-tags/scary`} onClick={onResetSearch1}>
              Scary
            </NavLink>
          </li>
          <li>
            <NavLink to={`/api/posts-tags/toxic`} onClick={onResetSearch1}>
              Toxic
            </NavLink>
          </li>
          <li>
            <NavLink className="bold" to={`/Authors`}>
              Authors
            </NavLink>
          </li>
        </ul>

        <Container className="justify-content-md-center">
          <Row className="justify-content-md-center">
            <Col xs lg="4">
              <DropdownButton
                id={`dropdown-variants-Info`}
                variant="primary"
                title={dropdown}
                onSelect={handleSelect}
                className="mb-3 mx-1 px-0 w-3"
              >
                <Dropdown.Item eventKey="Title">Title</Dropdown.Item>
                <Dropdown.Item eventKey="Description">
                  Description
                </Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col xs lg="6" className="mb-3 mx-0 px-0">
              <Form className="mb-3 mx-0 px-0">
                <Form.Group className="mb-3 mx-0 px-0" controlId="submit">
                  <Form.Control
                    size="md"
                    type="text"
                    placeholder="Searchfied"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col xs lg="2" className="mb-3 mx-0 px-0">
              <Button
                className="mb-3 mx-2 px-2"
                variant="primary"
                type="submit"
                onClick={(e) => submit(e)}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Container>
      </nav>
    </div>
  );
};

export default NavBar;
