import { useState } from "react";
import {
  Wrap,
  Text,
  Button,
  Icon,
  Cont,
} from "components/AddNoticeButton/AddNoticeButton.styled";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useAuth } from "hooks";
import ModalAddNoticelApp from "components/ModalAddNotice/ModalAddNoticelApp";
import { useAuth } from 'hooks';
import ModalAddNoticelApp from 'components/ModalAddNotice/ModalAddNoticelApp';
import { useTranslation } from 'react-i18next';

export default function AddNoticeButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const handleClick = () => {
    if (!isLoggedIn) {
      // Notify.failure("Please log in", {
      //   position: "center-top",
      //   cssAnimationStyle: "from-right",
      // });
      Notify.failure("Must be authorization", {
        timeout: 1500,
      });
    } else {
      setIsOpen(true);
    }
  };

  const { t } = useTranslation();

  return (
    <>
      <Wrap>
        <Text>{t("notices.add")}</Text>
        <Button onClick={handleClick}>
          <Icon />
          <Cont>Add pet</Cont>
        </Button>
        {isOpen ? (
          <ModalAddNoticelApp
            onOpenModal={isOpen}
            onCloseModal={() => setIsOpen(false)}
          />
        ) : null}
      </Wrap>
    </>
  );
}
