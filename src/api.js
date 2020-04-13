import axios from 'axios';

export const fetchSearch = async (query, page) => {
  const token = localStorage.getItem('loginToken');
  try {
    const response = await axios.get(
      'http://localhost:4001/search?name=' + query + '&page=' + page,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchLogon = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:4001/login', {
      email: email,
      password: password,
    });
    localStorage.setItem(
      'loginToken',

      response.data.token
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchSignUp = async (email, password, username) => {
  try {
    const response = await axios.post('http://localhost:4001/register', {
      email: email,
      password: password,
      username: username,
    });
    console.log(response);

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchProfile = async (token) => {
  try {
    const response = await axios.get('http://localhost:4001/getUser', {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
