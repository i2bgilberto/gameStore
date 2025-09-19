import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGamesQueryStore from "../store";
import { useNavigate as Navigate } from "react-router-dom";


const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const searchText = useGamesQueryStore((s) => s.searchText);
  const navega = Navigate()
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        navega('/')
        if (ref.current) searchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
