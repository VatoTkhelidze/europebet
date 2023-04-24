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
