import React, { useState } from 'react'
import { useContext } from 'react'
import PieContext from '../context/pies/pieContext'

const SearchUser = () => {

    const [username, setUsername] = useState('');

    const pieContext = useContext(PieContext);

    const { getGitRepos } = pieContext;

    const onChange = e => {
        setUsername(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        setUsername('');
        getGitRepos(username);
    }

    return (
        <div className='container'>
            <form onSubmit={onSubmit}>
            <div className="input-field">
                <input type="text" name='username' value={username} required onChange={onChange}/>
                <label htmlFor="username">Username</label>
            </div>
            <div className="input-field">
                <button className='btn red' type="submit">
                    Search
                </button>
            </div>
            </form>
        </div>
    )
}

export default SearchUser
