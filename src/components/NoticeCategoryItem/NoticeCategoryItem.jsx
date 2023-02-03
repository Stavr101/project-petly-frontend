/* import { useDispatch } from 'react-redux';
import { deletePets } from 'api/notices'; */
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
    condition,
    onDeletePets,
    onLearnMore,
  } = data;
  
  return (
    <>
      <ItemNoticesLi>
        <ItemNoticesImgDiv>
          <ItemNoticesImg src={avatar} alt={title} />
          <ItemPositionNoticesDiv>
            <ItemPositionNoticesDivParagraf>
              {condition}
            </ItemPositionNoticesDivParagraf>
            <ItemButtonNoticesHeartSpan>
              <HeartSvg />
            </ItemButtonNoticesHeartSpan>
          </ItemPositionNoticesDiv>
        </ItemNoticesImgDiv>
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
      </ItemNoticesLi>
    </>
  );
}
