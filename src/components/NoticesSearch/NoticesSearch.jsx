import { useState } from "react";
import {
  Search,
  SearchForm,
  FormButton,
  IconSearch,
  IconClose,
  FormInput,
} from "components/NoticesSearch/NoticesSearch.styled";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const NoticesSearch = () => {
  // const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    // setQuery(e.target.value.toLowerCase());
    setFilteredData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      return Notify.failure("What pet do you need?", {
        position: 'center-top',
        cssAnimationStyle: 'from-right',
      });
  };

  const clearInput = (e) => {
    e.preventDefault();
    setFilteredData("");
  };

  return (
    <Search>
      <SearchForm>
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
            <IconSearch onClick={handleSubmit}/> : <IconClose onClick={clearInput} />
          }
        </FormButton>
      </SearchForm>
    </Search>
  );
};

export default NoticesSearch;