import { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { fetchAdsByCategory, fetchFavorite } from "api/notices";
import Error from "components/Error/Error";
import NoticeCategoryItem from "components/NoticeCategoryItem/NoticeCategoryItem";
import { List } from "components/NoticesCategoriesList/NoticesCategoriesList.slyled";

const NoticesCategoriesList = () => {
  const [pets, setPets] = useState([]);
  // const [favorite, setFavorite] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { categoryName } = useParams();
  const location = useLocation();
  const search = searchParams.get("search") ?? "";
  let filteredPets = pets.filter((pet) => pet.categoryName === categoryName);

  useEffect(() => {
    setPets([]);
  }, [search, categoryName]);

  useEffect(() => {
    if (location.pathname.includes("favorite")) {
      const fetchFavoritePets = async () => {
        setLoading(true);

        try {
          const data = await fetchFavorite(search);
          // setFavorite([...data, ...favorite]);
          setPets(() => [...data]);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchFavoritePets();
      return;
    }

    const fetchPets = async () => {
      setLoading(true);

      try {
        const data = await fetchAdsByCategory(categoryName, search);
        setPets(() => [...data]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName, location.pathname, search]);

  console.log(search)

  return (
    <>
      {/* {filteredPets && ( */}
      {pets && (
        <List>
          {/* {filteredPets.map((item) => { */}
          {pets.map((item) => {
            return (
              <NoticeCategoryItem
                key={item._id}
                data={item}
                // favorite={favorite}
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
