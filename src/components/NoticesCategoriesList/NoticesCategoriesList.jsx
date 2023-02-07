import { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

import { fetchAdsByCategory, fetchFavorite, fetchOwnAds } from "api/notices";

import Error from "components/Error/Error";
import NoticeCategoryItem from "components/NoticeCategoryItem/NoticeCategoryItem";
import { List } from "components/NoticesCategoriesList/NoticesCategoriesList.slyled";
import { getUserInfo } from "redux/users/operations";
import { useDispatch } from "react-redux";
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
  // let filteredPets = pets.filter((pet) => pet.categoryName === categoryName);

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

    if (location.pathname.includes("own")) {
      const fetchOwnPets = async () => {
        setLoading(true);

        try {
          const data = await fetchOwnAds(search);
          setPets(() => [...data]);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchOwnPets();
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

  console.log(search);

  return (
    <>
      {pets && (
        <List>
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
