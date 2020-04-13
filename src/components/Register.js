import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/index';
import styled from 'styled-components';

const FormDiv = styled.div`
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;
const Back = styled.div`
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
`;
const Input = styled.input`
  font-family: 'Roboto', sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
`;

const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  &:hover {
    background: #43a047;
  }
`;

const RegText = styled.p`
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
`;
const mapStateToProps = (state) => {
  return {
    password: state.password,
    email: state.email,
    username: state.username,
  };
};
const mapDispachToProps = (dispatch) => {
  return {
    setEmail: (pram) => dispatch(actionCreator.setEmail(pram)),
    setPassword: (pram) => dispatch(actionCreator.setPassword(pram)),
    setUser: (pram) => dispatch(actionCreator.setUser(pram)),
    getRegistered: () => dispatch(actionCreator.getRegistered()),
  };
};

class Register extends Component {
  handleChange = () => {
    this.props.setEmail(this.email.value);
    this.props.setPassword(this.pass.value);
    this.props.setUser(this.user.value);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getRegistered();
    this.props.history.push('/login');
  };
  render() {
    return (
      <Back>
        <FormDiv>
          <form onSubmit={this.handleSubmit}>
            <div>
              <Input
                type="text"
                id="username"
                placeholder="Enter a username"
                ref={(input) => (this.user = input)}
                name="username"
                onChange={this.handleChange}
              />
            </div>

            <div>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                ref={(input) => (this.email = input)}
                name="email"
                onChange={this.handleChange}
              />
            </div>

            <div>
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
                ref={(input) => (this.pass = input)}
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <Button type="submit" onClick={this.handleSubmit}>
              Sign Up
            </Button>
            <RegText>
              Already registered?{' '}
              <a href="http://localhost:3000/register"> Login here</a>
            </RegText>
          </form>
        </FormDiv>
      </Back>
    );
  }
}

export default connect(mapStateToProps, mapDispachToProps)(Register);
