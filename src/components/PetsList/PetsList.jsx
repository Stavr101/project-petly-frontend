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
//   return (
//     <>

//       <PetWrapper>
//         <PetAvatar
//           src="https://res.cloudinary.com/dzwpa63px/image/upload/v1675012545/sample.jpg"
//           alt="dog"
//           width="150"
//           height="150"
//         />
//         <DescriptionPet>
//           <ul>
//             <li>
//               <PetDescriptionInfo>
//                 <PetTitleInfo>Name: </PetTitleInfo> Cat
//               </PetDescriptionInfo>
//               {/* <p>{ name}</p> */}
//             </li>
//             <li>
//               <PetDescriptionInfo>
//                 <PetTitleInfo>Date of birth: </PetTitleInfo>
//                 23.01.2023
//               </PetDescriptionInfo>
//               {/* <p>{birthday}</p> */}
//             </li>
//             <li>
//               <PetDescriptionInfo>
//                 <PetTitleInfo>Breed: </PetTitleInfo>
//                 British
//               </PetDescriptionInfo>
//               {/* <p>{Breed}</p> */}
//             </li>
//             <li>
//               <PetDescriptionInfo>
//                 <PetTitleInfo>Comments: </PetTitleInfo>
//                 Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit
//                 amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem
//                 ipsum dolor sit amet, consectetur
//               </PetDescriptionInfo>
//               {/* <p>{Comments}</p> */}
//             </li>
//           </ul>
//           <DeleteBtn></DeleteBtn>
//         </DescriptionPet>
//       </PetWrapper>
//     </>
//   );
// }

// import { useSelector, useDispatch } from 'react-redux';
// import { getContacts } from 'redux/contacts/contacts-selectors';
// import {
//   ContactsList,
//   ContactsItem,
//   RemoveContactButton,
// } from '../PhonebookTheme.styled';
// import { IconContext } from 'react-icons';
// import { RiDeleteBack2Line } from 'react-icons/ri';
// import { toast } from 'react-toastify';
// import { getFilter } from 'redux/filter/filter-selectors';
// import { deleteContact } from 'redux/contacts/contacts-operations';

// export default function ContactList() {
//   const contacts = useSelector(getContacts);
//   const filter = useSelector(getFilter);

//   const dispatch = useDispatch();

//   const removePhoneContact = id => {
//     toast.success('Contact removed');
//     const action = deleteContact(id);
//     dispatch(action);
//   };

//   const getFilteredContacts = () => {
//     if (!filter) {
//       return contacts;
//     }
//     const normalizedFilter = filter.toLocaleLowerCase();
//     const filteredContacts = contacts.filter(({ name }) => {
//       const normalizedName = name.toLocaleLowerCase();
//       const result = normalizedName.includes(normalizedFilter);
//       return result;
//     });
//     return filteredContacts;
//   };
//   const filteredContacts = getFilteredContacts();

//   const elements = filteredContacts.map(({ name, number, id }) => {
//     return (
//       <ContactsItem key={id}>
//         &#128578; {name}: {number}
//         <RemoveContactButton onClick={() => removePhoneContact(id)}>
//           <IconContext.Provider value={{ color: '#1abc9c', size: '25px' }}>
//             <RiDeleteBack2Line />
//           </IconContext.Provider>
//         </RemoveContactButton>
//       </ContactsItem>
//     );
//   });
//   return <ContactsList>{elements}</ContactsList>;
// }
