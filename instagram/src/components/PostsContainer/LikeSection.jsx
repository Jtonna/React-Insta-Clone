import React from 'react';
import styled from 'styled-components';
import { FlexContainer } from '../CommentSection/Comment';

const LikeSection = props => {
  return [
    <FlexContainer key="likes-icons-container" onClick={props.incrementLike} comment>
      <PostIconSection> <i className="heart" /> </PostIconSection>
    </FlexContainer>,
    <FlexContainer key="comment-icons-container">
     <PostIconSection> <i className="comment" /> </PostIconSection>
    </FlexContainer>,
    <FlexContainer key="likes-container" comment>
      <PostIconSection>{props.likes}</PostIconSection>
    </FlexContainer>
  ];
};

export default LikeSection;

const PostIconSection = styled.div`
`;
