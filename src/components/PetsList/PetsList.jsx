import React from 'react';
import { deletePet } from 'redux/pets/operations';
import { getPets } from 'redux/pets/selectors';
import { useSelector, useDispatch } from 'react-redux';
import {
  PetWrapper,
  PetAvatar,
  PetList,
  PetTitleInfo,
  PetDescriptionInfo,
  DeleteBtn,
} from './PetsList.styled';

export default function PetsList() {
  const petsData = useSelector(getPets);

  const dispatch = useDispatch();

  const isPets = Boolean(petsData.length);

  const removePet = _id => {
    // toast.success('Pet removed');
    const action = deletePet(_id);
    dispatch(action);
  };

  const elements = petsData.map(
    ({ name, date, breed, avatarUrl, comment, _id }) => {
      return (
        <PetWrapper key={_id}>
          <PetAvatar src={avatarUrl} alt={name} width="150" height="150" />
          <PetList>
            <li>
              <PetDescriptionInfo>
                <PetTitleInfo>Name: </PetTitleInfo> {name}
              </PetDescriptionInfo>
            </li>
            <li>
              <PetDescriptionInfo>
                <PetTitleInfo>Date of birth: </PetTitleInfo>
                {date}
              </PetDescriptionInfo>
            </li>
            <li>
              {' '}
              <PetDescriptionInfo>
                <PetTitleInfo>Breed: </PetTitleInfo>
                {breed}
              </PetDescriptionInfo>
            </li>
            <li>
              <PetDescriptionInfo>
                <PetTitleInfo>Comments: </PetTitleInfo>
                {comment}
              </PetDescriptionInfo>
            </li>
          </PetList>

          <DeleteBtn onClick={() => removePet(_id)}></DeleteBtn>
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
