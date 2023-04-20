import React from "react";
import styled from "styled-components";

const HeaderComponent = () => {
  return (
    <>
      <Header>
        <OrangeCircle src="./assets/logo.png" alt="logo" />
        <Signing>
          <SignUp>Sign Up</SignUp>
          <SignIn>Sign In</SignIn>
        </Signing>
      </Header>
      <MidContainer><BannerImg src="./assets/banner.jpg" alt="banner main image"/></MidContainer>
    </>
  );
};
const BannerImg = styled.img`
  width: 100%;
  height: 210px;
`

const MidContainer = styled.div`
  width: 100%;
  height: 210px;
  margin-bottom: 19px;
  margin-top: 5px;
`;
const SignUp = styled.button`
  color: #ffffff;
  background: #1c1d1e;
  border: 0;
  padding: 6px 12px 7px 13px;
  border-radius: 5px;
`;
const SignIn = styled.button`
  color: #ffffff;
  border: 0;
  background: #ef602a;
  padding: 6px 12px 7px 13px;
  border-radius: 5px;
`;

const Signing = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const OrangeCircle = styled.img`
  width: 23.72px;
  height: 24px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 104px 16px 0 16px;
`;

export default HeaderComponent;
