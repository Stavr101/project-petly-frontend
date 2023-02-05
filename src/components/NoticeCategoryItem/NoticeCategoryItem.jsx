import DeleteSvg from "./NoticesDeleteSvg";
import HeartSvg from "./NoticesHeartSvg";
import HeartFavorite from "./NoticesHeartFavoriteSvg"

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
import { useState } from "react";
import ModalNotice from "components/ModalNotice/ModalNotice";

export default function NoticeCategoryItem({
  data,
  onDeletePets,
  onLearnMore,
  onFavorite
}) {
  const {
    _id,
    petAvatarURL,
    favorite,
    title,
    breed,
    location,
    price,
    /* birthdate, */
    categoryName,
  } = data;

  const [open, setOpen] = useState(false);

  const onLearnMoreClick = () => {
    setOpen(true);
  };

  const handleOnError = (e) => {
    e.target.src =
      "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png";
  };

  return (
    <>
      <ItemNoticesLi>
        <ItemNoticesImgDiv>
          {petAvatarURL ? (
            <ItemNoticesImg src={petAvatarURL} alt={title} />
          ) : (
            <ItemNoticesImg
              src={"https://i.ibb.co/RQ61YYb/1.jpg"}
              alt={"No image available"}
              onError={handleOnError}
            />
          )}
          {/* {isLoading === 0 ? (
            <ItemNoticesImg
            src={"https://i.ibb.co/RQ61YYb/1.jpg"}
            alt={"No image available"}
          />
          ) : (
            <ItemNoticesImg src={petAvatarURL} alt={title} />
          )} */}
          <ItemPositionNoticesDiv>
            <ItemPositionNoticesDivParagraf>
              {categoryName}
            </ItemPositionNoticesDivParagraf>
            <ItemButtonNoticesHeartButton 
            type="submit"
            onClick={() => onFavorite(_id)}
            >
              {favorite? <HeartFavorite/> : <HeartSvg /> }
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
              <ItemNoticesSpan>one year</ItemNoticesSpan>
            </ItemNoticesListLi>
            {categoryName === "sell" ? <ItemNoticesListLi>
              <ItemNoticesListP>Price:</ItemNoticesListP>
              <ItemNoticesSpan>{price}$</ItemNoticesSpan>
            </ItemNoticesListLi> : null }
          </ItemNoticesUlList>
          <ItemButtonNotices>
          <ItemButtonNoticesLearnMore
              type="submit"
              // onClick={() => onLearnMore(_id)}
              onClick={onLearnMoreClick}
            >
              Learn more
            </ItemButtonNoticesLearnMore>
            {favorite ? (
              <ItemButtonNoticesDelete
                type="submit"
                onClick={() => onDeletePets(_id)}
              >
                <ItemButtonNoticesDeleteSpan>
                  Delete
                </ItemButtonNoticesDeleteSpan>
                <DeleteSvg />
              </ItemButtonNoticesDelete>
            ) : null}
      
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
