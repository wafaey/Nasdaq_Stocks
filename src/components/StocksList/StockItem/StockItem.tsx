import React from "react";
import { Link } from "react-router-dom";
import { Ticker } from "../../../store/state";
import styled from "styled-components";

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const linkStyle = {
  textDecoration: "none",
  color: "black",
};

type Props = {
  ticker: Ticker;
  getTicker: Function;
};

const StockItem = ({ ticker, getTicker }: Props) => {
  return (
    <Link to={"/details"} style={linkStyle} onClick={() => {}}>
      <DetailsContainer>
        <span>{ticker.ticker}</span>
        <span>{ticker.name}</span>
      </DetailsContainer>
    </Link>
  );
};

export default StockItem;
