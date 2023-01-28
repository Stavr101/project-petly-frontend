import React from 'react'

export default function NoticeCategoryItem({avatar,favorite,title,breed,location,age,condition,onDeletePets}) {
  return (
    <li>
      <div>
        <img src={avatar} alt="Pets" width="100" />
        <p>{condition}</p>
        <span className={ favorite ? css.onFavorite : css.offFavorite}></span>
      </div>
    <h3>{title}</h3>
      <p>Breed:{breed}</p> 
      <p>Location:{location}</p>
      <p>Age:{age}</p> 
    <button>Learn more</button>
    {favorite? <button
      type='submit'
      onClick={onDeletePets(id)}>
      Delete
    </button> : null}
    </li>
  )
}
