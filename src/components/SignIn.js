import React from "react";
import styled from "styled-components";

const SignIn = () => {
  return (
    <Header>
      <OrangeCircle src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="logo" />
      <Signing>
        <SignUp>Sign Up</SignUp>
        <SignButton>Sign In</SignButton>
      </Signing>
    </Header>
  );
};

const SignUp = styled.button`
  color: #ffffff;
  background: #1c1d1e;
  border: 0;
  padding: 6px 12px 7px 13px;
  border-radius: 5px;
`;

const SignButton = styled.button`
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
  @media (min-width: 1440px) {
    display: none;
  }
`;


export default SignIn;
