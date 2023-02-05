import { useEffect, useState } from "react";
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

// const categoriesForBack = {
//   sell: 'sell',
//   'lost-found': 'lostFound',
//   'for-free': 'inGoodHands',
// };

const NoticesCategoriesList = ({ query }) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [petId, setPetId] = useState("");

  let filteredPets = pets;

  // if (query !== "") {
  //   filteredPets = pets.filter(({ title }) => {
  //     return title.toLowerCase().includes(query.toLowerCase());
  //   });
  // }

  useEffect(() => {
    const fetchPets = async () => {
      setLoading(true);

      try {
        const data = await fetchAdsByCategory();
        setPets((prevPets) => [...prevPets, ...data]);
        console.log("data", data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
  }, []);

  //==================
  const openModal = (petId) => {
    setOpen(true);
    setPetId(petId);
  };

  const closeModal = () => {
    setOpen(false);
    setPetId("");
  };
  //===================

  return (
    <>
      {filteredPets && (
        <List>
          {filteredPets.map((item) => {
            return (
              <NoticeCategoryItem
                key={item._id}
                data={item}
                onLearnMore={openModal}
              />
            );
          })}
        </List>
      )}
      {error && <Error />}
      {loading && <p>is loading...</p>}

      {open && (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={closeModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          sx={styleBackdrop}
        >
          <Fade in={open}>
            <Box sx={style}>
              <ModalNotice
                petId={petId}
                onClose={closeModal}
                // handleDeletePet={deletePet}
                // handleChangeFavorite={changeFavorite}
              />
            </Box>
          </Fade>
        </Modal>
      )}
    </>
  );
};

export default NoticesCategoriesList;
