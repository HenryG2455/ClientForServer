import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/index';
import styled from 'styled-components';

const mapStateToProps = (state) => {
  return {
    password: state.password,
    email: state.email,
    token: state.token,
    loggedIn: state.loggedIn,
  };
};
const mapDispachToProps = (dispatch) => {
  return {
    setEmail: (pram) => dispatch(actionCreator.setEmail(pram)),
    setPassword: (pram) => dispatch(actionCreator.setPassword(pram)),
    signIn: () => dispatch(actionCreator.signIn()),
    redirectMessage: (pram) => dispatch(actionCreator.redirectMessage(pram)),
  };
};

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
class loginForm extends Component {
  componentDidMount = () => {
    if (this.props.loggedIn === true) {
      console.log('you arealready loggedin');
      this.props.redirectMessage('You are already logged in');
      this.props.history.push('/');
    } else {
      console.log('plaese Log in');
    }
  };
  redirectToReg = () => {
    this.props.history.push('/register');
  };

  handleChange = () => {
    this.props.setEmail(this.email.value);
    this.props.setPassword(this.pass.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn();
    if (this.props.loggedIn === true) {
      this.props.history.push('/');
    }
    this.props.history.push('/');
  };

  render() {
    return (
      <Back>
        <FormDiv>
          <form onSubmit={this.handleSubmit}>
            <div>
              <div>
                <Input
                  type="email"
                  ref={(input) => (this.email = input)}
                  name="email"
                  placeholder="Email Address"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <Input
                  ref={(input) => (this.pass = input)}
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
              <Button type="button" onClick={this.handleSubmit}>
                SIGN IN
              </Button>
              <div>
                <RegText>
                  Not registered?{' '}
                  <a href="http://localhost:3000/register">
                    {' '}
                    Create an account
                  </a>
                </RegText>
              </div>
            </div>
          </form>
        </FormDiv>
      </Back>
    );
  }
}

export default connect(mapStateToProps, mapDispachToProps)(loginForm);
