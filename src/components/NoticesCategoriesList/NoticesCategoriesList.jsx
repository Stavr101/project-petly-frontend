import { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import {
  fetchAdsByCategory,
  getConditionPets,
  fetchOwnAds,
  fetchFavorite,
} from "api/notices";
import Error from "components/Error/Error";
import NoticeCategoryItem from "components/NoticeCategoryItem/NoticeCategoryItem";
import { List } from "components/NoticesCategoriesList/NoticesCategoriesList.slyled";

const NoticesCategoriesList = () => {
  const [pets, setPets] = useState([]);
  const [favorite, setFavorice] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { categoryName } = useParams();
  const search = searchParams.get("search") ?? "";
  let filteredPets = pets.filter((pet) => pet.categoryName === categoryName);

  const location = useLocation();

  useEffect(() => {
    setPets([]);
  }, [search, categoryName]);

  useEffect(() => {
    if (location.pathname.includes("favorite")) {
      const fetchFavoritePets = async () => {
        setLoading(true);

        try {
          const data = await fetchFavorite();
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
  }, [categoryName, location.pathname, search]);

  return (
    <>
      {/* {filteredPets && ( */}
      {pets && (
        <List>
          {/* {filteredPets.map((item) => { */}
          {pets.map((item) => {
            return <NoticeCategoryItem key={item._id} data={item} />;
          })}
        </List>
      )}
      {error && <Error />}
      {loading && <p>is loading...</p>}
    </>
  );
};

export default NoticesCategoriesList;
