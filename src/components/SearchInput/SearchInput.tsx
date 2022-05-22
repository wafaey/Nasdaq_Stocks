import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border-radius: 50px;
  height: 25px;
  width: 35%;
`;
type Props = {
  searchText: string;
  setSearchText: Function;
  placeholder: string;
  type: string;
};

const SearchInput = ({
  searchText,
  setSearchText,
  placeholder,
  type,
}: Props) => {
  return (
    <>
      <Input
        id={placeholder}
        placeholder={placeholder}
        value={searchText}
        type={type}
        onChange={(event) => setSearchText(event.target.value)}
      />
    </>
  );
};

function areEqual(prevProps: Props, nextProps: Props) {
  return prevProps.searchText === nextProps.searchText;
}

export default React.memo(SearchInput, areEqual);
