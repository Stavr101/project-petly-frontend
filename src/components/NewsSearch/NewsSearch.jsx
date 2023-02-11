import { useSearchParams } from "react-router-dom";
import { Input, Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useTranslation } from 'react-i18next';

export default function NewsSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const onChangeInput = ({ target }) => {
    const query = target.value.trim();
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
  };

  const { t } = useTranslation();

  return (
    <Box
      sx={{
        textAlign: "center",
        mb: {
          mobile: 5,
          tablet: 7.5,
        },
      }}
    >
      <Input
        name="search-news"
        type="text"
        value={query}
        onChange={onChangeInput}
        disableUnderline={true}
        placeholder={t("news.search")}
        endAdornment={
          <InputAdornment position="end">
            {!query ? (
              <SearchIcon
                sx={{
                  color: "text.primary",
                  width: 24,
                  height: 24,
                }}
              />
            ) : (
              <HighlightOffIcon
                sx={{
                  color: "text.primary",
                  width: 24,
                  height: 24,
                  cursor: "pointer",
                }}
                onClick={() => setSearchParams({ query: "" })}
              />
            )}
          </InputAdornment>
        }
        sx={{
          color: "text.secondary",
          width: {
            mobile: 280,
            tablet: 608,
          },

          fontWeight: 500,
          lineHeight: 1.2,
          borderRadius: 5,
          backgroundColor: "background.paper",
          pl: {
            mobile: 1.5,
            tablet: 2.5,
          },
          pr: 1.2,
          fontSize: {
            mobile: 16,
            tablet: 20,
          },
          boxShadow: "7px 4px 14px rgba(49, 21, 4, 0.07)",
          input: {
            fontWeight: 500,
            py: 1.25,
            "&::placeholder": {
              color: "#535353",
              opacity: 1,
            },
            color: "#535353",
          },
        }}
      />
    </Box>
  );
}
