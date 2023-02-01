import { Input, Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function NewsSearch({ handleChange }) {
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
        type="search"
        onChange={handleChange}
        disableUnderline={true}
        placeholder="Search"
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon sx={{ color: "text.primary" }} />
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
            py: 1,
            "&::placeholder": {
              color: "#535353",
            },
            color: "#535353",
          },
        }}
      />
    </Box>
  );
}
