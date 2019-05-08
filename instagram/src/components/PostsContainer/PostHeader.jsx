import React from 'react';
import './Posts.css';
import styled, { css } from 'styled-components';

const PostHeader = props => {
  return (
    <PostHeaderDiv>
      <PostThumbWrapper>
        <img alt="post header" className="post-thumb" src={props.thumbnailUrl} />
      </PostThumbWrapper>
      <UserName bold>{props.username}</UserName>
    </PostHeaderDiv>
  );
};

export default PostHeader;

const PostHeaderDiv = styled.div`
  display: flex;
  padding: 1rem;
`;

const PostThumbWrapper = styled.div`
  height: 2rem;
  width: 2rem;
`;

export const UserName = styled.div`
  font-weight: 500;
  padding: 0 .5rem;
  ${props =>
    props.bold &&
    css`
      font-weight: 600;
      font-size: 1em;
      padding: .5rem;
    `};
`;
