import React from "react";
import "./App.css";
import Router from "./routes";
import MainContainer from "./components/ui/MainContainer";

function App() {
  return (
    <MainContainer>
      <Router />
    </MainContainer>
  );
}

export default App;
