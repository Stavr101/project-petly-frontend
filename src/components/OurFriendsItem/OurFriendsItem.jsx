import { Tooltip, Stack, Typography } from "@mui/material";
import {
  FriendsInfoList,
  FriendsInfoWrapper,
  FriendsLinkTitle,
  FriendsItem,
  FriendsInfoItem,
  FriendsImage,
  FriendsInfoItemLink,
} from "./OurFriendsItem.styled";
import { theme } from "../../services/theme";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { tooltipClasses } from "@mui/material/Tooltip";

const dayOfTheWeek = new Date().getDay() - 1;

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    border: `1px solid ${theme.colors.accent}`,
    boxShadow: theme.shadows.time,
    borderRadius: 5,
    color: theme.colors.black,
  },
}));

const checkField = (fieldName, value, setterValue) => {
  if (value) {
    if (fieldName === "time" && value[dayOfTheWeek]) {
      if (value[dayOfTheWeek].isOpen) {
        return (
          //   <Typography
          //     sx={{
          //       color: setterValue ? theme.colors.accent : theme.colors.black,
          //     }}
          //   >
          //     {value[dayOfTheWeek].from} - {value[dayOfTheWeek].to}
          //   </Typography>
          <p
            style={{
              color: setterValue ? theme.colors.accent : theme.colors.black,
            }}
          >
            {value[dayOfTheWeek].from} - {value[dayOfTheWeek].to}
          </p>
        );
      }
    }

    if (fieldName === "address") {
      if (value.addressUrl) {
        return (
          <FriendsInfoItemLink
            href={value.addressUrl}
            target="_blank"
            rel="noreferrer"
          >
            {value.address}
          </FriendsInfoItemLink>
        );
      }

      if (value.address) {
        return <Typography>{value.address}</Typography>;
      }
    }

    if (fieldName === "email") {
      return (
        <FriendsInfoItemLink href={`mailto:${value}`}>
          {value}
        </FriendsInfoItemLink>
      );
    }

    if (fieldName === "phone") {
      return (
        <FriendsInfoItemLink href={`tel:${value}`}>{value}</FriendsInfoItemLink>
      );
    }
  }

  return (
    <div
      style={{
        color: setterValue ? theme.colors.accent : theme.colors.black,
      }}
    >
      ---------------------
    </div>
  );
};

export const OurFriendsItem = ({ data }) => {
  const { title, url, addressUrl, imageUrl, address, workDays, phone, email } =
    data;

  const [isTimeHovered, setIsTimeHovered] = useState(false);

  return (
    <FriendsItem>
      <FriendsLinkTitle href={url} target="_blank" rel="noreferrer">
        {title}
      </FriendsLinkTitle>

      <FriendsInfoWrapper>
        {imageUrl ? (
          <FriendsImage src={imageUrl} alt={title} />
        ) : (
          <div>no image</div>
        )}
        <FriendsInfoList>
          <FriendsInfoItem>
            <LightTooltip
              sx={{ backgroundColor: "transparent" }}
              title={
                workDays ? (
                  <Stack spacing={2}>
                    {workDays.map((item) => (
                      <Typography key={item._id}>
                        {item.from} - {item.to}
                      </Typography>
                    ))}
                  </Stack>
                ) : (
                  ""
                )
              }
            >
              <p
                onMouseEnter={() => setIsTimeHovered(true)}
                onMouseLeave={() => setIsTimeHovered(false)}
                style={{
                  cursor: "pointer",
                  color: isTimeHovered
                    ? theme.colors.accent
                    : theme.colors.black,
                }}
              >
                Time:
                {checkField("time", workDays, isTimeHovered)}
              </p>
            </LightTooltip>
          </FriendsInfoItem>

          <li>
            <p>Address:</p>
            {checkField("address", { address, addressUrl })}
          </li>
          <li>
            <p>Email:</p>
            {checkField("email", email)}
          </li>
          <li>
            <p>Phone:</p>
            {checkField("phone", phone)}
          </li>
        </FriendsInfoList>
      </FriendsInfoWrapper>
    </FriendsItem>
  );
};
