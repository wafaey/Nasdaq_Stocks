import React from "react";
import styled from "styled-components";
import StocksList from "../../components/StocksList";
import SearchInput from "../../components/SearchInput";
import { useAppState } from "../../store";
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
  const [tickers, setTickers] = React.useState<Ticker[]>([]);
  const [searchText, setSearchText] = React.useState("");

  const getTicker = (ticker: string) => {};

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
      <section id="stocks">
        {" "}
        <StocksList tickers={tickers} getTicker={getTicker} />
      </section>
      {state.isLoading ? <LoadingContainer>Loading...</LoadingContainer> : null}
    </>
  );
};
export default Explore;
