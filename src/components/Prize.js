import React from "react";
import styled from "styled-components";

const PrizeComponent = () => {
  return (
    <PrizeContainer>
      <InstructionHeader>
        <OrangeDiv></OrangeDiv>
        <InstructionSpan>
          მოხვდი TOP22 ლიდერბორდში ტურნირებზე დაგროვებული ქულებით
        </InstructionSpan>
      </InstructionHeader>
      <LeaderboardHodlerDiv>
        <LeaderboardHodlerSpan>
          ქულების დაგროვების მექანიკა
        </LeaderboardHodlerSpan>
        <ArrowDiv>
          <LeaderboardInfoImg src={process.env.PUBLIC_URL + "/assets/DownArrow.svg"} alt="info icon" />
        </ArrowDiv>
      </LeaderboardHodlerDiv>
      <PlaceAmountPrizeTextDiv>
        <PriceContentSpan>ადგილი</PriceContentSpan>
        <PriceContentSpan>
          <svg
            fill="white"
            width="18px"
            height="12px"
            viewBox="0 0 56 56"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,18.4197575 L16.360927,18.4197575 C15.3826248,17.981697 14.5211417,17.4268324 13.7764778,16.7551635 C13.0317839,16.0834947 12.4477182,15.3242227 12.0242806,14.4773477 C11.6008431,13.6304726 11.3891243,12.7178839 11.3891243,11.7395817 C11.3891243,10.6006663 11.6446521,9.58586649 12.1557078,8.69518236 C12.6667634,7.80449823 13.363985,7.10362835 14.2473726,6.59257272 C15.1307602,6.0815171 16.1346003,5.82598928 17.2588927,5.82598928 C18.237195,5.82598928 19.1680399,6.0194518 20.0514275,6.40637683 C20.9348151,6.79333176 21.7415444,7.34454816 22.4716153,8.06002604 C23.2016862,8.77547401 23.8149529,9.62964563 24.3114155,10.6225409 L24.3114155,0 L27.1806086,0 L27.1806086,10.6225409 C27.6916642,9.62964563 28.3122275,8.77547401 29.0422984,8.06002604 C29.7723694,7.34454816 30.5790986,6.79333176 31.4624862,6.40637683 C32.3458738,6.0194518 33.2694073,5.82598928 34.2330865,5.82598928 C35.3574089,5.82598928 36.3612639,6.0815171 37.2446515,6.59257272 C38.1280391,7.10362835 38.825186,7.80449823 39.3360921,8.69518236 C39.8471477,9.58586649 40.1026755,10.6006663 40.1026755,11.7395817 C40.1026755,12.7178839 39.8946947,13.6304726 39.4787331,14.4773477 C39.0625622,15.3242227 38.4821298,16.0834947 37.7374359,16.7551635 C36.992772,17.4268324 36.1239924,17.981697 35.1310971,18.4197575 L51.47,18.4197575 L51.47,21.0260964 L29.4584245,21.0260964 C29.794244,21.7269812 30.2979881,22.4826049 30.969657,23.2929675 C31.6413258,24.10336 32.4079092,24.8772399 33.2694073,25.6146074 C34.1309053,26.3519748 35.0142929,26.9688898 35.9195701,27.4653524 C36.8248473,27.9617851 37.6790338,28.2538105 38.4821298,28.3414285 C39.0953966,28.3998306 39.5663512,28.6079011 39.8949938,28.9656401 C40.2233373,29.323379 40.3875091,29.7869744 40.3875091,30.3564261 C40.3875091,30.8674787 40.1940316,31.3201248 39.8070767,31.7143643 C39.4202114,32.1086038 38.8909444,32.261919 38.2192756,32.1743099 C37.3139984,32.0428977 36.3174549,31.6997638 35.229645,31.1449081 C34.1418351,30.5900524 33.0686333,29.8782377 32.0100394,29.0094641 C30.9514156,28.1406695 30.0059627,27.1623673 29.1736807,26.0745574 C28.3413986,24.9867476 27.7354434,23.8441839 27.3558149,22.6468664 L27.1806086,22.6468664 L27.1806086,37.4089309 L24.3114155,37.4089309 L24.3114155,22.6468664 L24.1580988,22.6468664 C23.7784703,23.8441839 23.1725151,24.9867476 22.340233,26.0745574 C21.507951,27.1623673 20.5624981,28.1406695 19.5038743,29.0094641 C18.4452804,29.8782377 17.3684303,30.5900524 16.2733239,31.1449081 C15.1782175,31.6997638 14.1853073,32.0428977 13.2945933,32.1743099 C12.6229544,32.261919 12.0936574,32.1086038 11.7067025,31.7143643 C11.3197775,31.3201248 11.1263149,30.8674787 11.1263149,30.3564261 C11.1263149,29.7869744 11.2905764,29.323379 11.6190994,28.9656401 C11.9476223,28.6079011 12.4112206,28.3998306 13.0098943,28.3414285 C13.8275833,28.2538105 14.6890664,27.9581368 15.5943436,27.4544076 C16.4996208,26.9506485 17.3830084,26.3300853 18.2445064,25.5927178 C19.1060045,24.8553205 19.8725879,24.0850888 20.5442567,23.2820227 C21.2158957,22.4789567 21.7196398,21.7269812 22.0554892,21.0260964 L0,21.0260964 L0,18.4197575 Z M23.1944196,18.0693002 L23.8952895,18.0693002 L23.8952895,17.4122543 C23.8952895,16.302525 23.7237165,15.2548609 23.3805706,14.2692622 C23.0374247,13.2836635 22.5665299,12.4075873 21.9678861,11.6410338 C21.3692124,10.8744503 20.6829355,10.2721284 19.9090556,9.83406788 C19.1351756,9.39603729 18.310205,9.17702199 17.4341439,9.17702199 C16.6018618,9.17702199 15.9374895,9.42890154 15.4410269,9.93266065 C14.9445643,10.4363898 14.696333,11.1263 14.696333,12.0023911 C14.696333,12.732462 14.9226598,13.4552364 15.3753134,14.1707143 C15.8279669,14.8861922 16.4485302,15.5396047 17.2370032,16.130952 C18.0254762,16.7223292 18.9307683,17.193224 19.9528796,17.5436366 C20.9749908,17.894079 22.0555042,18.0693002 23.1944196,18.0693002 Z M28.2976046,18.0693002 C29.451113,18.0693002 30.5389229,17.894079 31.5610341,17.5436366 C32.5831454,17.193224 33.4884375,16.7223292 34.2769105,16.130952 C35.0653835,15.5396047 35.6822985,14.8861922 36.1276556,14.1707143 C36.5729827,13.4552364 36.7956462,12.732462 36.7956462,12.0023911 C36.7956462,11.1263 36.5510782,10.4363898 36.061942,9.93266065 C35.5727759,9.42890154 34.9047554,9.17702199 34.0578803,9.17702199 C33.1963822,9.17702199 32.3787082,9.39603729 31.6048581,9.83406788 C30.8309782,10.2721284 30.1447013,10.8744503 29.5460276,11.6410338 C28.9473838,12.4075873 28.4728407,13.2836635 28.1223983,14.2692622 C27.7719559,15.2548609 27.5967347,16.302525 27.5967347,17.4122543 L27.5967347,18.0693002 L28.2976046,18.0693002 Z M6.87727167,37.4089309 L44.5927283,37.4089309 C46.8851522,37.4089309 48.6044701,36.8431245 49.7506821,35.7115116 C50.896894,34.5798986 51.47,32.8897803 51.47,30.6411564 L51.47,6.78966855 C51.47,4.54105369 50.896894,2.84728856 49.7506821,1.70837313 C48.6044701,0.569457711 46.8851522,0 44.5927283,0 L6.87727167,0 C4.58484778,0 2.86552986,0.56580945 1.71931792,1.69742835 C0.573105973,2.82904725 0,4.52646065 0,6.78966855 L0,30.6411564 C0,32.8897803 0.573105973,34.5798986 1.71931792,35.7115116 C2.86552986,36.8431245 4.58484778,37.4089309 6.87727167,37.4089309 Z"
              transform="translate(2 9)"
            />
          </svg>
          ვაუჩერი
        </PriceContentSpan>
        <PriceContentSpan>პრიზი</PriceContentSpan>
      </PlaceAmountPrizeTextDiv>
      <PrizeInfoDiv>
        <SomeBox>
          <PlaceAmountPrizeTextDivDesktop>
            <PriceContentSpan>ადგილი</PriceContentSpan>
            <PriceContentSpan>
              <svg
                fill="white"
                width="18px"
                height="12px"
                viewBox="0 0 56 56"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,18.4197575 L16.360927,18.4197575 C15.3826248,17.981697 14.5211417,17.4268324 13.7764778,16.7551635 C13.0317839,16.0834947 12.4477182,15.3242227 12.0242806,14.4773477 C11.6008431,13.6304726 11.3891243,12.7178839 11.3891243,11.7395817 C11.3891243,10.6006663 11.6446521,9.58586649 12.1557078,8.69518236 C12.6667634,7.80449823 13.363985,7.10362835 14.2473726,6.59257272 C15.1307602,6.0815171 16.1346003,5.82598928 17.2588927,5.82598928 C18.237195,5.82598928 19.1680399,6.0194518 20.0514275,6.40637683 C20.9348151,6.79333176 21.7415444,7.34454816 22.4716153,8.06002604 C23.2016862,8.77547401 23.8149529,9.62964563 24.3114155,10.6225409 L24.3114155,0 L27.1806086,0 L27.1806086,10.6225409 C27.6916642,9.62964563 28.3122275,8.77547401 29.0422984,8.06002604 C29.7723694,7.34454816 30.5790986,6.79333176 31.4624862,6.40637683 C32.3458738,6.0194518 33.2694073,5.82598928 34.2330865,5.82598928 C35.3574089,5.82598928 36.3612639,6.0815171 37.2446515,6.59257272 C38.1280391,7.10362835 38.825186,7.80449823 39.3360921,8.69518236 C39.8471477,9.58586649 40.1026755,10.6006663 40.1026755,11.7395817 C40.1026755,12.7178839 39.8946947,13.6304726 39.4787331,14.4773477 C39.0625622,15.3242227 38.4821298,16.0834947 37.7374359,16.7551635 C36.992772,17.4268324 36.1239924,17.981697 35.1310971,18.4197575 L51.47,18.4197575 L51.47,21.0260964 L29.4584245,21.0260964 C29.794244,21.7269812 30.2979881,22.4826049 30.969657,23.2929675 C31.6413258,24.10336 32.4079092,24.8772399 33.2694073,25.6146074 C34.1309053,26.3519748 35.0142929,26.9688898 35.9195701,27.4653524 C36.8248473,27.9617851 37.6790338,28.2538105 38.4821298,28.3414285 C39.0953966,28.3998306 39.5663512,28.6079011 39.8949938,28.9656401 C40.2233373,29.323379 40.3875091,29.7869744 40.3875091,30.3564261 C40.3875091,30.8674787 40.1940316,31.3201248 39.8070767,31.7143643 C39.4202114,32.1086038 38.8909444,32.261919 38.2192756,32.1743099 C37.3139984,32.0428977 36.3174549,31.6997638 35.229645,31.1449081 C34.1418351,30.5900524 33.0686333,29.8782377 32.0100394,29.0094641 C30.9514156,28.1406695 30.0059627,27.1623673 29.1736807,26.0745574 C28.3413986,24.9867476 27.7354434,23.8441839 27.3558149,22.6468664 L27.1806086,22.6468664 L27.1806086,37.4089309 L24.3114155,37.4089309 L24.3114155,22.6468664 L24.1580988,22.6468664 C23.7784703,23.8441839 23.1725151,24.9867476 22.340233,26.0745574 C21.507951,27.1623673 20.5624981,28.1406695 19.5038743,29.0094641 C18.4452804,29.8782377 17.3684303,30.5900524 16.2733239,31.1449081 C15.1782175,31.6997638 14.1853073,32.0428977 13.2945933,32.1743099 C12.6229544,32.261919 12.0936574,32.1086038 11.7067025,31.7143643 C11.3197775,31.3201248 11.1263149,30.8674787 11.1263149,30.3564261 C11.1263149,29.7869744 11.2905764,29.323379 11.6190994,28.9656401 C11.9476223,28.6079011 12.4112206,28.3998306 13.0098943,28.3414285 C13.8275833,28.2538105 14.6890664,27.9581368 15.5943436,27.4544076 C16.4996208,26.9506485 17.3830084,26.3300853 18.2445064,25.5927178 C19.1060045,24.8553205 19.8725879,24.0850888 20.5442567,23.2820227 C21.2158957,22.4789567 21.7196398,21.7269812 22.0554892,21.0260964 L0,21.0260964 L0,18.4197575 Z M23.1944196,18.0693002 L23.8952895,18.0693002 L23.8952895,17.4122543 C23.8952895,16.302525 23.7237165,15.2548609 23.3805706,14.2692622 C23.0374247,13.2836635 22.5665299,12.4075873 21.9678861,11.6410338 C21.3692124,10.8744503 20.6829355,10.2721284 19.9090556,9.83406788 C19.1351756,9.39603729 18.310205,9.17702199 17.4341439,9.17702199 C16.6018618,9.17702199 15.9374895,9.42890154 15.4410269,9.93266065 C14.9445643,10.4363898 14.696333,11.1263 14.696333,12.0023911 C14.696333,12.732462 14.9226598,13.4552364 15.3753134,14.1707143 C15.8279669,14.8861922 16.4485302,15.5396047 17.2370032,16.130952 C18.0254762,16.7223292 18.9307683,17.193224 19.9528796,17.5436366 C20.9749908,17.894079 22.0555042,18.0693002 23.1944196,18.0693002 Z M28.2976046,18.0693002 C29.451113,18.0693002 30.5389229,17.894079 31.5610341,17.5436366 C32.5831454,17.193224 33.4884375,16.7223292 34.2769105,16.130952 C35.0653835,15.5396047 35.6822985,14.8861922 36.1276556,14.1707143 C36.5729827,13.4552364 36.7956462,12.732462 36.7956462,12.0023911 C36.7956462,11.1263 36.5510782,10.4363898 36.061942,9.93266065 C35.5727759,9.42890154 34.9047554,9.17702199 34.0578803,9.17702199 C33.1963822,9.17702199 32.3787082,9.39603729 31.6048581,9.83406788 C30.8309782,10.2721284 30.1447013,10.8744503 29.5460276,11.6410338 C28.9473838,12.4075873 28.4728407,13.2836635 28.1223983,14.2692622 C27.7719559,15.2548609 27.5967347,16.302525 27.5967347,17.4122543 L27.5967347,18.0693002 L28.2976046,18.0693002 Z M6.87727167,37.4089309 L44.5927283,37.4089309 C46.8851522,37.4089309 48.6044701,36.8431245 49.7506821,35.7115116 C50.896894,34.5798986 51.47,32.8897803 51.47,30.6411564 L51.47,6.78966855 C51.47,4.54105369 50.896894,2.84728856 49.7506821,1.70837313 C48.6044701,0.569457711 46.8851522,0 44.5927283,0 L6.87727167,0 C4.58484778,0 2.86552986,0.56580945 1.71931792,1.69742835 C0.573105973,2.82904725 0,4.52646065 0,6.78966855 L0,30.6411564 C0,32.8897803 0.573105973,34.5798986 1.71931792,35.7115116 C2.86552986,36.8431245 4.58484778,37.4089309 6.87727167,37.4089309 Z"
                  transform="translate(2 9)"
                />
              </svg>
              ვაუჩერი
            </PriceContentSpan>
            <PriceContentSpan>პრიზი</PriceContentSpan>
          </PlaceAmountPrizeTextDivDesktop>
          <PlaceAmountPrizeContainer>
            <PlaceNum>1</PlaceNum>
            <PrizeAmount>1500 ₾</PrizeAmount>
            <Prize>A კატეგორიის საგზური</Prize>
          </PlaceAmountPrizeContainer>
          <PlaceAmountPrizeContainer>
            <PlaceNum>1</PlaceNum>
            <PrizeAmount>1500 ₾</PrizeAmount>
            <Prize>A კატეგორიის საგზური</Prize>
          </PlaceAmountPrizeContainer>
          <PlaceAmountPrizeContainer>
            <PlaceNum>1</PlaceNum>
            <PrizeAmount>1500 ₾</PrizeAmount>
            <Prize>A კატეგორიის საგზური</Prize>
          </PlaceAmountPrizeContainer>
          <PlaceAmountPrizeContainer>
            <PlaceNum>1</PlaceNum>
            <PrizeAmount>1500 ₾</PrizeAmount>
            <Prize>A კატეგორიის საგზური</Prize>
          </PlaceAmountPrizeContainer>
          <PlaceAmountPrizeContainer>
            <PlaceNum>1</PlaceNum>
            <PrizeAmount>1500 ₾</PrizeAmount>
            <Prize>A კატეგორიის საგზური</Prize>
          </PlaceAmountPrizeContainer>
          <PlaceAmountPrizeContainer>
            <PlaceNum>1</PlaceNum>
            <PrizeAmount>1500 ₾</PrizeAmount>
            <Prize>A კატეგორიის საგზური</Prize>
          </PlaceAmountPrizeContainer>
        </SomeBox>
        <SomeOtherBox>
          <FestivalPrize>
            <OrangeSideDiv></OrangeSideDiv>
            <PlaneIcon src={process.env.PUBLIC_URL + "/assets/travel-icon-sm.png"} />
            <PrizeTitle>The Festival in Malta-ს საგზური</PrizeTitle>
          </FestivalPrize>
          <SpecTourPrize>
            <OrangeSideDiv></OrangeSideDiv>
            <PlaneIcon src={process.env.PUBLIC_URL + "/assets/ticket-icon-sm.png"} />
            <PrizeTitle>
              სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება
              The Festival in Malta-ს საგზური
            </PrizeTitle>
          </SpecTourPrize>
          <FestivalPrize>
            <OrangeSideDiv></OrangeSideDiv>
            <GiftcardPrize src={process.env.PUBLIC_URL + "/assets/giftcard-white.svg"} />
            <PrizeTitle>„ალტას“ ვაუჩერი</PrizeTitle>
          </FestivalPrize>
        </SomeOtherBox>
      </PrizeInfoDiv>
      <BriefInfo>
        * ლიდერბორდის შედეგები განახლდება
        <br /> <PokerLobbieA href="#">პოკერის ლობიში</PokerLobbieA>
      </BriefInfo>
      <BriefInfoDesktop>
        * ლიდერბორდის შედეგები განახლდება{" "}
        <PokerLobbieA href="#">პოკერის ლობიში</PokerLobbieA>
      </BriefInfoDesktop>
      <BriefInfo>
        * სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და
        სატელიტები
      </BriefInfo>
      <BriefInfoDesktop>
        * სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და
        სატელიტები
      </BriefInfoDesktop>
    </PrizeContainer>
  );
};

const SomeOtherBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1440px) {
    gap: 10px;
    padding: 20px 24px;
    border-radius: 16px;
    background: #25292b;
    margin-top: 20px;
  }
`;

const SomeBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1440px) {
    padding: 20px 32px;
    border-radius: 12px;
    background: #25292b;
    margin-top: 20px;
  }
`;

const OrangeDiv = styled.div`
  width: 125px;
  height: 4px;
  background: #ef5a21;
  box-shadow: rgb(239, 90, 33) 0px 0px 20px 2px;
  border-radius: 0 0 4px 4px;
`;

const BriefInfoDesktop = styled.span`
  display: none;
  @media (min-width: 1440px) {
    display: inline;
    font-size: 13px;
    color: #ffffff;
    line-height: 16px;
    text-align: center;
    margin-top: 16.17px;
  }
`;

const BriefInfo = styled.span`
  font-size: 13px;
  color: #ffffff;
  line-height: 16px;
  text-align: center;
  margin-top: 16.17px;
  @media (min-width: 1440px) {
    display: none;
  }
`;
const GiftcardPrize = styled.img`
  width: 26px;
  height: 26px;
  margin-left: 11.76px;
`;
const SpecTourPrize = styled.div`
  display: flex;
  align-items: center;
  height: 74px;
  width: 100%;
  background: #2c3234;
  border-radius: 14px;
  margin-top: 20px;
  @media (min-width: 1440px) {
    margin: 0;
    background: #202324;
  }
`;
const PrizeTitle = styled.span`
  font-size: 13px;
  color: #ffffff;
  line-height: 16px;
  font-weight: normal;
  margin-left: 8.02px;
  max-width: 244px;
`;
const PlaneIcon = styled.img`
  margin-left: 11.76px;
`;
const OrangeSideDiv = styled.div`
  width: 4px;
  height: 28px;
  background: #ef5a21;
  box-shadow: rgb(239, 90, 33) 0px 0px 20px 2px;
  border-radius: 0 4px 4px 0;
`;
const FestivalPrize = styled.div`
  display: flex;
  align-items: center;
  height: 63px;
  width: 100%;
  background: #2c3234;
  border-radius: 14px;
  margin-top: 20px;
  @media (min-width: 1440px) {
    margin: 0;
    background: #202324;
  }
`;

