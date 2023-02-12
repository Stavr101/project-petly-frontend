import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import {
  Search,
  SearchForm,
  FormButton,
  IconSearch,
  IconClose,
  FormInput,
} from "components/NoticesSearch/NoticesSearch.styled";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useTranslation } from 'react-i18next';

const NoticesSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    setQuery("");
  }, [location.pathname]);

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

  const handleClear = () => {
    setSearchParams("")
    setQuery("")
  }

  const { t } = useTranslation();

  return (
    <Search>
      <SearchForm>
        <FormInput
          name="input"
          type="text"
          autocomplete="off"
          placeholder={t("news.search")}
          value={query}
          onChange={handleChange}
          debounceTimeout={300}
        />
        <FormButton type="button">
          {!query ? (
            <IconSearch onClick={handleSearchButton} />
          ) : (
            <IconClose onClick={handleClear} />
          )}
        </FormButton>
      </SearchForm>
    </Search>
  );
};

export default NoticesSearch;
