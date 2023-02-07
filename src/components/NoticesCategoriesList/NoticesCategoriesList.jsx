import { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { fetchAdsByCategory, getConditionPets, fetchOwnAds } from "api/notices";
import Error from "components/Error/Error";
import NoticeCategoryItem from "components/NoticeCategoryItem/NoticeCategoryItem";
import { List } from "components/NoticesCategoriesList/NoticesCategoriesList.slyled";
import { fetchFavorite } from "api/notices";
import { getUserInfo } from "redux/users/operations";
import { useDispatch, useSelector } from "react-redux";
// import { getUserData } from "redux/users/selectors";

const NoticesCategoriesList = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const search = searchParams.get("search") ?? "";
  let filteredPets = pets.filter((pet) => pet.categoryName === categoryName);

  useEffect(() => {
    setPets([]);
  }, [search, categoryName]);

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
