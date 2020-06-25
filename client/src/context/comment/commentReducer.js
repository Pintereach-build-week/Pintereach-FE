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
  
  export default (state, action) => {
    switch (action.type) {
      case GET_COMMENTS:
        return {
          ...state,
          comments: action.payload,
          loading: false
        };
      case ADD_CONTACT:
        return {
          ...state,
          comments: [action.payload, ...state.contacts],
          loading: false
        };
      case UPDATE_COMMENT:
        return {
          ...state,
          comments: state.comments.map(comment =>
            comment._id === action.payload._id ? action.payload : comment
          ),
          loading: false
        };
      case DELETE_COMMENT:
        return {
          ...state,
          comments: state.comments.filter(
            comment => comment._id !== action.payload
          ),
          loading: false
        };
      case CLEAR_COMMENT:
        return {
          ...state,
          contacts: null,
          error: null,
          current: null
        };
      case SET_CURRENT:
        return {
          ...state,
          current: action.payload
        };
      case CLEAR_CURRENT:
        return {
          ...state,
          current: null
        };
      case COMMENT_ERROR:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };
  