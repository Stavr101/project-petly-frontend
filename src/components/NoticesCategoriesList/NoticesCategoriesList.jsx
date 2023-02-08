import { useEffect, useState, useRef, useCallback } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

import { fetchAdsByCategory, fetchFavorite, fetchOwnAds } from "api/notices";

// import Error from "components/Error/Error";
import { Typography, Box, Link } from "@mui/material";
import NoticeCategoryItem from "components/NoticeCategoryItem/NoticeCategoryItem";
import { List } from "components/NoticesCategoriesList/NoticesCategoriesList.slyled";
import { getUserInfo } from "redux/users/operations";
import { useDispatch } from "react-redux";
// import Loader from "shared/loader/Loader";
// import { getUserData } from "redux/users/selectors";

const NoticesCategoriesList = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const search = searchParams.get("search") ?? "";
  // let filteredPets = pets.filter((pet) => pet.categoryName === categoryName);

  useEffect(() => {
    setPets([]);
    setPageNumber(1);
  }, [search, categoryName]);

  // console.log("categoryName", categoryName);

  // useEffect(() => {
  //   dispatch(getUserInfo());
  // }, [dispatch]);

  useEffect(() => {
    if (location.pathname.includes("favorite")) {
      const fetchFavoritePets = async () => {
        setLoading(true);

        try {
          const data = await fetchFavorite(search);
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
  }, [location.pathname, search]);

  useEffect(() => {
    const fetchPets = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchAdsByCategory(categoryName, search, pageNumber);
        setPets((prevPet) => {
          return [...prevPet, ...data];
        });
        setHasMore(data.length > 0);
        setLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName, search, pageNumber]);

  // console.log(loading, hasMore, error, pageNumber, pets);
  const observer = useRef();

  const lastNewsElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <>
      {/* {!pets.length && (
        <Typography variant="h5" component="p" textAlign={"center"}>
          Sorry, there are no ads
        </Typography>
      )} */}
      {Boolean(pets.length) && (
        <List id="top">
          {pets.map((item, index) => {
            if (pets.length === index + 1) {
              return (
                <NoticeCategoryItem
                  key={item._id}
                  data={item}
                  array={pets}
                  setArray={setPets}
                  lastNewsElementRef={lastNewsElementRef}
                />
              );
            } else {
              return <NoticeCategoryItem key={item._id} data={item} />;
            }
          })}
        </List>
      )}
      {!hasMore && Boolean(pets.length) && (
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ mb: 1 }}>End of content...</Typography>
          <Link href="#top">back to top?</Link>
        </Box>
      )}
      {/* {error && <Error />}
      {loading && <Loader />} */}
    </>
  );
};

export default NoticesCategoriesList;
