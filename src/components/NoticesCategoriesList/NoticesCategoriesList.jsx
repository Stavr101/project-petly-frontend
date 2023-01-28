import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem'

export default function NoticesCategoriesList(userPets) {
  const filterPets = userPets.filter(pets => pets.condition === condition)
  return (
    <ul key={filterPets.id}>
      {filterPets.map(({id,avatar,favorite,title,breed,location,age,condition}) => (
        <NoticeCategoryItem
        key={id}
        avatar = {avatar}
        favorite = {favorite}
        title = {title}
        breed = {breed}
        location = {location}
        age = {age}
        condition = {condition}
        />
      ))}
    </ul>  
  )
}
