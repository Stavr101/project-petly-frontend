import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchAdsByCategory } from "api/notices";
import Error from "components/Error/Error";
import NoticeCategoryItem from "components/NoticeCategoryItem/NoticeCategoryItem";
import { List } from "components/NoticesCategoriesList/NoticesCategoriesList.slyled";

// const categoriesForBack = {
//   sell: 'sell',
//   'lost-found': 'lostFound',
//   'for-free': 'inGoodHands',
// };

const NoticesCategoriesList = () => {
  const [pets, setPets] = useState([]);
  const [favorite, setFavorice] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { categoryName } = useParams();
  const search = searchParams.get("search") ?? "";
  let filteredPets = pets.filter((pet) => pet.categoryName === categoryName);

  // if (query !== "") {
  //   filteredPets = pets.filter(({ title }) => {
  //     return title.toLowerCase().includes(query.toLowerCase());
  //   });
  // }
  useEffect(() => {
    setPets([]);
  }, [search, categoryName]);

  console.log('search', search)

  useEffect(() => {
    const fetchPets = async () => {
      setLoading(true);

      try {
        const data = await fetchAdsByCategory(categoryName, search);
        console.log(data);
        setPets((prevPets) => [...prevPets, ...data]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
  }, [categoryName, search]);

  return (
    <>
      {filteredPets && (
        <List>
          {filteredPets.map((item) => {
            return (
              <NoticeCategoryItem
                key={item._id}
                data={item}
                // onLearnMore={openModal}
              />
            );
          })}
        </List>
      )}
      {error && <Error />}
      {loading && <p>is loading...</p>}
    </>
  );
};

export default NoticesCategoriesList;
