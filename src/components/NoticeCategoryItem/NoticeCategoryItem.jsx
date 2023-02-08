import DeleteSvg from "./NoticesDeleteSvg";
import HeartSvg from "./NoticesHeartSvg";
import HeartFavorite from "./NoticesHeartFavoriteSvg";
import { addPetToFavorite } from "api/notices";
import { Notify } from "notiflix/build/notiflix-notify-aio";

import {
  ItemNoticesImgDiv,
  ItemNoticesTitle,
  ItemPositionNoticesDiv,
  ItemPositionNoticesDivParagraf,
  ItemNoticesUlList,
  ItemNoticesSpan,
  ItemNoticesLi,
  ItemButtonNotices,
  ItemNoticesWrap,
  ItemButtonNoticesLearnMore,
  ItemButtonNoticesDelete,
  ItemNoticesListLi,
  ItemNoticesListP,
  ItemNoticesImg,
  ItemButtonNoticesHeartButton,
  ItemButtonNoticesDeleteSpan,
} from "./NoticeCategoryItem.styled";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ModalNotice from "components/ModalNotice/ModalNotice";
import { selectUser } from "redux/auth/selectors";
import { getUserData } from "redux/users/selectors";
// import { getUserInfo } from "redux/users/operations";
import { removeFavoritePet } from "api/notices";

export default function NoticeCategoryItem({ data, lastNewsElementRef }) {
  const {
    _id,
    petAvatarURL,
    favorite,
    title,
    breed,
    location,
    price,
    birthdate,
    categoryName,
  } = data;

  const [open, setOpen] = useState(false);
  const isUser = useSelector(selectUser);
  const pet = useSelector(getUserData);
  const favoritePets = pet.user.favorite;

  const [isFavorite, setIsFavorite] = useState(favoritePets.includes(_id));
  // console.log(pet);

  const onLearnMoreClick = () => {
    setOpen(true);
  };

  const onDeletePets = () => {};

  const handleOnError = (e) => {
    e.target.src = "https://i.ibb.co/RQ61YYb/1.jpg";
  };

  const currentAge = (date) => {
    const dif = Date.now() - new Date(date);
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(dif / day);
    const months = Math.floor(days / 30.4);
    const years = months / 12;
    const transformedYear = Number(years.toString().split(".")[0]);
    const restDivision = years.toString().split(".")[1];
    const transformedMonth = restDivision
      ? Math.floor(Number(`0.${restDivision}` * 12))
      : null;

    if (transformedYear > 0) {
      if (transformedMonth) {
        return `${transformedYear} ${transformedYear === 1 ? "year" : "years"}`;
      }
      return `${transformedYear} ${transformedYear === 1 ? "year" : "years"}`;
    }

    if (transformedMonth) {
      return `${transformedMonth} ${
        transformedMonth === 1 ? "month" : "months"
      }`;
    }
    return "< 1 month";
  };
  useEffect(() => {}, []);

  async function addFavorite(_id) {
    if (isUser.email === null) {
      return Notify.failure("Must be authorization");
    }
    if (isDuplicate(_id)) {
      setIsFavorite(false);
      return deletePet(_id);
    }
    try {
      const res = await addPetToFavorite(_id);
      setIsFavorite(true);

      console.log(res);
      Notify.success("Pet add to your'e favorite");
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  async function deletePet(_id) {
    try {
      const res = await removeFavoritePet(_id);
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  function isDuplicate(petId) {
    return favoritePets?.find((pet) => pet === petId);
  }

  return (
    <>
      <ItemNoticesLi id={_id} ref={lastNewsElementRef}>
        <ItemNoticesImgDiv>
          {petAvatarURL ? (
            <ItemNoticesImg src={petAvatarURL.secure_url} alt={title} />
          ) : (
            <ItemNoticesImg
              src={"https://i.ibb.co/RQ61YYb/1.jpg"}
              alt={"No image available"}
              onError={handleOnError}
            />
          )}
          <ItemPositionNoticesDiv>
            <ItemPositionNoticesDivParagraf>
              {categoryName}
            </ItemPositionNoticesDivParagraf>
            <ItemButtonNoticesHeartButton
              type="button"
              onClick={() => addFavorite(_id)}
            >
              {isFavorite ? <HeartFavorite /> : <HeartSvg />}
            </ItemButtonNoticesHeartButton>
          </ItemPositionNoticesDiv>
        </ItemNoticesImgDiv>
        <ItemNoticesWrap>
          <ItemNoticesTitle>{title}</ItemNoticesTitle>
          <ItemNoticesUlList>
            <ItemNoticesListLi>
              <ItemNoticesListP>Breed:</ItemNoticesListP>
              <ItemNoticesSpan>{breed}</ItemNoticesSpan>
            </ItemNoticesListLi>
            <ItemNoticesListLi>
              <ItemNoticesListP>Place:</ItemNoticesListP>
              <ItemNoticesSpan>{location}</ItemNoticesSpan>
            </ItemNoticesListLi>
            <ItemNoticesListLi>
              <ItemNoticesListP>Age:</ItemNoticesListP>
              <ItemNoticesSpan>{currentAge(birthdate)}</ItemNoticesSpan>
            </ItemNoticesListLi>
            {categoryName === "sell" ? (
              <ItemNoticesListLi>
                <ItemNoticesListP>Price:</ItemNoticesListP>
                <ItemNoticesSpan>{price}$</ItemNoticesSpan>
              </ItemNoticesListLi>
            ) : null}
          </ItemNoticesUlList>

          <ItemButtonNotices>
            <ItemButtonNoticesLearnMore
              type="submit"
              // onClick={() => onLearnMore(_id)}
              onClick={onLearnMoreClick}
            >
              Learn more
            </ItemButtonNoticesLearnMore>
            {location.pathname === "own" && (
              <ItemButtonNoticesDelete
                type="submit"
                onClick={() => onDeletePets(_id)}
              >
                <ItemButtonNoticesDeleteSpan>
                  Delete
                </ItemButtonNoticesDeleteSpan>
                <DeleteSvg />
              </ItemButtonNoticesDelete>
            )}

            {/* <ItemButtonNoticesDelete
              type="submit"
              // onClick={() => onDeletePets(_id)}
            >
              <ItemButtonNoticesDeleteSpan>Delete</ItemButtonNoticesDeleteSpan>
              <DeleteSvg />
            </ItemButtonNoticesDelete> */}
          </ItemButtonNotices>
        </ItemNoticesWrap>
      </ItemNoticesLi>

      {open && (
        <ModalNotice
          petId={_id}
          setShowModal={setOpen}
          // isFavorite={isFavorite}
          // onClickFavorite={onClickFavorite}
          // onDeleteAdClick={onDeleteAdClick}
          // categories={categoriesForFront}
        />
      )}
    </>
  );
}
