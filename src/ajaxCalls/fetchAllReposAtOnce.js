import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min.js'

export const fetchRepos = async (username) => {
  const res = await getAllRepos(username);
  return res;
}

const getAllRepos = async (username) => {
  try {

    let repos = [];
    let res;
    let count = 1;

    do {
       res = await axios(`https://api.github.com/users/${username}/repos?page=${count}&per_page=100&cliient_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    //    console.log(res.data.length);

        repos = [...repos, ...res.data];
        count++;

    } while (res.data.length > 1);

    return repos;
  } catch (err) {
    if(err.response.status === 404){
      M.toast({ html: 'User not found!' })
    }
    throw new Error('User not found');
  }
  }