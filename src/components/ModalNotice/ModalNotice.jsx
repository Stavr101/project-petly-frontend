import { getPetsById } from "api/notices";
import Error from "components/Error/Error";
import { useEffect, useState } from "react";
import Loader from "shared/loader/Loader";

import { AiFillHeart } from "react-icons/ai";
import { VscClose } from "react-icons/vsc";

import {
  ModalNoticeAll,
  ModalNoticeBtnDel,
  ModalNoticeImg,
  ModalNoticeItemParametr,
  ModalNoticeLi,
  ModalNoticeTitle,
  ModalNoticeItemValue,
  ModalNoticeWrapperImg,
  ModalNoticeList,
  ModalNoticeCommentsSpan,
  ModalNoticeCommentsDiv,
  ModalNoticeButtonsList,
  ModalNoticeButtonsItem,
  ModalNoticeButton,
  ModalNoticeCategotyDiv,
  ModalNoticeBtnLink,
  HeartSvgSpan,
  ModalNoticeBtnFavorite,
  ModalNoticeBtnContact,
  ModalNoticeWrapperContent,
} from "./ModalNotice.styled";

export default function ModalNotice({
  petId,
  onClose,
  handleChangeFavorite,
  handleDeletePet,
}) {
  const [pet, setPet] = useState({});
  const [owner, setOwner] = useState({});

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPetById = async () => {
      setLoading(true);

      try {
        const data = await getPetsById(petId);
        setPet(data);
        setOwner(data.owner);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getPetById();
  }, [petId]);

  return (
    <>
      <ModalNoticeAll>
        <ModalNoticeBtnDel type="button" onClick={onClose}>
          <VscClose style={{ width: "20px", height: "20px" }} />
        </ModalNoticeBtnDel>
        <ModalNoticeWrapperContent>
          <ModalNoticeWrapperImg>
            <ModalNoticeImg src={pet.petAvatarURL} alt={pet.title} />
            <ModalNoticeCategotyDiv>{pet.categoryName}</ModalNoticeCategotyDiv>
          </ModalNoticeWrapperImg>

          <div>
            <ModalNoticeTitle>{pet.title}</ModalNoticeTitle>
            <ModalNoticeList>
              <ModalNoticeLi>
                <ModalNoticeItemParametr>Name:</ModalNoticeItemParametr>
                <ModalNoticeItemValue>{pet.breed}</ModalNoticeItemValue>
              </ModalNoticeLi>
              <ModalNoticeLi>
                <ModalNoticeItemParametr>Birthday:</ModalNoticeItemParametr>
                <ModalNoticeItemValue>01.01.1111</ModalNoticeItemValue>
              </ModalNoticeLi>
              <ModalNoticeLi>
                <ModalNoticeItemParametr>Breed:</ModalNoticeItemParametr>
                <ModalNoticeItemValue>{pet.breed}</ModalNoticeItemValue>
              </ModalNoticeLi>
              <ModalNoticeLi>
                <ModalNoticeItemParametr>Place:</ModalNoticeItemParametr>
                <ModalNoticeItemValue>{pet.location}</ModalNoticeItemValue>
              </ModalNoticeLi>
              <ModalNoticeLi>
                <ModalNoticeItemParametr>The sex:</ModalNoticeItemParametr>
                <ModalNoticeItemValue>boy/girl</ModalNoticeItemValue>
              </ModalNoticeLi>
              <ModalNoticeLi>
                <ModalNoticeItemParametr>Email:</ModalNoticeItemParametr>
                <ModalNoticeItemValue>{owner.email}</ModalNoticeItemValue>
              </ModalNoticeLi>
              <ModalNoticeLi>
                <ModalNoticeItemParametr>Phone:</ModalNoticeItemParametr>
                <ModalNoticeItemValue>{owner.phone}</ModalNoticeItemValue>
              </ModalNoticeLi>
              <ModalNoticeLi>
                {pet.categoryName === "sell" ? (
                  <>
                    <ModalNoticeItemParametr>Price:</ModalNoticeItemParametr>
                    <ModalNoticeItemValue>{pet.price} $</ModalNoticeItemValue>
                  </>
                ) : (
                  ""
                )}
              </ModalNoticeLi>
            </ModalNoticeList>
          </div>
        </ModalNoticeWrapperContent>

        <ModalNoticeCommentsDiv>
          <ModalNoticeCommentsSpan>Comments: </ModalNoticeCommentsSpan>
          {pet.comments}
        </ModalNoticeCommentsDiv>

        <ModalNoticeButtonsList>
          <ModalNoticeButtonsItem>
            <ModalNoticeBtnContact type="button">
              <ModalNoticeBtnLink href={`tel:${owner.phone}`}>
                Contact
              </ModalNoticeBtnLink>
            </ModalNoticeBtnContact>
          </ModalNoticeButtonsItem>

          <ModalNoticeButtonsItem>
            <ModalNoticeBtnFavorite
              type="button"
              onClick={handleChangeFavorite}
            >
              Add to{" "}
              <HeartSvgSpan>
                <AiFillHeart style={{ fill: "#f59256" }} />
              </HeartSvgSpan>
            </ModalNoticeBtnFavorite>
          </ModalNoticeButtonsItem>

          <ModalNoticeButtonsItem>
            <ModalNoticeButton type="button" onClick={handleDeletePet}>
              Delete
            </ModalNoticeButton>
          </ModalNoticeButtonsItem>
        </ModalNoticeButtonsList>
      </ModalNoticeAll>
      {error && <Error />}
      {loading && <Loader />}
    </>
  );
}
