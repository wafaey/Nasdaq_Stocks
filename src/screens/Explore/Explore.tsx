import React, { useRef } from "react";
import styled from "styled-components";
import StocksList from "../../components/StocksList";
import SearchInput from "../../components/SearchInput";
import { useAppState, useActions } from "../../store";
import { Ticker } from "../../store/state";

const SearchContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
`;
const LoadingContainer = styled.div`
  display: flex;
  margin: 2%;
  align-items: center;
  justify-content: center;
`;
const Explore = () => {
  const state = useAppState();
  const actions = useActions();
  const runOnce = useRef(false);
  const [tickers, setTickers] = React.useState<Ticker[]>([]);
  const [searchText, setSearchText] = React.useState("");

  const getTicker = (ticker: string) => {
    actions.setIsLoading(true);
    actions.getTickerDetails(ticker);
  };

  const handleSearch = React.useCallback(
    (text: string) => {
      let textLowerCase = text.toLowerCase();
      let filteredTickers = tickers.filter((ticker) => {
        return (
          ticker.ticker.toLowerCase().includes(textLowerCase) ||
          ticker.name.toLowerCase().includes(textLowerCase)
        );
      });
      setTickers(filteredTickers);
    },
    [tickers]
  );

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      actions.loadTickers();
    }
  };

  React.useEffect(() => {
    if (state.tickers.length > 0) {
      setTickers(state.tickers);
    }
  }, [state.tickers]);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchText) {
        handleSearch(searchText);
      } else {
        setTickers(state.tickers);
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  React.useEffect(() => {
    if (runOnce.current === false && state.tickers.length === 0) {
      runOnce.current = true;
      actions.loadTickers();
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <SearchContainer>
        <SearchInput
          searchText={searchText}
          setSearchText={setSearchText}
          placeholder={"Search"}
          type={"text"}
        />
      </SearchContainer>
      <section className="stocks-list">
        {" "}
        <StocksList tickers={tickers} getTicker={getTicker} />
      </section>
      {state.isLoading ? <LoadingContainer>Loading...</LoadingContainer> : null}
    </>
  );
};
export default Explore;
