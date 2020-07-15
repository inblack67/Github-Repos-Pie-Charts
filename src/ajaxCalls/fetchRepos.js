import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min.js';

export default async (username) => {
  try {
    const res = await axios(`https://api.github.com/users/${username}/repos?cliient_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    return res.data;
  } catch (err) {
    if(err.response.status === 404){
      M.toast({ html: 'User not found!' })
    }
  }
  }