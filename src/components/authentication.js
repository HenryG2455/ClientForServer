import React, { Component } from 'react';
import { getJwt } from '../helpers/jwt';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class authentication extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: undefined,
    };
  }
  componentDidMount() {
    const jwt = getJwt();
    if (!jwt) {
      this.props.history.push('/login');
    }
    axios
      .get('/getUser/', { headers: { Authorization: `Bearer ${jwt}` } })

      .catch((err) => {
        localStorage.removeItem('loginToken');
        this.props.history.push('/login');
      });
  }
  render() {
    if (this.state.user == undefined) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
    return <div>{this.props.children}</div>;
  }
}

export default withRouter(authentication);
