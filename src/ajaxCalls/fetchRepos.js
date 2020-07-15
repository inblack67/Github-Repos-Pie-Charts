import axios from 'axios';

export default async (username) => {
    const res = await axios(`https://api.github.com/users/${username}/repos?per_page=10&cliient_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    return res.data;
  }