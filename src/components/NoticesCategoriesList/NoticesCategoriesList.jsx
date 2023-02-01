import NoticeCategoryItem from "components/NoticeCategoryItem/NoticeCategoryItem";

export default function NoticesCategoriesList({userPets}) {
    return (
        <>
            <div>
                <ul>
                    {userPets.map(pets => (
                        <NoticeCategoryItem key={pets.id} {...pets}/>
                    ))}
                </ul>
            </div>
        </>
    );
}
