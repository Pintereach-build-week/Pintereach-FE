import React, { useReducer } from 'react'
import axios from 'axios'
import CommentContext from './commentContext'
import commentReducer from './commentReducer'
import {
    GET_COMMENTS,
    DELETE_COMMENT,
    SET_CURRENT,
    CLEAR_CURRENT,
    CLEAR_CURRENT,
    UPDATE_COMMENT,
    CLEAR_COMMENT,
    COMMENT_ERROR
} from '../types'

const CommentState = props => {
    const initialState = {
        comments: null,
        current: null,
        error: null
    }

    const [state, dispatch] = useReducer(commentReducer, initialState)

    // Get Comments
    const getComment = async () => {
        try {
            const res = await axios.get('')

            dispatch({
                type: GET_COMMENTS,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: COMMENT_ERROR,
                payload: err.response.msg
            })
        }
    }

    // Add Comment
    const addComment = async comments => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('https://reqres.in/api/users', comments, config)

            dispatch({
                type: ADD_COMMENT,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: COMMENT_ERROR,
                payload: err.response.msg
            })
        }
    }

    // Delete Comment
    const deleteComment = async id => {
        try {
            await axios.delete(`/api/comment/${id}`)

            dispatch({
                type: DELETE_COMMENT,
                payload: id
            })
        } catch (err) {
            dispatch({
                type: COMMENT_ERROR,
                payload: err.response.msg
            })
        }
    }

    // Update Comment
    const updateComment = async comments => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.put(
                `/api/comment/${comments._id}`,
                comments,
                config
            )

            dispatch({
                type: UPDATE_COMMENT,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: COMMENT_ERROR,
                payload: err.response.msg
            })
        }
    }

    // Clear Comment
    const clearComment = () => {
        dispatch({ type: CLEAR_COMMENT })
    }

    // Set Current Comment
    const setCurrent = comments => {
        dispatch({ type: SET_CURRENT, payload: comments })
    }

    // Clear Current Comment
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }

    return (
        <CommentContext.Provider
            value={{
                comments: state.comments,
                current: state.current,
                error: state.error,
                addComment,
                deleteComment,
                setCurrent,
                clearCurrent,
                updateComment,
                getComment,
                clearComment
            }}
        >
            {props.children}
        </CommentContext.Provider>
    )
}

export default CommentState
