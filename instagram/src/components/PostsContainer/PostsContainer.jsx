import React from 'react';
import Post from './Post';
import './Posts.css';
import styled from 'styled-components';


const PostsContainer = props => {
  return (
    <PostWrapper>
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </PostWrapper>
  );
};

export default PostsContainer;

const PostWrapper = styled.div`
  height: 50%;
  width: 40%;
  min-width: 300px;
  margin: .5rem auto;
`;
