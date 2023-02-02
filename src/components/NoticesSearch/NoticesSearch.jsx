import { useDispatch } from "react-redux";
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
      return Notify.failure("What pet do you need?", {
        position: 'center-top',
        cssAnimationStyle: 'from-right',
      });
    }
    onSubmit(query);
  };

  const clearInput = () => {
    setFilteredData("");
  };

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