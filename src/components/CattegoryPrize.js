import React from "react";
import styled from "styled-components";

const CattegoryPrizeComponent = () => {
  return (
    <AcattegoryTravelPrize>
      <AcattegoryTravelPrizeBox>
        <OrangeDivWide></OrangeDivWide>
        <AcattegoryTravelPrizeSpan>
          A კატეგორიის საგზურში შედის
        </AcattegoryTravelPrizeSpan>
      </AcattegoryTravelPrizeBox>
      <PrizeBox>
        <SinglePrizeBox>
          <PrizeIcon
            src="./assets/final-item-ticket-icon.png"
            alt="prize icon"
          />
          <SinglePrizeSpan>ორმხრივი ავიაბილეთი</SinglePrizeSpan>
        </SinglePrizeBox>
        <SinglePrizeBox>
          <PrizeIcon
            src="./assets/final-item-hotel-icon.png"
            alt="prize icon"
          />
          <SinglePrizeSpan>
            The Festival in Malta -ს მეინ ივენთის ბაი-ინი
          </SinglePrizeSpan>
        </SinglePrizeBox>
        <SinglePrizeBox>
          <PrizeIcon
            src="./assets/final-item-event-icon.png"
            alt="prize icon"
          />
          <SinglePrizeSpan>
            Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი
          </SinglePrizeSpan>
        </SinglePrizeBox>
        <SinglePrizeBox>
          <PrizeIcon
            src="./assets/final-item-ticket-icon.png"
            alt="prize icon"
          />
          <SinglePrizeSpan>სასტუმრო</SinglePrizeSpan>
        </SinglePrizeBox>
        <SinglePrizeBox>
          <PrizeIcon
            src="./assets/final-item-ticket-icon.png"
            alt="prize icon"
          />
          <SinglePrizeSpan>€500 სახარჯი ფული</SinglePrizeSpan>
        </SinglePrizeBox>
      </PrizeBox>
    </AcattegoryTravelPrize>
  );
};

const OrangeDivWide = styled.div`
  width: 100px;
  height: 4px;
  background: #ef5a21;
  box-shadow: rgb(239, 90, 33) 0px 0px 20px 2px;
  border-radius: 0 0 4px 4px;
  margin-right: 14px;
`;
const SinglePrizeSpan = styled.span`
  color: #ffffff;
  font-size: 13px;
  line-height: 14px;
  font-weight: normal;
`;
const PrizeIcon = styled.img`
  margin-left: 15px;
`;
const SinglePrizeBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 10px;
  background: #1c1d1e;
  gap: 12px;
`;
const PrizeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  padding: 12px;
`;
const AcattegoryTravelPrizeSpan = styled.span`
  color: #ffffff;
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  margin-top: 14px;
`;
const AcattegoryTravelPrizeBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background: #2c3234;
  border-radius: 10px 10px 0 0;
  height: 53px;
`;
const AcattegoryTravelPrize = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #25292b;
  margin-top: 20px;
  border-radius: 10px;
`;

export default CattegoryPrizeComponent;
