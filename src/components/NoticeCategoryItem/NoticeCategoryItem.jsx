import { useState } from "react";
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
    avatar,
    favorite,
    title,
    breed,
    location,
    age,
    categoryName,
    onDeletePets,
    onLearnMore,
  } = data;

    const [isLoading, setLoading] = useState(true);
  
    const handleLoad = async () => {
      setLoading(false);
    };

  return (
    <>
      <ItemNoticesLi>
        <ItemNoticesImgDiv>
          {!isLoading ? (
            <ItemNoticesImg src={avatar} alt={title} onLoad={handleLoad}/>
          ) : (
            <ItemNoticesImg
              src={"https://i.ibb.co/RQ61YYb/1.jpg"}
              alt={"No image available"}
            />
          )}
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
