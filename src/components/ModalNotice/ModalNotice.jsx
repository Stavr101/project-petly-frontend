import { getPetsById } from "api/notices";
// import Error from "components/Error/Error";
import { useEffect, useState } from "react";
import Loader from "shared/loader/Loader";
import moment from "moment";
import { AiFillHeart } from "react-icons/ai";

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
  Overlay,
  ModalNoticeItemValueLink,
} from "./ModalNotice.styled";
import { createPortal } from "react-dom";
import { useAuth } from "hooks";

const modalRoot = document.querySelector("#modal-root");

export default function ModalNotice({
  petId,
  setShowModal,
  handleChangeFavorite,
  handleDeletePet,
  isFavorite,
}) {
  const [pet, setPet] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { user } = useAuth();

  console.log("pet", pet);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.code === "Escape") setShowModal(false);
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = null;
      document.removeEventListener("keydown", handleKeyDown);
    };

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const getPetById = async () => {
      setLoading(true);

      try {
        const data = await getPetsById(petId);
        setPet(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getPetById();
  }, [petId]);

  const onBackdropClick = (e) => {
    if (e.currentTarget === e.target) setShowModal(false);
  };

  const onBtnCloseClick = () => {
    setShowModal(false);
  };

  const convertBirthdate = (birthdate) => {
    return moment(birthdate).format("DD.MM.YYYY");
  };

  return createPortal(
    <Overlay onClick={onBackdropClick}>
      <ModalNoticeAll>
        {pet ? (
          <>
            <ModalNoticeBtnDel
              type="button"
              onClick={onBtnCloseClick}
            ></ModalNoticeBtnDel>
            <ModalNoticeWrapperContent>
              <ModalNoticeWrapperImg>
                {pet.petAvatarURL.secure_url ? (
                  <ModalNoticeImg
                    src={pet.petAvatarURL.secure_url}
                    alt={pet.title}
                  />
                ) : (
                  <ModalNoticeImg
                    src={"https://i.ibb.co/RQ61YYb/1.jpg"}
                    alt={"No image available"}
                  />
                )}

                <ModalNoticeCategotyDiv>
                  {pet.categoryName}
                </ModalNoticeCategotyDiv>
              </ModalNoticeWrapperImg>

              <div>
                <ModalNoticeTitle>{pet.title}</ModalNoticeTitle>
                <ModalNoticeList>
                  <ModalNoticeLi>
                    <ModalNoticeItemParametr>Name:</ModalNoticeItemParametr>
                    <ModalNoticeItemValue>{pet.name}</ModalNoticeItemValue>
                  </ModalNoticeLi>
                  <ModalNoticeLi>
                    <ModalNoticeItemParametr>Birthday:</ModalNoticeItemParametr>
                    <ModalNoticeItemValue>
                      {pet.birthdate ? convertBirthdate(pet.birthdate) : "-"}
                    </ModalNoticeItemValue>
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
                    <ModalNoticeItemValue>{pet.sex}</ModalNoticeItemValue>
                  </ModalNoticeLi>

                  <ModalNoticeLi>
                    <ModalNoticeItemParametr>Email:</ModalNoticeItemParametr>
                    <ModalNoticeItemValueLink
                      href={`mailto:${pet.owner ? pet.owner.email : ""}`}
                    >
                      {pet.owner ? pet.owner.email : ""}
                    </ModalNoticeItemValueLink>
                  </ModalNoticeLi>

                  <ModalNoticeLi>
                    <ModalNoticeItemParametr>Phone:</ModalNoticeItemParametr>
                    <ModalNoticeItemValueLink
                      href={`tel:${pet.owner ? pet.owner?.phone : ""}`}
                    >
                      {pet.owner ? pet.owner?.phone : ""}
                    </ModalNoticeItemValueLink>
                  </ModalNoticeLi>

                  <ModalNoticeLi>
                    {pet.categoryName === "sell" ? (
                      <>
                        <ModalNoticeItemParametr>
                          Price:
                        </ModalNoticeItemParametr>
                        <ModalNoticeItemValue>
                          {pet.price} UAH
                        </ModalNoticeItemValue>
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
                  <ModalNoticeBtnLink
                    href={pet.owner ? `tel:${pet.owner.phone}` : "#"}
                  >
                    Contact
                  </ModalNoticeBtnLink>
                </ModalNoticeBtnContact>
              </ModalNoticeButtonsItem>
              <ModalNoticeButtonsItem>
                <ModalNoticeBtnFavorite
                  type="button"
                  onClick={() => handleChangeFavorite(petId)}
                >
                  {!isFavorite ? "Add to " : "Remove from "}
                  <HeartSvgSpan>
                    <AiFillHeart style={{ fill: "#f59256" }} />
                  </HeartSvgSpan>
                </ModalNoticeBtnFavorite>
              </ModalNoticeButtonsItem>

              <ModalNoticeButtonsItem>
                {pet.owner && pet.owner._id === user._id ? (
                  <ModalNoticeButton
                    type="button"
                    onClick={() => handleDeletePet(petId)}
                  >
                    Delete
                  </ModalNoticeButton>
                ) : (
                  ""
                )}
              </ModalNoticeButtonsItem>
            </ModalNoticeButtonsList>
          </>
        ) : (
          loading && <Loader />
        )}
      </ModalNoticeAll>
    </Overlay>,
    modalRoot
  );
}
