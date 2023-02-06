import { useState } from "react";
import { useSearchParams } from "react-router-dom";
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase());
    const search = e.target.value.trim();
    const nextParams = search !== "" ? { search } : {};
    setSearchParams(nextParams);
  };

  const handleSearchButton = () => {
    if (!query) {
      return Notify.failure("Type some text to find pet", {
        position: "center-top",
        cssAnimationStyle: "from-right",
      });
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.input.value);
  //   if (!e.target.input.value) {
  //     return Notify.failure("Type some text to find pet", {
  //       position: "center-top",
  //       cssAnimationStyle: "from-right",
  //     });
  //   }
  //   const search = e.target.input.value.trim();
  //   const nextParams = search !== "" ? { search } : {};
  //   setSearchParams(nextParams);
  //   e.target.form.reset();
  // };

  return (
    <Search>
      <SearchForm>
        <FormInput
          name="input"
          type="text"
          autocomplete="off"
          placeholder="Search"
          value={query}
          onChange={handleChange}
        />
        <FormButton type="button">
          {!query ? (
            <IconSearch onClick={handleSearchButton} />
          ) : (
            <IconClose onClick={() => setQuery("")} />
          )}
        </FormButton>
      </SearchForm>
    </Search>
  );
};

export default NoticesSearch;
