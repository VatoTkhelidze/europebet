import React from "react";
import styled from "styled-components";

const RulesAndQuestions = () => {
  return (
    <>
      <Rules>წესები და პირობები</Rules>
      <FAQ>
        <RuleDiv>
          <Question>როდის იწყება და რა ფორმატით გაიმართება აქცია</Question>
          <img src="./assets/DownArrow.svg" alt="arrow" />
        </RuleDiv>
        <RuleDiv>
          <Question>როგორ მივიღო აქციაში მონაწილეობა?</Question>
          <img src="./assets/DownArrow.svg" alt="arrow" />
        </RuleDiv>
        <RuleDiv>
          <Question>სხვადასხვა</Question>
          <img src="./assets/DownArrow.svg" alt="arrow" />
        </RuleDiv>
      </FAQ>
    </>
  );
};

const FAQ = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  margin-top: 21px;
`;
const Question = styled.span`
  font-size: 14px;
  line-height: 17px;
  color: #bbbbbb;
  font-weight: normal;
`;
const RuleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 14px;
  width: 100%;
  height: 50px;
  background: #25292b;
  border-radius: 10px;
`;
const Rules = styled.span`
  font-size: 16px;
  color: #ffffff;
  line-height: 32px;
  font-weight: bold;
  margin-top: 55px;
`;

export default RulesAndQuestions;
