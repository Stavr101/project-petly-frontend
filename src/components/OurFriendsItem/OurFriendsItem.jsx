import { Typography, Box } from "@mui/material";
import {
  FriendsInfoList,
  FriendsInfoWrapper,
  FriendsLinkTitle,
  FriendsItem,
  FriendsImage,
  FriendsInfoItemLink,
  FriendsInfoItemTime,
  FriendsTitle,
} from "./OurFriendsItem.styled";
import OurFriendsTimeList from "../OurFriendsTimeList/OurFriendsTimeList";
import { getDayIndex } from "../../utils/getDayIndex";
import { useTranslation } from 'react-i18next';

const DAY_OF_THE_WEEK = getDayIndex(new Date().getDay());

const checkField = (fieldName, value) => {
  if (value) {
    if (fieldName === "time" && value[DAY_OF_THE_WEEK]) {
      if (value[DAY_OF_THE_WEEK].isOpen) {
        return (
          <p>
            {value[DAY_OF_THE_WEEK].from} - {value[DAY_OF_THE_WEEK].to}
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
            style={{ textDecoration: "underline" }}
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

  return <div>---------------------</div>;
};

export const OurFriendsItem = ({ data }) => {
  const { title, url, addressUrl, imageUrl, address, workDays, phone, email } =
    data;
  
  const { t } = useTranslation();

  return (
    <FriendsItem>
      <FriendsTitle>
        <FriendsLinkTitle href={url} target="_blank" rel="noreferrer">
          {title}
        </FriendsLinkTitle>
      </FriendsTitle>

      <FriendsInfoWrapper>
        {imageUrl ? (
          <FriendsImage src={imageUrl} alt={title} />
        ) : (
          <div>no image</div>
        )}

        <FriendsInfoList>
          <FriendsInfoItemTime shouldHighlight={workDays}>
            <OurFriendsTimeList
              workDays={workDays}
              dayOfTheWeek={DAY_OF_THE_WEEK}
            >
              <Box>
                <Typography>{t("friends.time")}</Typography>
                {checkField("time", workDays)}
              </Box>
            </OurFriendsTimeList>
          </FriendsInfoItemTime>

          <li>
            <p>{t("friends.address")}</p>
            {checkField("address", { address, addressUrl })}
          </li>

          <li>
            <p>Email:</p>
            {checkField("email", email)}
          </li>

          <li>
            <p>{t("friends.phone")}</p>
            {checkField("phone", phone)}
          </li>
        </FriendsInfoList>
      </FriendsInfoWrapper>
    </FriendsItem>
  );
};
