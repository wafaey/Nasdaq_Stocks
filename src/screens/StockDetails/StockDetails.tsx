import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAppState } from "../../store";
import { TickerStatistics, TickerInfo } from "../../store/state";

const LoadingContainer = styled.div`
  display: flex;
  margin: 5%;
  align-items: center;
  justify-content: center;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const HeadContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;
const DetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;
const ValuesContainer = styled.div`
  width: 100%;
  margin: 1%;
`;
const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const ValueContainer = styled.div`
  width: 100%;
`;
const DetailName = styled.p`
  margin: 0;
  font-size: x-small;
`;
const linkStyle = {
  textDecoration: "none",
  color: "black",
};

type TickerDetails = {
  tickerStatistics: TickerStatistics;
  tickerInfo: TickerInfo;
};

const StockDetails = () => {
  const state = useAppState();
  const [tickerDetails, setTickerDetails] = React.useState<TickerDetails>({
    tickerStatistics: state.tickerStatistics,
    tickerInfo: state.tickerInfo,
  });
  React.useEffect(() => {
    setTickerDetails({
      tickerStatistics: state.tickerStatistics,
      tickerInfo: state.tickerInfo,
    });
  }, [state.tickerStatistics, state.tickerInfo]);

  return (
    <>
      {state.isLoading ? (
        <LoadingContainer>Loading...</LoadingContainer>
      ) : (
        <MainContainer>
          <HeadContainer>
            <div>
              <p>{tickerDetails.tickerStatistics.T}</p>
              <span>{tickerDetails.tickerStatistics.l}</span>
            </div>
            <Link to={"/"} style={linkStyle}>
              <button>Back</button>
            </Link>
          </HeadContainer>
          <DetailsContainer>
            <h2 style={{ float: "left", width: "100%" }}>Statistics</h2>
            <ValuesContainer>
              {" "}
              <div>
                <DetailName>Close</DetailName>
                <span> {tickerDetails.tickerStatistics.c}</span>
              </div>
              <div>
                <DetailName>Open</DetailName>
                <span> {tickerDetails.tickerStatistics.o} </span>
              </div>{" "}
              <div>
                <DetailName>High</DetailName>
                <span> {tickerDetails.tickerStatistics.h}</span>{" "}
              </div>{" "}
              <div>
                <DetailName>Low</DetailName>
                <span> {tickerDetails.tickerStatistics.l}</span>
              </div>{" "}
              <div>
                <DetailName>Volume</DetailName>
                <span> {tickerDetails.tickerStatistics.v}</span>
              </div>
            </ValuesContainer>
          </DetailsContainer>
          <DetailsContainer>
            <AboutContainer>
              {" "}
              <h2>About</h2>
              <a
                href={tickerDetails.tickerInfo.homepage_url}
                rel="noreferrer"
                target="_blank"
              >
                View Website
              </a>
            </AboutContainer>

            <ValueContainer>
              {" "}
              <h3>Industry </h3>
              <p>{tickerDetails.tickerInfo.name}</p>
            </ValueContainer>
            <ValueContainer>
              {" "}
              <h3>Description</h3>
              <p>{tickerDetails.tickerInfo.description}</p>
            </ValueContainer>
          </DetailsContainer>
        </MainContainer>
      )}
    </>
  );
};
export default StockDetails;