const PrizeInfoDiv = styled.div`
  padding-left: 13.99px;
  padding-right: 15.99px;
  width: 100%;
`;
const Prize = styled.span`
  font-size: 10px;
  color: #ffffff;
  line-height: 12px;
  width: 74px;
  text-align: center;
`;
const PrizeAmount = styled.span`
  color: #ffffff;
  font-size: 10px;
  line-height: 21px;
  margin-left: 25px;
`;
const PlaceNum = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2c3234;
  font-size: 10px;
  line-height: 7px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  color: #ffffff;
`;
const PlaceAmountPrizeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #1e2122;
  border: 2px solid #2c3234;
  border-radius: 76px;
  padding-left: 13px;
  padding-right: 20px;
  height: 45px;
`;
const PriceContentSpan = styled.span`
  display: flex;
  align-items: center;
  color: #7d7d7d;
  font-size: 12px;
  line-height: 25px;
  font-weight: normal;
`;
const PlaceAmountPrizeTextDivDesktop = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-left: 13.99px;
    padding-right: 54px;
    margin-bottom: 10px;
  }
`;
const PlaceAmountPrizeTextDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 13.99px;
  padding-right: 54px;
  margin-top: 20px;
  margin-bottom: 16px;
  @media (min-width: 1440px) {
    display: none;
  }
`;
const LeaderboardInfoImg = styled.img`
  margin-top: 3px;
`;
const LeaderboardHodlerDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #2c3234;
  background: #1e2122;
  border-radius: 76px;
  padding: 8px 20px 8px 20px;
  margin-top: 15px;
`;
const LeaderboardHodlerSpan = styled.span`
  color: #ffffff;
  font-size: 13px;
  line-height: 20px;
  font-weight: normal;
  margin-right: 30px;
`;
const InstructionSpan = styled.span`
  color: #ffffff;
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

const InstructionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #2c3234;
  width: 100%;
  border-radius: 16px;
  @media (min-width: 1440px) {
    border-radius: 16px 16px 0 0;
  }
`;

const PrizeContainer = styled.div`
  display: flex;
  width: 100%;
  background: #25292b;
  flex-direction: column;
  align-items: center;
  margin-top: 31px;
  border-radius: 16px;
  padding-bottom: 18px;
  @media (min-width: 1440px) {
    background: #171718;
    border: 4px solid #25292B;
  }
`;

const ArrowDiv = styled.div`
  position: absolute;
  right: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  background: #f05a22;
  padding: 5px;
  border: 2px solid white;
`;
const PokerLobbieA = styled.a`
  color: #ef5a21;
`;

export default PrizeComponent;
