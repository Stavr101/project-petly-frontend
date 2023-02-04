import DeleteSvg from "./NoticesDeleteSvg";
import HeartSvg from "./NoticesHeartSvg";

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
  ItemButtonNoticesHeartSpan,
  ItemButtonNoticesDeleteSpan,
} from "./NoticeCategoryItem.styled";

export default function NoticeCategoryItem({ data }) {
  const {
    id,
    petAvatarURL,
    favorite,
    title,
    breed,
    location,
    age,
    categoryName,
    onDeletePets,
    onLearnMore,
  } = data;

  const handleOnError = (e) => {
    e.target.src =
      "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png";
}

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
            <ItemButtonNoticesHeartSpan>
              <HeartSvg />
            </ItemButtonNoticesHeartSpan>
          </ItemPositionNoticesDiv>
        </ItemNoticesImgDiv>
        <ItemNoticesWrap>
        <ItemNoticesTitle>{title}</ItemNoticesTitle>
        <ItemNoticesUlList>
          <ItemNoticesListLi>
            <ItemNoticesListP>
              Breed:<ItemNoticesSpan>{breed}</ItemNoticesSpan>
            </ItemNoticesListP>
          </ItemNoticesListLi>
          <ItemNoticesListLi>
            <ItemNoticesListP>
              Place:<ItemNoticesSpan>{location}</ItemNoticesSpan>
            </ItemNoticesListP>
          </ItemNoticesListLi>
          <ItemNoticesListLi>
            <ItemNoticesListP>
              Age:<ItemNoticesSpan>{age}</ItemNoticesSpan>
            </ItemNoticesListP>
          </ItemNoticesListLi>
        </ItemNoticesUlList>
        <ItemButtonNotices>
          <ItemButtonNoticesLearnMore
            type="submit"
            onClick={() => onLearnMore(id)}
          >
            Learn more
          </ItemButtonNoticesLearnMore>
          {favorite ? (
            <ItemButtonNoticesDelete
              type="submit"
              onClick={() => onDeletePets(id)}
            >
              <ItemButtonNoticesDeleteSpan>Delete</ItemButtonNoticesDeleteSpan>
              <DeleteSvg />
            </ItemButtonNoticesDelete>
          ) : null}
        </ItemButtonNotices>
        </ItemNoticesWrap>
      </ItemNoticesLi>
    </>
  );
}
