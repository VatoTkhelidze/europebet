import React from "react";
import styled from "styled-components";
import CattegoryPrize from "./components/CattegoryPrize";
import Rules from "./components/Rules";
import Footer from "./components/Footer";

const finalstage = () => {
  return (
    <>
      <MainContainer>
        <MainFirst>
          <MaltaBanner src="./assets/malta-image.webp" alt="malta banner" />
          <MaltaFestSpan>გაემგზავრე The Festival in Malta-ზე!</MaltaFestSpan>
          <MaltaFestSeriesSpan>
            The Festival Series ტურნირების
            <br /> ფარგლებში, ევროპაბეთი უკვე მეორედ
            <br />
            აძლევს პოკერის მოთამაშეებს
            <br /> დაუვიწყარი მოგზაურობის შანსს.
          </MaltaFestSeriesSpan>
          <MaltaPokerFestDiv>
            <OrangeDiv></OrangeDiv>
            <MaltaPokerFestSpan>
              15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს
            </MaltaPokerFestSpan>
          </MaltaPokerFestDiv>
          <CattegoryPrize />
          <CattegoryPrize />
          <CattegoryPrize />
        </MainFirst>
        <MainSecond>
          <AcattegoryTravelPrizeBox>
            <OrangeDivWide></OrangeDivWide>
            <AcattegoryTravelPrizeSpan>
              მოიგე საგზური 30 აპრილის ტურნირებზე
            </AcattegoryTravelPrizeSpan>
          </AcattegoryTravelPrizeBox>
          <AprilTravelPrizeBox>
            <SingleTravelPrizeBox>
              <SingleTravelTextDiv>
                <TravelTitleSpan>„Holdem Grinders”</TravelTitleSpan>
                <TravelInfoSpan>C კატეგორიის 1 საგზური</TravelInfoSpan>
              </SingleTravelTextDiv>
              <SingleTravelIcon
                src="./assets/poker-item-1-ticket-icon.png"
                alt="single travelbox icon"
              />
            </SingleTravelPrizeBox>
            <SingleTravelPrizeBox>
              <SingleTravelTextDiv>
                <TravelTitleSpan>“Cashgame Sharks”</TravelTitleSpan>
                <TravelInfoSpan>C კატეგორიის 1 საგზური</TravelInfoSpan>
              </SingleTravelTextDiv>
              <SingleTravelIcon
                src="./assets/poker-item-1-ticket-icon.png"
                alt="single travelbox icon"
              />
            </SingleTravelPrizeBox>
            <SingleTravelPrizeBox>
              <SingleTravelTextDiv>
                <TravelTitleSpan>„Holdem Grinders”</TravelTitleSpan>
                <TravelInfoSpan>C კატეგორიის 1 საგზური</TravelInfoSpan>
              </SingleTravelTextDiv>
              <SingleTravelIcon
                src="./assets/poker-item-1-ticket-icon.png"
                alt="single travelbox icon"
              />
            </SingleTravelPrizeBox>
            <SingleTravelPrizeBox>
              <SingleTravelTextDiv>
                <TravelTitleSpan>„The Festival in Malta, GTD“</TravelTitleSpan>
                <TravelInfoSpan>
                  B კატეგორიის 1 საგზური
                  <br /> C კატეგორიის 1 საგზური
                  <br />
                  *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾
                  ბაი-ინის გადახდით.
                </TravelInfoSpan>
              </SingleTravelTextDiv>
              <SingleTravelIcon
                src="./assets/poker-item-1-ticket-icon.png"
                alt="single travelbox icon"
              />
            </SingleTravelPrizeBox>
            <SingleTravelPrizeBox>
              <SingleTravelTextDiv>
                <TravelTitleSpan>“Cashgame Sharks”</TravelTitleSpan>
                <TravelInfoSpan>C კატეგორიის 1 საგზური</TravelInfoSpan>
                <TravelInfoSpan>
                  *ტურნირზე მონაწილებას შეძლებენ მხოლოდ ევროპაბეთის ბეჭდის
                  მფლობელები.
                </TravelInfoSpan>
              </SingleTravelTextDiv>
              <SingleTravelIcon
                src="./assets/poker-item-1-ticket-icon.png"
                alt="single travelbox icon"
              />
            </SingleTravelPrizeBox>
            <TravelInfoBottomSpan>
              * თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the
              Rings ტურნირზემოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით
            </TravelInfoBottomSpan>
            <TravelInfoBottomSpan>
              *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი
              ბაი-ინის გადახდით.
            </TravelInfoBottomSpan>
          </AprilTravelPrizeBox>
        </MainSecond>
        <MysticKeys>
          <AcattegoryTravelPrizeBox>
            <OrangeDivWide></OrangeDivWide>
            <MysticKeyImg src="./assets/mystic-keys.png" alt="mystic keys" />
          </AcattegoryTravelPrizeBox>
          <ScrollDiv>
          <SpecialTourBox>
            <SingleTourDiv>
              <NumbDiv>1</NumbDiv>
              <SingleTourSpan>
                სპეციალური ტურნირი Cashgame <br /> Sharks II ადგილი
              </SingleTourSpan>
            </SingleTourDiv>
            <SingleTourDiv>
              <NumbDiv>1</NumbDiv>
              <SingleTourSpan>
                სპეციალური ტურნირი Cashgame <br /> Sharks II ადგილი
              </SingleTourSpan>
            </SingleTourDiv>
            <SingleTourDiv>
              <NumbDiv>1</NumbDiv>
              <SingleTourSpan>
                სპეციალური ტურნირი Cashgame <br /> Sharks II ადგილი
              </SingleTourSpan>
            </SingleTourDiv>
            <SingleTourDiv>
              <NumbDiv>1</NumbDiv>
              <SingleTourSpan>
                სპეციალური ტურნირი Cashgame <br /> Sharks II ადგილი
              </SingleTourSpan>
            </SingleTourDiv>
            <SingleTourDiv>
              <NumbDiv>1</NumbDiv>
              <SingleTourSpan>
                სპეციალური ტურნირი Cashgame <br /> Sharks II ადგილი
              </SingleTourSpan>
            </SingleTourDiv>
            <SingleTourDiv>
              <NumbDiv>1</NumbDiv>
              <SingleTourSpan>
                სპეციალური ტურნირი Cashgame <br /> Sharks II ადგილი
              </SingleTourSpan>
            </SingleTourDiv>
            <SingleTourDiv>
              <NumbDiv>1</NumbDiv>
              <SingleTourSpan>
                სპეციალური ტურნირი Cashgame <br /> Sharks II ადგილი
              </SingleTourSpan>
            </SingleTourDiv>
            <SingleTourDiv>
              <NumbDiv>1</NumbDiv>
              <SingleTourSpan>
                სპეციალური ტურნირი Cashgame <br /> Sharks II ადგილი
              </SingleTourSpan>
            </SingleTourDiv>
            <SingleTourDiv>
              <NumbDiv>1</NumbDiv>
              <SingleTourSpan>
                სპეციალური ტურნირი Cashgame <br /> Sharks II ადგილი
              </SingleTourSpan>
            </SingleTourDiv>
            <SingleTourDiv>
              <NumbDiv>1</NumbDiv>
              <SingleTourSpan>
                სპეციალური ტურნირი Cashgame <br /> Sharks II ადგილი
              </SingleTourSpan>
            </SingleTourDiv>
            <SingleTourDiv>
              <NumbDiv>1</NumbDiv>
              <SingleTourSpan>
                სპეციალური ტურნირი Cashgame <br /> Sharks II ადგილი
              </SingleTourSpan>
            </SingleTourDiv>
            <SingleTourDiv>
              <NumbDiv>1</NumbDiv>
              <SingleTourSpan>
                სპეციალური ტურნირი Cashgame <br /> Sharks II ადგილი
              </SingleTourSpan>
            </SingleTourDiv>
            <SingleTourDiv>
              <NumbDiv>1</NumbDiv>
              <SingleTourSpan>
                სპეციალური ტურნირი Cashgame <br /> Sharks II ადგილი
              </SingleTourSpan>
            </SingleTourDiv>
            <SingleTourDiv>
              <NumbDiv>1</NumbDiv>
              <SingleTourSpan>
                სპეციალური ტურნირი Cashgame <br /> Sharks II ადგილი
              </SingleTourSpan>
            </SingleTourDiv>
            <SingleTourDiv>
              <NumbDiv>1</NumbDiv>
              <SingleTourSpan>
                სპეციალური ტურნირი Cashgame <br /> Sharks II ადგილი
              </SingleTourSpan>
            </SingleTourDiv>
            <SingleTourDiv>
              <NumbDiv>1</NumbDiv>
              <SingleTourSpan>
                სპეციალური ტურნირი Cashgame <br /> Sharks II ადგილი
              </SingleTourSpan>
            </SingleTourDiv>
            <SingleTourDiv>
              <NumbDiv>1</NumbDiv>
              <SingleTourSpan>
                სპეციალური ტურნირი Cashgame <br /> Sharks II ადგილი
              </SingleTourSpan>
            </SingleTourDiv>
          </SpecialTourBox>
          </ScrollDiv>
        </MysticKeys>
      </MainContainer>
    </>
  );
};
const ScrollDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 16px;
`
const SingleTourSpan = styled.span`
  font-size: 12px;
  line-height: 18px;
  color: #ffff;
  font-weight: normal;
