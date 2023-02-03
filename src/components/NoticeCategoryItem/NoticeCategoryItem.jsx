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

export default function NoticeCategoryItem({id,
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
    onLearnMore}) {

    return (
    <>
      <ItemNoticesLi>
        <ItemNoticesImgDiv>

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
