import React from "react";
import ReactDOM from "react-dom";
import { Form, Icon, Input, Button, Checkbox, Row, Col } from "antd";
import "./App.css";
import Password from "antd/lib/input/Password";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "aaaaaaaaaaa"
    };
  }

  onChange = e => {
    const {
      target: { value, id }
    } = e;

    this.setState({
      [id]: value
    });
  };

  handleSubmit = () => {
    console.log("nilai", this.state.password, this.state.username);
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      alert("masuk");
    } else {
      alert(
        `Username = ${this.state.username}, Password = ${this.state.password}`
      );
    }
  };

  render() {
    return (
      <Row
        type="flex"
        justify="space-around"
        align="middle"
        className="container"
      >
        <Col>
          <h1>Login</h1>
          <Form className="login-form">
            <Form.Item>
              <Input
                value={this.state.username}
                id="username"
                onChange={this.onChange}
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item>
              <Input
                value={this.state.password}
                id="password"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                onChange={this.onChange}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Checkbox>Remember me</Checkbox>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={this.handleSubmit}
              >
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}
