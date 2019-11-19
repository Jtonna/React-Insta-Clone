import React from 'react';
import { UserName } from '../PostsContainer/PostHeader';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';


const Comment = props => {
  return (
    <FlexContainer>
      <UserName>{props.comment.username}</UserName>
      <DisplayComment>{props.comment.text}</DisplayComment>
    </FlexContainer>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;

export const FlexContainer = styled.div`
  display: flex;
  ${props =>
    props &&
    css`
      line-height: 8px;
    `};
`;
const DisplayComment = styled.p`
`;
