import React from 'react';
import CameraLogo from '../../img/Instagram-Camera.svg';
import IGLogo from '../../img/Instagram-Brush-Lettering.png';
import styled from 'styled-components';

const SearchBar = props => {
  return (
    <SearchBarContainer>
      <LogosContainer>
        <LogoImage alt="instagram camera" src={CameraLogo} />
        <Divider>|</Divider>
        <LogoImage alt="instagram logo" src={IGLogo} />
      </LogosContainer>
      <SearchBarTextboxContainer>
        <SearchInput type="text" placeholder="Search" onKeyDown={props.searchPosts} />
      </SearchBarTextboxContainer>
      <UserIcons>
        <SocialDiv>
          <i className="compass" />
        </SocialDiv>
        <SocialDiv>
          <i className="heart" />
        </SocialDiv>
        <SocialDiv>
          <i className="user" />
        </SocialDiv>
      </UserIcons>
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.header`
  border-bottom: 1px solid #3333;
  height: 80px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
`;

const LogosContainer = styled.div`
  width: 300px;
  line-height: 75px;
`;

const LogoImage = styled.img`
  height: 50%;
  padding: 0px 15px;
`;

const Divider = styled.span`
  width: 50px;
`;

const SearchBarTextboxContainer = styled.div`
`;

const SearchInput = styled.input`
  height: 30px;
  width: 300px;
  text-align: center;
`;

const UserIcons = styled.div`

`;

const SocialDiv = styled.div`
`;
