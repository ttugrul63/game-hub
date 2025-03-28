import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchInputProps {
  onSearchSubmit: (searchText: string) => void;
}

const SearchInput = ({ onSearchSubmit }: SearchInputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearchSubmit(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          placeholder="Search Games..."
          borderRadius={25}
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
