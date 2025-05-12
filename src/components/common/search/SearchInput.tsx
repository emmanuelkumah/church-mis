import { useState } from "react";
import { FaSearch } from "react-icons/fa";

type SearchInputProp = {
  placeholder?: string;
  className?: string;
  onSearch: (term: string) => void;
};
const SearchInput: React.FC<SearchInputProp> = ({
  placeholder,
  className,
  onSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
    onSearch(searchTerm);
  };
  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <FaSearch />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={searchTerm}
        className={`autoFocus border border-gray-300 rounded-md w-full pl-10 pr-2 py-2 ${className}`}
      />
    </div>
  );
};

export default SearchInput;
