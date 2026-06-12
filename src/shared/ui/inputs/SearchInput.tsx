import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/shared/ui/inputs/InputGroup";
import { SearchIcon } from "lucide-react";

type SearchInputT = {
    placeholder: string;
}

const SearchInput = ({placeholder}: SearchInputT) => {
  return (
    <InputGroup>
      <InputGroupInput placeholder={placeholder} />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
};

export default SearchInput;