`;
const NumbDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: #ffff;
  background: #2c3234;
  border-radius: 50%;
  font-size: 10px;
  margin-left: 14px;
  margin-right: 12px;
`;
const SingleTourDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 56px;
  width: 100%;
  background: #1e2122;
  border: 2px solid #2c3234;
  border-radius: 76px;
  flex-shrink: 0;
`;
const SpecialTourBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  gap: 4px;
  width: 100%;
  max-height: 380px;
  background: #25292b;
  padding-left: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 16px;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #2c3234;
    border-radius: 2px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background: #f05a22;
    border-radius: 2px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;
const MysticKeyImg = styled.img`
  max-width: 278px;
  margin-top: 21px;
  margin-bottom: 19px;
`;
const MysticKeys = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 14px;
  margin-top: 24px;
  background: #25292b;
`;
const TravelInfoBottomSpan = styled.span`
  color: #ffffff;
  font-size: 13px;
  line-height: 18px;
  font-weight: normal;
  text-align: center;
`;
const SingleTravelIcon = styled.img`
  height: 32px;
  position: absolute;
  right: 10px;
`;
const TravelInfoSpan = styled.span`
  color: #ffffff;
  font-size: 13px;
  line-height: 18px;
  font-weight: normal;
`;
const TravelTitleSpan = styled.span`
  color: #ffffff;
  font-size: 15px;
  line-height: 18px;
  font-weight: bold;
`;
const SingleTravelTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 5px;
`;
const SingleTravelPrizeBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #1e2122;
  border-radius: 12px;
  padding-left: 20px;
  padding-bottom: 20px;
  padding-right: 20px;
`;
const AprilTravelPrizeBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  gap: 10px;
`;
const AcattegoryTravelPrizeSpan = styled.span`
  color: #ffffff;
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  margin-top: 14px;
  text-align: center;
  margin-bottom: 20px;
