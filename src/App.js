import React, { Component } from 'react';
import Search from './components/Search';
import Nav from './components/Nav';
import loginForm from './components/loginForm';
import Register from './components/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actionCreator from './store/actions/index';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;
const Span = styled.span`
  font-size: 200%;
`;
const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class App extends Component {
  componentDidMount = () => {
    const token = localStorage.getItem('loginToken');
    if (!token) {
      console.log('No token send to login');
    }

    this.props.getProfileFetch();
  };
  render() {
    return (
      <Router>
        <Div>
          <Nav />
          <Switch>
            <header>
              <Route path="/" exact component={Home} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={loginForm} />
              <Route path="/search" component={Search} />
            </header>
          </Switch>
        </Div>
      </Router>
    );
  }
}

const Home = () => (
  <HomeDiv>
    <Span>Hello, There</Span>
    <p>Please Login or Register, to search the database.</p>
  </HomeDiv>
);
const mapDispatchToProps = (dispatch) => ({
  getProfileFetch: () => dispatch(actionCreator.getProfileFetch()),
});

export default connect(null, mapDispatchToProps)(App);
