import React, { useReducer } from 'react'
import PieContext from './pieContext'
import PieReducer from './pieReducer'
import fetchRepos from '../../ajaxCalls/fetchRepos.js'
import purePies from '../../utils/purePies.js'
import { GET_REPOS, PURE_PIES, ERROR } from '../types.js'

const PieState = (props) => {

    const initialState = {
        user: '',
        repos: [],
        loading: true,
        pies: []
    }

    const [state, dispatch] = useReducer(PieReducer, initialState);

    const getGitRepos = async (username) => {
        try {
            const res = await fetchRepos(username);
            dispatch({ 
                type: GET_REPOS,
                payload: {data: res, user: username},
            })
            if(res){
                purify(res);
            }
        } catch (err) {
            console.error(err)
            dispatch({
                type: ERROR
            })
        }
    }

    const purify = (repos) => {
        const res = purePies(repos);
        dispatch({ 
            type: PURE_PIES,
            payload: res
        })
    }

    return (
        <PieContext.Provider
        value={{
            repos: state.repos,
            loading: state.loading,
            pies: state.pies,
            user: state.user,
            getGitRepos,
            purify
        }}>
            { props.children }
        </PieContext.Provider>
    )
}

export default PieState
