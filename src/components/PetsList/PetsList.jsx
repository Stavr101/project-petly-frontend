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

export default function PetsList({ array, setArray }) {
  const petsData = useSelector(getPets);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isPets = Boolean(petsData.length);

  const removePet = id => {
    const action = deletePet(id);
    // console.log(id);
    dispatch(action);
    const arrayNew = array.filter(item => item.id !== id);

    setArray(arrayNew);
    // dispatch(getPetInfo());
  };

  const elements = petsData.map(
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
                <PetTitleInfo>Name: </PetTitleInfo> {name}
              </PetDescriptionInfo>
            </PetItem>
            <PetItem>
              <PetDescriptionInfo>
                <PetTitleInfo>Date of birth: </PetTitleInfo>
                {date.split('-').reverse().join('.')}
              </PetDescriptionInfo>
            </PetItem>
            <PetItem>
              <PetDescriptionInfo>
                <PetTitleInfo>Breed: </PetTitleInfo>
                {breed}
              </PetDescriptionInfo>
            </PetItem>
            <PetItem>
              <PetDescriptionInfo>
                <PetTitleInfo>Comments: </PetTitleInfo>
                {comment}
              </PetDescriptionInfo>
            </PetItem>
          </PetList>
          <DeleteBtn variant="outlined" onClick={handleClickOpen}></DeleteBtn>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
          >
            <DialogTitle id="alert-dialog-title">
              {'You want remove this pet?'}
            </DialogTitle>
            <DialogActions>
              <Button
                onClick={handleClose}
                style={{
                  color: '#F59256',
                }}
              >
                NO
              </Button>
              <Button
                onSubmit={removePet(_id)}
                autoFocus
                style={{
                  color: '#F59256',
                }}
              >
                YES
              </Button>
            </DialogActions>
          </Dialog>
        </PetWrapper>
      );
    }
  );
  return isPets ? (
    <ul>{elements}</ul>
  ) : (
    <PetWrapper>
      <p>
        You don't have any animals added yet. If you want to add your pet, click
        button "Add pets"
      </p>
    </PetWrapper>
  );
}
