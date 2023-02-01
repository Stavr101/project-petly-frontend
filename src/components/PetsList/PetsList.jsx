import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { getPetInfo } from 'redux/user/operations';
import {
  PetWrapper,
  PetAvatar,
  DescriptionPet,
  PetTitleInfo,
  PetDescriptionInfo,
  DeleteBtn,
} from './PetsList.styled';
axios.defaults.baseURL = 'https://project-petly-backend.onrender.com/api/v1/';

const getPets = async () => {
  const res = await axios.get('user/pets');
  return res.data;
};

export default function PetsList() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isPets = Boolean(pets.length);

  useEffect(() => {
    const fetchPets = async () => {
      setLoading(true);

      try {
        const data = await getPets();
        setPets(prevFriends => [...prevFriends, ...data]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
  }, []);

  const elements = pets.map(
    ({ name, date, breed, avatarUrl, comment, _id }) => {
      return (
        <PetWrapper key={_id}>
          <PetAvatar src={avatarUrl} alt={name} width="150" height="150" />
          <DescriptionPet>
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
            <DeleteBtn></DeleteBtn>
          </DescriptionPet>
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
