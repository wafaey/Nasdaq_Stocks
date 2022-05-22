import React from "react";
import StockItem from "./StockItem";
import styled from "styled-components";
import { Ticker } from "../../store/state";

const StockContainer = styled.li`
  width: 98%;
  display: flex;
  flex-direction: column;
  margin: 1%;
  border: 1px solid black;
`;

type Props = {
  tickers: Ticker[];
  getTicker: Function;
};
const StocksList = ({ tickers, getTicker }: Props) => {
  return (
    <>
      {tickers?.map((ticker) => {
        return (
          <StockContainer key={ticker.name}>
            <StockItem ticker={ticker} getTicker={getTicker} />
          </StockContainer>
        );
      })}
    </>
  );
};

function areEqual(prevProps: Props, nextProps: Props) {
  return prevProps.tickers === nextProps.tickers;
}

export default React.memo(StocksList, areEqual);
