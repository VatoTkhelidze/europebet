import React from "react";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import SignIn from "./SignIn";

const HeaderComponent = () => {
  const location = useLocation();

  return (
    <>
      <SignIn />
      <MidContainer>
        <BannerImg src="./assets/banner.jpg" alt="banner main image" />
      </MidContainer>
      <MainHeaderDiv>
        <DateContainer>
          <SomeBox>
            <Slots>სლოტები</Slots>
            <DateSpan>10 სექტემბერი - 7 ნოემბერი</DateSpan>
          </SomeBox>
          <ExitButton>X</ExitButton>
        </DateContainer>
        <PromoSpanDiv>
          <TravelSpan>მოიპოვე 10 საგზურიდან ერთ-ერთი</TravelSpan>
          <PokerFest>მოხვდი პოკერის ფესტივალზე მალტაში</PokerFest>
        </PromoSpanDiv>
        <Cattegories>
          <Cattegory to="/" $isActive={location.pathname === "/"}>
            <ButtonDate>28 ოქტ.-7 ნოემ.</ButtonDate>
            <ButtonDateDesktop>1 - 29 აპრილი</ButtonDateDesktop>
            <ButtonTitle>Cash Games</ButtonTitle>
          </Cattegory>
          <Cattegory
            to="/newyearseries"
            $isActive={location.pathname === "/newyearseries"}
          >
            <ButtonDate>10 ნოემ.-29 დეკ.</ButtonDate>
            <ButtonDateDesktop>13 - 29 აპრილი</ButtonDateDesktop>
            <ButtonTitle>New Year Series</ButtonTitle>
          </Cattegory>
          <Cattegory
            to="/finalstage"
            $isActive={location.pathname === "/finalstage"}
          >
            <ButtonDate>28 ოქტ.-7 ნოემ.</ButtonDate>
            <ButtonDateDesktop>30 აპრილი</ButtonDateDesktop>
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
  @media (min-width: 1440px) {
    padding-left: 43px;
    padding-right: 43px;
  }
`;

const PromoSpanDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    display: flex;
  }
`;

const ButtonDateDesktop = styled.span`
  display: none;
  @media (min-width: 1440px) {
    display: inline;
    color: #ffffff;
    font-size: 11px;
    line-height: 17px;
    opacity: 80%;
  }
`;

const ButtonDate = styled.span`
  color: #ffffff;
  font-size: 11px;
  line-height: 17px;
  @media (min-width: 1440px) {
    display: none;
  }
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
  @media (min-width: 1440px) {
    width: 33.33%;
  }
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
  @media (min-width: 1440px) {
    background: #2c3234;
  }
`;

const ExitButton = styled.button`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    line-height: 0%;
    background: #25292b;
    color: #ffffff;
    font-size: 15px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    transition: 0.3s;
    :hover {
      background: red;
      transition: 0.3s;
    }
  }
`;

const SomeBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #25292b;
  border-radius: 35px;
  padding: 5px;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (min-width: 1440px) {
    position: fixed;
    top: 50px;
    border-radius: 35px;
    padding: 5px;
    padding-right: 15px;
    width: 860px;
  }
`;

const BannerImg = styled.img`
  width: 100%;
  height: 210px;
  @media (min-width: 1440px) {
    height: 100%;
    width: 100%;
    border-radius: 13px 13px 0 0;
  }
`;

const MidContainer = styled.div`
  width: 100%;
  height: 210px;
  margin-bottom: 19px;
  margin-top: 5px;
  @media (min-width: 1440px) {
    height: 350px;
    width: 940px;
    margin-top: unset;
  }
`;

export default HeaderComponent;
