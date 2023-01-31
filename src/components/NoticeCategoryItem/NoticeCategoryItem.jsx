

export default function NoticeCategoryItem({id,avatar,favorite,title,breed,location,age,condition,onDeletePets,onLearnMore}) {
return (
    <>
    <li>
        <div>
            <img
                src={avatar}
                alt={title}
            />
            <p>{condition}</p>
            <span>icon</span>
        </div>
        <h2>{title}</h2>
        <div>
            <p>Breed:<span>{breed}</span></p>
            <p>Place:<span>{location}</span></p>
            <p>Age:<span>{age}</span></p>
        </div>
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
