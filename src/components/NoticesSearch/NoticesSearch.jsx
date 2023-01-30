import { useState } from "react";
import {
  Search,
  SearchForm,
  FormButton,
  IconSearch,
  IconClose,
  FormInput,
} from "components/NoticesSearch/NoticesSearch.styled";

const NoticesSearch = (onSubmit) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase());
    setFilteredData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      alert("What pet do you need?");
      return;
    }
    onSubmit(query);
  };

  const clearInput = () => {
    setFilteredData("");
  };

  console.log(filteredData)

  return (
    <Search>
      <SearchForm onSubmit={handleSubmit}>
        <FormInput
          name="input"
          type="text"
          autocomplete="off"
          placeholder="Search"
          value={filteredData}
          onChange={handleChange}
        />
        <FormButton type="submit">
          {filteredData.length === 0 ?
            <IconSearch /> : <IconClose onClick={clearInput} />
          }
        </FormButton>
      </SearchForm>
    </Search>
  );
};

export default NoticesSearch;
