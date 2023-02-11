import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPetInfo, deletePet } from 'redux/pets/operations';
import { getPets } from 'redux/pets/selectors';
import {
  PetWrapper,
  PetAvatar,
  PetList,
  PetItem,
  PetTitleInfo,
  PetDescriptionInfo,
  DeleteBtn,
} from './PetsList.styled';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useTranslation } from 'react-i18next';

export default function PetsList({ dataPets }) {
  // const petsData = useSelector(getPets);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isPets = Boolean(dataPets.length);

  const removePet = _id => {
    const action = deletePet(_id);
    dispatch(action);

    // dispatch(getPetInfo());
  };

  const { t } = useTranslation();

  const elements = dataPets.map(
    ({ name, date, breed, avatarUrl, comment, _id }) => {
      return (
        <PetWrapper key={_id}>
          <PetAvatar
            src={avatarUrl.secure_url}
            alt={name}
            width="150"
            height="150"
          />
          <PetList>
            <PetItem>
              <PetDescriptionInfo>
                <PetTitleInfo>{t("user.petname")} </PetTitleInfo> {name}
              </PetDescriptionInfo>
            </PetItem>
            <PetItem>
              <PetDescriptionInfo>
                <PetTitleInfo>{t("user.petbirth")} </PetTitleInfo>
                {date.split('-').reverse().join('.')}
              </PetDescriptionInfo>
            </PetItem>
            <PetItem>
              <PetDescriptionInfo>
                <PetTitleInfo>{t("user.petbreed")} </PetTitleInfo>
                {breed}
              </PetDescriptionInfo>
            </PetItem>
            <PetItem>
              <PetDescriptionInfo>
                <PetTitleInfo>{t("user.petcomm")} </PetTitleInfo>
                {comment}
              </PetDescriptionInfo>
            </PetItem>
          </PetList>
          <DeleteBtn variant="outlined" onClick={handleClickOpen}></DeleteBtn>
          <Dialog
            open={open}
            // onClose={handleClose}
            aria-labelledby="alert-dialog-title"
          >
            <DialogTitle id="alert-dialog-title">
              {t("user.removeconf")}
            </DialogTitle>
            <DialogActions>
              <Button
                onClick={handleClose}
                style={{
                  color: '#F59256',
                }}
              >
                {t("user.no")}
              </Button>
              <Button
                onClick={() => removePet(_id)}
                autoFocus
                style={{
                  color: '#F59256',
                }}
              >
                {t("user.yes")}
              </Button>
            </DialogActions>
          </Dialog>
        </PetWrapper>
      );
    }
  );
  // return isPets ? (
  //   <ul>{elements}</ul>
  // ) : (
  //   <PetWrapper>
  //     <p>
  //       You don't have any animals added yet. If you want to add your pet, click
  //       button "Add pets"
  //     </p>
  //   </PetWrapper>
  // );
  return <ul>{elements}</ul>;
}
