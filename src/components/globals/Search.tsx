import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";

interface Props {
    onSearch: (searchTerm: string) => void;
}

const Search = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if(ref.current) {
          const searchTerm = ref.current.value;
          onSearch(searchTerm);
        }
      }}
    >
      <InputGroup flex="1" startElement={<LuSearch />}>
        <Input
          ref={ref}
          placeholder="Search games"
          borderRadius={20}
          variant={"outline"}
        />
      </InputGroup>
    </form>
  );
};

export default Search;
