import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Newyearseries from "./newyearseries";
import Finalstage from "./finalstage";
import Rules from "./components/Rules";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Container>
        <MainBackground>
          <PageDiv>
            <Header />
            <MainContainer>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/newyearseries" element={<Newyearseries />} />
                <Route path="/finalstage" element={<Finalstage />} />
              </Routes>
              <Rules />
            </MainContainer>
            <Footer />
          </PageDiv>
        </MainBackground>
      </Container>
    </>
  );
}
const MainBackground = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }
`;

const PageDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  @media (min-width: 1440px) {
    width: 940px;
    background: #1c1d1e;
    margin-top: 30px;
    border-radius: 13px;
    max-height: 739px;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #2c3234;
    border-radius: 2px;
    margin-bottom: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background: #f05a22;
    border-radius: 2px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
  @media (min-width: 1440px) {
    padding-left: 43px;
    padding-right: 43px;
  }
`;

const Container = styled.div`
  @media (min-width: 1440px) {
    background-image: url("./assets/main-background-image.png");
    background-size: contain;
    background-repeat: no-repeat;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    position: relative;
  }
`;

export default App;
