import { 
    ItemNoticesImgDiv,
    ItemNoticesTitle,
    ItemNoticesSpan,
    ItemNoticesUl} from "./NoticeCategoryItem.styled"

export default function NoticeCategoryItem({id,avatar,favorite,title,breed,location,age,condition,onDeletePets,onLearnMore}) {
return (
    <>
    <li>
        <ItemNoticesImgDiv>
            <img
                width={280}
                src={avatar}
                alt={title}
            />
            <div>
                <p>{condition}</p>
                <span>icon</span>
            </div>
        </ItemNoticesImgDiv>
        <ItemNoticesTitle>{title}</ItemNoticesTitle>
        <ItemNoticesUl>
            <li>
                <p>Breed:<ItemNoticesSpan>{breed}</ItemNoticesSpan></p>
            </li>
            <li>
                <p>Place:<ItemNoticesSpan>{location}</ItemNoticesSpan></p>
            </li>
            <li>
                <p>Age:<ItemNoticesSpan>{age}</ItemNoticesSpan></p>
            </li>
        </ItemNoticesUl>
        <button
        type="submit"
        onClick={() => onLearnMore(id)}>
            Learn more
        </button>
        {favorite ? <button
          type="submit"
          onClick={() => onDeletePets(id)}>
          Delete
        </button> : null}
    </li>
    </>
)
}
