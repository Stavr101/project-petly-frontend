import { useState } from "react";
import { useLocation } from "react-router-dom";

import DeleteSvg from "./NoticesDeleteSvg";
import HeartSvg from "./NoticesHeartSvg";
import HeartFavorite from "./NoticesHeartFavoriteSvg";
import { addPetToFavorite, removeFavoritePet, removeOwnPet } from "api/notices";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useAuth } from "hooks";
import ModalNotice from "components/ModalNotice/ModalNotice";
import { currentAge } from "utils/currentAge";

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

export default function NoticeCategoryItem({
  data,
  lastNewsElementRef,
  array,
  setArray,
}) {
  const {
    _id,
    petAvatarURL,
    favorite,
    owner,
    title,
    breed,
    location,
    price,
    birthdate,
    categoryName,
  } = data;

  const locationFavorite = useLocation();
  const { isLoggedIn } = useAuth();
  const { user } = useAuth();

  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorite);

  const onLearnMoreClick = () => {
    setOpen(true);
  };

  const handleOnError = (e) => {
    e.target.src = "https://i.ibb.co/RQ61YYb/1.jpg";
  };

  async function addFavorite(_id) {
    if (!isLoggedIn) {
      return Notify.failure("Must be authorization");
    }
    try {
      const res = await addPetToFavorite(_id);
      setIsFavorite(true);

      Notify.success("Pet add to your'e favorite");
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  async function removeFromFavorite(_id) {
    if (!isLoggedIn) {
      return Notify.failure("Must be authorization");
    }
    try {
      await removeFavoritePet(_id);
      const isOnFavoritePage = locationFavorite.pathname.includes("favorite");

      if (isOnFavoritePage) {
        const arrayNew = array.filter((item) => item._id !== _id);

        setArray(arrayNew);
      }
      return setIsFavorite(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChangeFavorite = (id) => {
    if (isFavorite) {
      removeFromFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  async function removeFromOwn(_id) {
    if (!isLoggedIn) {
      return Notify.failure("Must be authorization");
    }
    try {
      if (owner === user._id) {
        removeOwnPet(_id);
        const arrayNew = array.filter((item) => item._id !== _id);
        setArray(arrayNew);
      }
    } catch (error) {
      console.log(error);
    }
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
              onClick={() => handleChangeFavorite(_id)}
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
                <ItemNoticesSpan>{price} UAH</ItemNoticesSpan>
              </ItemNoticesListLi>
            ) : null}
          </ItemNoticesUlList>

          <ItemButtonNotices>
            <ItemButtonNoticesLearnMore
              type="submit"
              onClick={onLearnMoreClick}
            >
              Learn more
            </ItemButtonNoticesLearnMore>

            {isLoggedIn && owner === user._id ? (
              <ItemButtonNoticesDelete
                type="submit"
                onClick={() => removeFromOwn(_id)}
              >
                <ItemButtonNoticesDeleteSpan>
                  Delete
                </ItemButtonNoticesDeleteSpan>
                <DeleteSvg />
              </ItemButtonNoticesDelete>
            ) : (
              ""
            )}
          </ItemButtonNotices>
        </ItemNoticesWrap>
      </ItemNoticesLi>
      {open && (
        <ModalNotice
          petId={_id}
          setShowModal={setOpen}
          isFavorite={isFavorite}
          handleChangeFavorite={handleChangeFavorite}
          handleDeletePet={removeFromOwn}
        />
      )}
    </>
  );
}
