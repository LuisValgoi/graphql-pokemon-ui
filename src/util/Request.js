import axios from 'axios';

const Request = axios.create({
  baseURL: 'http://localhost:3001/api'
});

export default Request;
