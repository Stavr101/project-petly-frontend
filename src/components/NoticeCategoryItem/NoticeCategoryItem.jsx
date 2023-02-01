/* import { useDispatch } from 'react-redux';
import { deletePets } from 'api/notices'; */

import { 
    ItemNoticesImgDiv,
    ItemNoticesTitle,
    ItemNoticesUlList,
    ItemNoticesSpan,
    ItemNoticesLi,
    ItemButtonNotices,
    ItemButtonNoticesLearnMore,
    ItemButtonNoticesDelete,
    ItemNoticesListLi} from "./NoticeCategoryItem.styled"

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
                <p>Breed:<ItemNoticesSpan>{breed}</ItemNoticesSpan></p>
            </ItemNoticesListLi>
            <ItemNoticesListLi>
                <p>Place:<ItemNoticesSpan>{location}</ItemNoticesSpan></p>
            </ItemNoticesListLi>
            <ItemNoticesListLi>
                <p>Age:<ItemNoticesSpan>{age}</ItemNoticesSpan></p>
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
                Delete
                </ItemButtonNoticesDelete> : null}
        </ItemButtonNotices>
    </ItemNoticesLi>
    </>
  )
}