`;
const OrangeDivWide = styled.div`
  width: 100px;
  height: 4px;
  background: #ef5a21;
  box-shadow: rgb(239, 90, 33) 0px 0px 20px 2px;
  border-radius: 0 0 4px 4px;
  margin-right: 14px;
`;
const AcattegoryTravelPrizeBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background: #2c3234;
  border-radius: 10px;
`;
const MainSecond = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 14px;
  margin-top: 25px;
  background: #25292b;
`;

const OrangeDiv = styled.div`
  width: 8px;
  height: 25px;
  background: #ef5a21;
  box-shadow: rgb(239, 90, 33) 0px 0px 20px 2px;
  border-radius: 0 4px 4px 0;
  margin-right: 14px;
`;
const MaltaPokerFestSpan = styled.span`
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  font-weight: normal;
`;
const MaltaPokerFestDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 62px;
  border-radius: 8px;
  background: #2c3234;
  margin-top: 20px;
`;
const MaltaFestSeriesSpan = styled.span`
  font-size: 13px;
  line-height: 17px;
  color: #ffffff;
  font-weight: normal;
  text-align: center;
  margin-top: 17px;
`;
const MaltaFestSpan = styled.span`
  font-size: 13px;
  line-height: 17px;
  color: #ffffff;
  font-weight: normal;
  text-align: center;
  margin-top: 17px;
`;
const MaltaBanner = styled.img`
  width: 100%;
  border-radius: 8px;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #1c1d1e;
  width: 100%;
  margin-top: 25px;
`;

const MainFirst = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 16px;
  border: 4px solid #25292b;
  padding: 20px;
  background: #171718;
`;

export default finalstage;
