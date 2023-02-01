/* import { useDispatch } from 'react-redux';
import { deletePets } from 'api/notices'; */
import DeleteSvg from "./NoticesDeleteSvg"

import { 
    ItemNoticesImgDiv,
    ItemNoticesTitle,
    ItemNoticesUlList,
    ItemNoticesSpan,
    ItemNoticesLi,
    ItemButtonNotices,
    ItemButtonNoticesLearnMore,
    ItemButtonNoticesDelete,
    ItemNoticesListLi,
    ItemNoticesListP,
    ItemButtonNoticesDeleteSpan} from "./NoticeCategoryItem.styled"

export default function NoticeCategoryItem({id,avatar,favorite,title,breed,location,age,condition,onDeletePets,onLearnMore}) {
  /*   const dispatch = useDispatch();
    const onDeletePets = (id) => dispatch(deletePets(id)); */

    return (
    <>
    <ItemNoticesLi>
        <ItemNoticesImgDiv>
            <img
                width={280}
                height={288}
                src={avatar}
                alt={title}
            />
            <div>
                <p>{condition}</p>
                <span>icon</span>
            </div>
        </ItemNoticesImgDiv>
        <ItemNoticesTitle>{title}</ItemNoticesTitle>
        <ItemNoticesUlList>
            <ItemNoticesListLi>
                <ItemNoticesListP>Breed:<ItemNoticesSpan>{breed}</ItemNoticesSpan></ItemNoticesListP>
            </ItemNoticesListLi>
            <ItemNoticesListLi>
                <ItemNoticesListP>Place:<ItemNoticesSpan>{location}</ItemNoticesSpan></ItemNoticesListP>
            </ItemNoticesListLi>
            <ItemNoticesListLi>
                <ItemNoticesListP>Age:<ItemNoticesSpan>{age}</ItemNoticesSpan></ItemNoticesListP>
            </ItemNoticesListLi>
        </ItemNoticesUlList>
        <ItemButtonNotices>
            <ItemButtonNoticesLearnMore
                type="submit"
                onClick={() => onLearnMore(id)}>
                Learn more
            </ItemButtonNoticesLearnMore>
            {favorite ? <ItemButtonNoticesDelete
                type="submit"
                onClick={() => onDeletePets(id)}>
                <ItemButtonNoticesDeleteSpan>Delete</ItemButtonNoticesDeleteSpan>
                <DeleteSvg/>
                </ItemButtonNoticesDelete> : null}
        </ItemButtonNotices>
    </ItemNoticesLi>
    </>
  )
}
