import axios from 'axios';
const URL = 'http://localhost:4000';

export default axios.create({
    baseURL: URL
});