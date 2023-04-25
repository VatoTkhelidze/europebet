import React from "react";
import styled from "styled-components";
import Prizes from "./components/Prize";

const newyearseries = () => {
  return (
    <MainContainer>
      <GrayContainer>
        <TourSatelitesDiv>
          <TourSatelites>
            <OrangeDiv></OrangeDiv>
            <TourSateliteSpan>ტურნირები და სატელიტები</TourSateliteSpan>
          </TourSatelites>
          <DailyEventSpan>
            სერიის ფარგლებში, ყოველდღიურად <br /> გაიმართება 3 ივენთი:
          </DailyEventSpan>
          <DailyEventSpanDesktop>
            სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:
          </DailyEventSpanDesktop>
          <TimeDateDiv>
            <ClockDiv>
              <img src="./assets/clock-svgrepo-com.svg" alt="clock icon" />
            </ClockDiv>
            <TimeDateSpan>19:00/19:30/20:00</TimeDateSpan>
          </TimeDateDiv>
          <AcesDiv>
            <LeftAce src="./assets/promo-left-img-m.png" alt="left side aces" />
            <LeftAceDesktop
              src="./assets/promo-left-img.png"
              alt="left side aces"
            />
            <SecondTourSatelitesDivDesktop>
              <InstructionOne>
                * ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.
              </InstructionOne>
              <InstructionOne>
                ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში
              </InstructionOne>
              <PokerLobbie>
                <PokerLobbieSpan>პოკერის ლობი</PokerLobbieSpan>
              </PokerLobbie>
            </SecondTourSatelitesDivDesktop>
            <RightAce
              src="./assets/promo-right-img-m.png"
              alt="right side aces"
            />
            <RightAceDesktop
              src="./assets/promo-right-img.png"
              alt="right side aces"
            />
          </AcesDiv>
        </TourSatelitesDiv>
      </GrayContainer>
      <SecondTourSatelitesDiv>
        <InstructionOne>
          * ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.
        </InstructionOne>
        <InstructionOne>
          ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში
        </InstructionOne>
        <PokerLobbie>
          <PokerLobbieSpan>პოკერის ლობი</PokerLobbieSpan>
        </PokerLobbie>
      </SecondTourSatelitesDiv>
      <Prizes />
      <SomeBox>
        <DailyTours>ყოველდღიური ტურნირები და სატელიტები</DailyTours>
        <DailyToursDesktop>
          ᲧᲝᲕᲔᲚᲓᲦᲘᲣᲠᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲘ ᲓᲐ ᲡᲐᲢᲔᲚᲘᲢᲔᲑᲘ
        </DailyToursDesktop>
        <TourContainer>
          <TwoOmaha>
            <OmahaDiv>
              <TitleAmount>
                <TitleSpan>Omaha Highrollers</TitleSpan>
                <AmountSpan>40 000₾</AmountSpan>
              </TitleAmount>
              <BuyInDate>
                <BuyInSpan>ბაი-ინი XXX₾</BuyInSpan>
                <DateDiv>
                  <DateSpan>27 დეკემბერი</DateSpan>
                </DateDiv>
              </BuyInDate>
            </OmahaDiv>
            <OmahaDiv>
              <TitleAmount>
                <TitleSpan>Omaha Highrollers</TitleSpan>
                <AmountSpan>40 000₾</AmountSpan>
              </TitleAmount>
              <BuyInDate>
                <BuyInSpan>ბაი-ინი XXX₾</BuyInSpan>
                <DateDiv>
                  <DateSpan>27 დეკემბერი</DateSpan>
                </DateDiv>
              </BuyInDate>
            </OmahaDiv>
          </TwoOmaha>
          <OmahaDivYellow>
            <TitleAmount>
              <TitleSpan>Omaha Highrollers</TitleSpan>
              <AmountSpan>40 000₾</AmountSpan>
            </TitleAmount>
            <BuyInDate>
              <BuyInSpan>ბაი-ინი XXX₾</BuyInSpan>
              <DateDivYellow>
                <DateSpanYellow>27 დეკემბერი</DateSpanYellow>
              </DateDivYellow>
            </BuyInDate>
          </OmahaDivYellow>
        </TourContainer>
        <InstructionOne>
          * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე,
          The Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს
          საგზურის მისაღებად.
        </InstructionOne>
      </SomeBox>
      <AdditionalInfo>
        <OrangeDiv></OrangeDiv>
        <InfoSpan>
          დამატებით შედგება, ქეშგეიმის, ტურნირების და სპინ პოკერის 12 Side
          ლიდერბორდი
        </InfoSpan>
        <InfoSpanDesktop>
          ᲓᲐᲛᲐᲢᲔᲑᲘᲗ ᲨᲔᲓᲒᲔᲑᲐ, ᲥᲔᲨᲒᲔᲘᲛᲘᲡ, ᲢᲣᲠᲜᲘᲠᲔᲑᲘᲡ ᲓᲐ ᲡᲞᲘᲜ ᲞᲝᲙᲔᲠᲘᲡ <br/> 12 SIDE
          ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲘ
        </InfoSpanDesktop>
        <InfoSpanBrief>
          * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის
          ლობიში.
        </InfoSpanBrief>
      </AdditionalInfo>
    </MainContainer>
  );
};

const SomeBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1440px) {
    align-items: center;
    background: #171718;
    padding: 25px;
    margin-top: 25px;
    border: 4px solid #25292b;
    border-radius: 16px;
  }
`;

const InfoSpanBrief = styled.span`
  font-size: 12px;
  color: #ffffff;
  font-weight: normal;
  margin-top: 10.33px;
  width: 270px;
  text-align: center;
  @media (min-width: 1440px) {
    width: unset;
  }
`;

const InfoSpanDesktop = styled.span`
  display: none;
  @media (min-width: 1440px) {
    display: block;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    text-align: center;
    font-weight: bold;
    margin-top: 20px;
  }
`;

const InfoSpan = styled.span`
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  max-width: 293px;
  margin-top: 20px;
  @media (min-width: 1440px) {
    display: none;
  }
`;
const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #2c3234;
  border-radius: 16px;
  width: 100%;
  margin-top: 24.17px;
  padding: 0 13.5px 16.17px 13.5px;
`;

const DateSpanYellow = styled.span`
  font-size: 14px;
  line-height: 17px;
  color: #094b3d;
  font-weight: bold;
`;

const DateSpan = styled.span`
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  font-weight: bold;
`;

const DateDivYellow = styled.div`
  display: flex;
  align-items: center;
  background: #d7c860;
  border-radius: 15px 15px 0 15px;
  padding: 4px 12px;
`;

const DateDiv = styled.div`
  display: flex;
  align-items: center;
  background: #b78648;
  border-radius: 15px 15px 0 15px;
  padding: 4px 12px;
`;
const BuyInSpan = styled.span`
  font-size: 12px;
  font-weight: bold;
  line-height: 17px;
  color: #ffffff;
`;
const BuyInDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;
const AmountSpan = styled.span`
  color: #ffbe00;
  font-size: 24px;
  line-height: 20px;
  font-weight: bold;
`;
const TitleSpan = styled.span`
  color: #ffffff;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
`;
const TitleAmount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

const TwoOmaha = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 17px;
  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
`;

const OmahaDivYellow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  width: 100%;
  height: 85px;
  background-image: url("./assets/final-info-img.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
`;

const OmahaDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  width: 100%;
  height: 85px;
  background-image: url("./assets/tournament-bg-m.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
  @media (min-width: 1440px) {
    background-size: cover;
    width: 100%;
  }
`;
const TourContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 14px;
  margin-top: 19px;
  margin-bottom: 16px;
`;

const DailyToursDesktop = styled.span`
  display: none;
  @media (min-width: 1440px) {
    display: inline;
    margin: 0;
    font-size: 18px;
    line-height: 20px;
    font-weight: bold;
    color: #ffffff;
  }
`;

const DailyTours = styled.span`
  color: #ffffff;
  font-size: 14px;
  font-weight: normal;
  line-height: 18px;
  margin-top: 24px;
  @media (min-width: 1440px) {
    display: none;
  }
`;
const PokerLobbieSpan = styled.span`
  color: #ffffff;
  font-size: 15px;
  line-height: 19px;
  font-weight: bold;
  opacity: 90%;
`;
const PokerLobbie = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 147px;
  height: 32px;
  border-radius: 5px;
  background: #f05a22;
`;
const InstructionOne = styled.span`
  color: #ffffff;
  font-weight: normal;
  font-size: 13px;
  line-height: 17px;
  text-align: center;
`;
const GrayContainer = styled.div`
  background: #2c3234;
  width: 100%;
  border-radius: 16px 16px 0 0;
  @media (min-width: 1440px) {
    border-radius: 16px;
  }
`;

const LeftAceDesktop = styled.img`
  display: none;
  @media (min-width: 1440px) {
    display: inline;
    border-radius: 12px;
  }
`;

const LeftAce = styled.img`
  border-radius: 16px;
  @media (min-width: 1440px) {
    display: none;
  }
`;

const RightAceDesktop = styled.img`
  display: none;
  @media (min-width: 1440px) {
    display: inline;
    border-radius: 12px;
  }
`;

const RightAce = styled.img`
  border-radius: 16px;
  @media (min-width: 1440px) {
    display: none;
  }
`;

const SecondTourSatelitesDivDesktop = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background: transparent;
    border-radius: 0 0 16px 16px;
    padding: 12px;
    gap: 10px;
    margin-top: 20px;
  }
`;

const SecondTourSatelitesDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: #2c3234;
  border-radius: 0 0 16px 16px;
  padding: 12px 12px 20px 12px;
  gap: 10px;
  @media (min-width: 1440px) {
    display: none;
  }
`;
const OrangeDiv = styled.div`
  width: 125px;
  height: 4px;
  background: #ef5a21;
  box-shadow: rgb(239, 90, 33) 0px 0px 20px 2px;
  border-radius: 0 0 4px 4px;
`;
const TimeDateSpan = styled.span`
  font-size: 13px;
  line-height: 17px;
  color: #ffffff;
  font-weight: bold;
  margin-left: 10px;
`;
const ClockDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  border-radius: 8px 15px 15px 8px;
  background: #f05a22;
  height: 31px;
`;
const TimeDateDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 200px;
  height: 31px;
  background: #171718;
  border: 2px solid #f05a22;
  border-radius: 10px;
  margin-bottom: -15px;
  margin-top: 20px;
`;
const AcesDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 16px;
`;

const DailyEventSpanDesktop = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: block;
    font-size: 16px;
    color: #ffffff;
    line-height: 20px;
    font-weight: bold;
    margin-top: 14px;
    text-align: center;
  }
`;

const DailyEventSpan = styled.span`
  font-size: 16px;
  color: #ffffff;
  line-height: 20px;
  font-weight: bold;
  margin-top: 14px;
  text-align: center;
  @media (min-width: 1440px) {
    display: none;
  }
`;
const TourSatelites = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background: #2c3234;
  border-radius: 16px 16px 0 0;
  height: 67px;
  width: 100%;
  @media (min-width: 1440px) {
    border-radius: 10px 10px 0 0;
  }
`;
const TourSateliteSpan = styled.span`
  color: #ffffff;
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
  margin-top: 20px;
`;
const TourSatelitesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 16px;
  background: black;
  @media (min-width: 1440px) {
    border: 4px solid #2c3234;
    background: #171718;
  }
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #1c1d1e;
  margin-top: 25px;
`;

export default newyearseries;
