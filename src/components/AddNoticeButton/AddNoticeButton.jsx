import { useState } from 'react';
import {
  Wrap,
  Text,
  Button,
  Icon,
  Cont,
} from "components/AddNoticeButton/AddNoticeButton.styled";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useAuth } from 'hooks';
import ModalAddNoticeApp from "components/ModalAddNotice/ModalAddNoticelApp"

export default function AddNoticeButton() {
  const [showModal, setShowModal] = useState(false);
  const { isLoggedIn } = useAuth();

  const handleClick = () => {
    if (!isLoggedIn) {
    Notify.failure("Please log in", {
      position: 'center-top',
      cssAnimationStyle: 'from-right',
    })}
    setShowModal(true);
  }

  return (
    <>
      <Wrap>
        <Text>Add pet</Text>
        <Button onClick={handleClick}>
          <Icon />
          <Cont>Add pet</Cont>
        </Button>
      </Wrap>
      {showModal && (
        <ModalAddNoticeApp
          setShowModal={setShowModal}
        />
      )}
    </>
  );
}
