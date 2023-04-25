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
      </Container>
    </>
  );
}

const PageDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  @media (min-width: 1440px) {
    width: 940px;
    background: #1c1d1e;
    margin-top: 30px;
    border-radius: 13px;
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
    background: blueviolet;
    min-height: 100vh;
    display: flex;
    justify-content: center;
  }
`;

export default App;
