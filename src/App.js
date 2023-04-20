import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import GamePrizeInstruction from "./components/PrizeInstruction";
import RulesAndQuestions from "./components/Rules";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <GamePrizeInstruction/>
        <RulesAndQuestions/>
      </MainContainer>
      <Footer/>
    </>
  );
}



const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
`;




export default App;
