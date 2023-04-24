import styled from "styled-components";
import CashGames from "./Cashgames";

function MainComponent() {
  return (
    <>
      <MainContainer>
        <CashGames />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MainComponent;
