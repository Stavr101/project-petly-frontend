import { Typography } from "@mui/material";
import {
  FriendsInfoList,
  FriendsInfoWrapper,
  FriendsLinkTitle,
  FriendsItem,
  FriendsImage,
  FriendsInfoItemLink,
  FriendsInfoItemTime,
} from "./OurFriendsItem.styled";
import { theme } from "../../services/theme";
import { styled } from "@mui/material/styles";
import OurFriendsTimeList from "../OurFriendsTimeList/OurFriendsTimeList";

const days = [7, 1, 2, 3, 4, 5, 6];
const week = ["MN", "TU", "WE", "TH", "FR", "SA", "SU"];
const myDate = new Date();
const dayOfTheWeek = days[myDate.getDay()] - 1;

const checkField = (fieldName, value, setterValue) => {
  if (value) {
    if (fieldName === "time" && value[dayOfTheWeek]) {
      if (value[dayOfTheWeek].isOpen) {
        return (
          <p
          // style={{
          //   color: setterValue ? theme.colors.accent : theme.colors.black,
          // }}
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

  return (
    <div
    //   style={{
    //     color: setterValue ? theme.colors.accent : theme.colors.black,
    //   }}
    >
      ---------------------
    </div>
  );
};

export const OurFriendsItem = ({ data }) => {
  const { title, url, addressUrl, imageUrl, address, workDays, phone, email } =
    data;

  //   const [isTimeHovered, setIsTimeHovered] = useState(false);

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
          <FriendsInfoItemTime
          // onMouseEnter={() => setIsTimeHovered(true)}
          // onMouseLeave={() => setIsTimeHovered(false)}
          >
            <p
            //   style={{
            //     color: isTimeHovered ? theme.colors.accent : theme.colors.black,
            //   }}
            >
              Time:
            </p>

            <OurFriendsTimeList
              workDays={workDays}
              dayOfTheWeek={dayOfTheWeek}
              week={week}
            >
              {checkField("time", workDays)}
            </OurFriendsTimeList>
          </FriendsInfoItemTime>

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
