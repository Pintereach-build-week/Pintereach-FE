import React, { useState } from "react";
import CommentInputHH from "./CommentInputHH";
import CommentsHH from "./CommentsHH";
import "./Comment.css";

const CommentCardHH = props => {
const [comments, setComments] = useState(props.comments);
const [comment, setComment] = useState('');

const addComment = event => {
  event.preventDefault();
  const data = {
    username: 'hailey',
    text: comment
  };
  setComments(comments => comments.concat(data));
  setComment('');
}

const changeComment = event => {
  setComment(event.target.value);
}

  return (
    <div>
      {comments.map((comment, idx) => <CommentsHH key={idx} comment={comment} />)}
      <CommentInputHH 
        submitComment={addComment} 
        changeComment={changeComment} 
        comment={comment} 
      />
    </div>
  );
};

export default CommentCardHH;