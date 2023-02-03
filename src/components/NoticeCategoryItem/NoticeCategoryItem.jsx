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

export default function NoticeCategoryItem({
  id,
  name,
  petAvatar,
  favorite = false,
  title,
  price,
  breed,
  location,
  birthdate,
  categoryName,
  onDeletePets,
  onLearnMore,
}) {
  return (
    <>
      <ItemNoticesLi>
        <ItemNoticesImgDiv>
          <ItemNoticesImg src={petAvatar} alt={name} />
          <ItemPositionNoticesDiv>
            <ItemPositionNoticesDivParagraf>
              {categoryName}
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
              Age:<ItemNoticesSpan>{birthdate}</ItemNoticesSpan>
            </ItemNoticesListP>
          </ItemNoticesListLi>
          {categoryName === "sell" ? (
            <ItemNoticesListLi>
              <ItemNoticesListP>
                Price:<ItemNoticesSpan>{price}$</ItemNoticesSpan>
              </ItemNoticesListP>
            </ItemNoticesListLi>
          ) : null}
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
