import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { fetchAdsByCategory } from "api/notices";
import Error from "components/Error/Error";
import NoticeCategoryItem from "components/NoticeCategoryItem/NoticeCategoryItem";
import testPets from "components/NoticesCategoriesList/testList.json";
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
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "40px",
  boxShadow: 24,
  p: 3,
};

const styleBackdrop = {
  background: "rgba(17, 17, 17, 0.6)",
  backdropFilter: "blur(10px)",
};

const NoticesCategoriesList = ({ query }) => {
  // const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [petId, setPetId] = useState("");

  let filteredPets = testPets;

  const openModal = (petId) => {
    setOpen(true);
    setPetId(petId);
  };

  const closeModal = () => {
    setOpen(false);
    setPetId("");
  };

  return (
    <>
      {filteredPets && (
        <Grid
          container
          columnSpacing={4}
          rowSpacing={{ mobile: 6, tablet: 7.5, desktop: 7.5 }}
          component="ul"
          alignItems="stretch"
        >
          {filteredPets.map((item) => {
            return (
              <NoticeCategoryItem
                key={item.id}
                data={item}
                // onClick={}
                onLearnMore={openModal}
              />
            );
          })}
        </Grid>
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
              <ModalNotice petId={petId} onClose={closeModal} />
            </Box>
          </Fade>
        </Modal>
      )}
    </>
  );
};

export default NoticesCategoriesList;
