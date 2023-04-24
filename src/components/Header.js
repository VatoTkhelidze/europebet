import React from "react";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";

const HeaderComponent = () => {
  const location = useLocation();

  return (
    <>
      <Header>
        <OrangeCircle src="./assets/logo.png" alt="logo" />
        <Signing>
          <SignUp>Sign Up</SignUp>
          <SignIn>Sign In</SignIn>
        </Signing>
      </Header>
      <MidContainer>
        <BannerImg src="./assets/banner.jpg" alt="banner main image" />
      </MidContainer>
      <MainHeaderDiv>
        <DateContainer>
          <Slots>სლოტები</Slots>
          <DateSpan>10 სექტემბერი - 7 ნოემბერი</DateSpan>
        </DateContainer>
        <PromoSpanDiv>
          <TravelSpan>მოიპოვე 10 საგზურიდან ერთ-ერთი</TravelSpan>
          <PokerFest>მოხვდი პოკერის ფესტივალზე მალტაში</PokerFest>
        </PromoSpanDiv>
        <Cattegories>
          <Cattegory to="/" $isActive={location.pathname === "/"}>
            <ButtonDate>28 ოქტ.-7 ნოემ.</ButtonDate>
            <ButtonTitle>Cash Games</ButtonTitle>
          </Cattegory>
          <Cattegory
            to="/newyearseries"
            $isActive={location.pathname === "/newyearseries"}
          >
            <ButtonDate>10 ნოემ.-29 დეკ.</ButtonDate>
            <ButtonTitle>New Year Series</ButtonTitle>
          </Cattegory>
          <Cattegory
            to="/finalstage"
            $isActive={location.pathname === "/finalstage"}
          >
            <ButtonDate>28 ოქტ.-7 ნოემ.</ButtonDate>
            <ButtonTitle>Final Stage</ButtonTitle>
          </Cattegory>
        </Cattegories>
      </MainHeaderDiv>
    </>
  );
};

const MainHeaderDiv = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`;

const PromoSpanDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonDate = styled.span`
  color: #ffffff;
  font-size: 11px;
  line-height: 17px;
`;

const ButtonTitle = styled.span`
  color: #ffffff;
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
`;

const Cattegory = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 9px;
  width: 139px;
  height: 77px;
  background-color: #2c3234;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;

  ${({ $isActive }) =>
    $isActive &&
    css`
      background: #ef5a21;
      height: 90px;
      width: 155px;
      transition: 0.4s;
    `}
`;

const Cattegories = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin-top: 26px;
  background: #2c3234;
  height: 77px;
`;

const PokerFest = styled.span`
  font-size: 14px;
  color: #ffffff;
  opacity: 90%;
  margin-top: 14px;
`;

const TravelSpan = styled.span`
  font-size: 16px;
  color: #ffffff;
  margin-top: 20px;
`;

const DateSpan = styled.span`
  font-size: 14px;
  color: #ffffff;
  opacity: 90%;
`;

const Slots = styled.button`
  color: #ffffff;
  background: #25292b;
  padding: 4px 10px 5px 10px;
  border: 0;
  border-radius: 15px;
  font-size: 12px;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 210px;
`;

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
