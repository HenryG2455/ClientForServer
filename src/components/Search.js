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

const mapStateToProps = (state) => {
  return {
    query: state.query,
    result: state.result,
    page: state.page,
    loaded: state.loaded,
    user: state.user,
  };
};
const mapDispachToProps = (dispatch) => {
  return {
    changePageDown: () => dispatch(actionCreator.changePageDown()),
    changePageUp: () => dispatch(actionCreator.changePageUp()),
    getSearchResult: () => dispatch(actionCreator.getSearchResult()),
    changeQuery: (pram) => dispatch(actionCreator.changeQuery(pram)),
    redirectMessage: (pram) => dispatch(actionCreator.redirectMessage(pram)),
    getProfileFetch: () => dispatch(actionCreator.getProfileFetch()),
  };
};

class Search extends Component {
  componentDidMount = () => {
    const token = localStorage.getItem('loginToken');
    if (!token) {
      console.log('No token send to login');
      this.props.history.push('/login');
      this.props.redirectMessage('Login In Before you can search the Database');
    } else {
      this.props.getProfileFetch();
    }
  };
  handlePageUp = () => {
    this.props.changePageUp();
    this.handleSubmit();
  };

  handlePageDown = () => {
    if (this.props.page !== 1) {
      this.props.changePageDown();
      this.handleSubmit();
    } else {
      this.handleSubmit();
    }
  };

  handleInputChange = () => {
    this.props.changeQuery(this.search.value);
  };

  handleSubmit = () => {
    if (this.props.query && this.props.query.length > 0) {
      this.props.getSearchResult();
      console.log('CHANGED INPUT');
    } else {
      console.log('INPUT HASNT CHANGED');
    }
  };

  render() {
    const theresult = this.props.result;
    return (
      <FormDiv>
        <form onSubmit={this.handleSubmit}>
          <Input
            placeholder="Search for users"
            ref={(input) => (this.search = input)}
            onChange={this.handleInputChange}
          />
          <button type="button" onClick={this.handleSubmit}>
            Search
          </button>
          <button type="button" onClick={this.handlePageDown}>
            Prev
          </button>
          <button type="button" onClick={this.handlePageUp}>
            Next
          </button>
          <div>
            {theresult.map((model) => (
              <div key={model.id}>
                <li>
                  {model.name} &nbsp; ID:{model.id}
                </li>
              </div>
            ))}
          </div>
        </form>
      </FormDiv>
    );
  }
}

export default connect(mapStateToProps, mapDispachToProps)(Search);
