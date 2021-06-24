import axios from 'axios';

// creates a customized instance // default template
export default axios.create({
  baseURL: "https://api.themoviedb.org/3"
});
