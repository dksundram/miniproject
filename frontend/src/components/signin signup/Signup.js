import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { name, email, password } = state;
    alert(
      `You are sign up with name: ${name} email: ${email} and password: ${password}`
    );

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h2>
          <strong>Create Account</strong>
        </h2>

        <Row>
          <Col className="col-6">
            {" "}
            <input
              type="text"
              name="fname"
              value={state.name}
              onChange={handleChange}
              placeholder="First Name"
            />
          </Col>
          <Col className="col-6">
            <input
              type="text"
              name="lname"
              value={state.name}
              onChange={handleChange}
              placeholder="Last Name"
            />
          </Col>
        </Row>

        <input
          type="text"
          name="username"
          value={state.name}
          onChange={handleChange}
          placeholder="Username"
        />

        <input
          type="number"
          name="phone"
          value={state.name}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
