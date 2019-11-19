import React from 'react';
import styled from 'styled-components';

const CommentForm = styled.form`
`;
const CommentInputField = styled.input`
`;

const CommentInput = props => {
  return (
    <CommentForm onSubmit={props.submitComment}>
      <CommentInputField type="text" value={props.comment} placeholder="Add comment... " onChange={props.changeComment} />
    </CommentForm>
  );
};

export default CommentInput;
