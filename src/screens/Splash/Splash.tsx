import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LogoContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 15%;
`;

const FooterContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 25px;
  text-align: center;
`;

const Splash = () => {
  return (
    <MainContainer>
      <LogoContainer>
        <img
          src="https://download.logo.wine/logo/Nasdaq/Nasdaq-Logo.wine.png"
          alt="Nasdaq Logo"
          width={"50%"}
          height={"50%"}
        ></img>
      </LogoContainer>
      <FooterContainer>
        By <br />
        Omar Wafaey
      </FooterContainer>
    </MainContainer>
  );
};
export default Splash;
