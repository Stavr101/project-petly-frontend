import { useEffect, useState } from 'react';
import { fetchAdsByCategory } from 'api/notices';
import Error from "components/Error/Error";
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { List } from 'components/NoticesCategoriesList/NoticesCategoriesList.slyled'

// const categoriesForBack = {
//   sell: 'sell',
//   'lost-found': 'lostFound',
//   'for-free': 'inGoodHands',
// };

const NoticesCategoriesList = ({ query }) => {
    const [pets, setPets] = useState([]);
    const [error, setError] = useState(null);
    let filteredPets = pets;
  
    // if (query !== "") {
    //   filteredPets = pets.filter(({ title }) => {
    //     return title.toLowerCase().includes(query.toLowerCase());
    //   });
    // }
  
    useEffect(() => {
      const fetchPets = async () => {
  
        try {
          const data = await fetchAdsByCategory();
          setPets((prevPets) => [...prevPets, ...data]);
        } catch (error) {
          setError(error);
        }
      };
      fetchPets();
    }, []);

  return (
    <>
      {filteredPets && (
        <List>
          {filteredPets.map((item) => {
            return <NoticeCategoryItem key={item._id} data={item} />;
          })}
        </List>
      )}
      {error && <Error />}
    </>
  );
};

export default NoticesCategoriesList;