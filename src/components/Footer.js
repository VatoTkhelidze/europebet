import React from "react";
import styled from "styled-components";
import SwiperComponent from "./Swiper";

const FooterComponent = () => {
  return (
    <>
      <FooterDiv>
        <Promos>მსგავსი აქციები</Promos>;
        <SwiperComponent />;
      </FooterDiv>
      <PlayGame>
        <PlayButton>ითამაშე</PlayButton>
      </PlayGame>
    </>
  );
};
const PlayButton = styled.button`
  width: 134px;
  height: 32px;
  background: #F05A22;
  border-radius: 5px;
  color: #ffffff;
  font-size: 15px;
  letter-spacing: 1.2px;
  line-height: 19px;
  font-weight: bold;
  border: 0;
  transition: 0.3s;
  cursor: pointer;
  :hover{
    box-shadow: rgb(239, 90, 33) 0px 0px 20px 2px;
    transition: 0.3s;
  }
`
const PlayGame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 56px;
  background: #171718;
`;
const FooterDiv = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 219px;
  margin-top: 40px;
  width: 100%;
`;
const Promos = styled.span`
  font-size: 16px;
  color: #ffffff;
  line-height: 32px;
  font-weight: bold;
  margin-top: 40px;
`;

export default FooterComponent;
