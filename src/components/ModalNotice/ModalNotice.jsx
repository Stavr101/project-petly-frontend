import { getPetsById } from "api/notices";
import { useEffect, useState } from "react";
import Loader from "shared/loader/Loader";
import moment from "moment";
import { AiFillHeart } from "react-icons/ai";
import { useTranslation } from "react-i18next";

import Overlay, {
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
  ModalNoticeBtnContact,
  ModalNoticeWrapperContent,
  ModalNoticeItemValueLink,
} from "./ModalNotice.styled";
import { createPortal } from "react-dom";
import { useAuth } from "hooks";
import NoticesDeleteSvg from "components/NoticeCategoryItem/NoticesDeleteSvg";

const modalRoot = document.querySelector("#modal-root");

export default function ModalNotice({
  petId,
  setShowModal,
  handleChangeFavorite,
  handleDeletePet,
  isFavorite,
}) {
  const { user } = useAuth();

  const [pet, setPet] = useState(undefined);
  const [loading, setLoading] = useState(false);

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
        console.log(error);
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

  const { t } = useTranslation();

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
                    <ModalNoticeItemParametr>
                      {t("notices.name")}
                    </ModalNoticeItemParametr>
                    <ModalNoticeItemValue>{pet.name}</ModalNoticeItemValue>
                  </ModalNoticeLi>
                  <ModalNoticeLi>
                    <ModalNoticeItemParametr>
                      {t("notices.birthday")}
                    </ModalNoticeItemParametr>
                    <ModalNoticeItemValue>
                      {pet.birthdate ? convertBirthdate(pet.birthdate) : "-"}
                    </ModalNoticeItemValue>
                  </ModalNoticeLi>
                  <ModalNoticeLi>
                    <ModalNoticeItemParametr>
                      {t("notices.breed")}
                    </ModalNoticeItemParametr>
                    <ModalNoticeItemValue>{pet.breed}</ModalNoticeItemValue>
                  </ModalNoticeLi>
                  <ModalNoticeLi>
                    <ModalNoticeItemParametr>
                      {t("notices.place")}
                    </ModalNoticeItemParametr>
                    <ModalNoticeItemValue>{pet.location}</ModalNoticeItemValue>
                  </ModalNoticeLi>
                  <ModalNoticeLi>
                    <ModalNoticeItemParametr>
                      {t("notices.sex")}
                    </ModalNoticeItemParametr>
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
                    <ModalNoticeItemParametr>
                      {t("notices.phone")}
                    </ModalNoticeItemParametr>
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
                          {t("notices.price")}
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
              <ModalNoticeCommentsSpan>
                {t("notices.comm")}
              </ModalNoticeCommentsSpan>
              {pet.comments}
            </ModalNoticeCommentsDiv>

            <ModalNoticeButtonsList>
              <ModalNoticeButtonsItem>
                <ModalNoticeBtnContact type="button">
                  <ModalNoticeBtnLink
                    href={pet.owner ? `tel:${pet.owner.phone}` : "#"}
                  >
                    {t("notices.contact")}
                  </ModalNoticeBtnLink>
                </ModalNoticeBtnContact>
              </ModalNoticeButtonsItem>
              <ModalNoticeButtonsItem>
                <ModalNoticeButton
                  type="button"
                  onClick={() => handleChangeFavorite(petId)}
                >
                  {!isFavorite ? t("notices.addto") : t("notices.remove")}
                  <HeartSvgSpan>
                    <AiFillHeart style={{ fill: "#f59256" }} />
                  </HeartSvgSpan>
                </ModalNoticeButton>
              </ModalNoticeButtonsItem>

              <ModalNoticeButtonsItem>
                {pet.owner && pet.owner._id === user._id ? (
                  <ModalNoticeButton
                    type="button"
                    onClick={() => handleDeletePet(petId)}
                  >
                    {t("notices.del")}
                    <HeartSvgSpan>
                      <NoticesDeleteSvg />
                    </HeartSvgSpan>
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
