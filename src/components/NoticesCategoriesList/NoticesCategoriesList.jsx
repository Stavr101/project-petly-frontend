import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchAdsByCategory } from "api/notices";
import Error from "components/Error/Error";
import NoticeCategoryItem from "components/NoticeCategoryItem/NoticeCategoryItem";
import { List } from "components/NoticesCategoriesList/NoticesCategoriesList.slyled";
// =============
import ModalNotice from "components/ModalNotice/ModalNotice";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: 280,
    md: 704,
  },
  height: {
    md: 548,
  },
  bgcolor: "background.paper",
  borderRadius: "20px",
};

const styleBackdrop = {
  background: "rgba(17, 17, 17, 0.3)",
  backdropFilter: "blur(10px)",
};
//=================

const NoticesCategoriesList = (searchQuery) => {
  const [pets, setPets] = useState([]);
  const [favorite, setFavorice] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { categoryName } = useParams();
  let filteredPets = pets.filter((pet) => pet.categoryName === categoryName);

  if (searchQuery !== "") {
    filteredPets = pets.filter(({ title }) => {
      return title.toString().toLowerCase();
    });
  }

  useEffect(() => {
    const fetchPets = async () => {
      setLoading(true);

      try {
        const data = await fetchAdsByCategory(categoryName);
        console.log(data)
        setPets(() => [...data]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
  }, [categoryName]);

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
