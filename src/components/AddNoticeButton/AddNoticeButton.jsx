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
import ModalAddNoticelApp from 'components/ModalAddNotice/ModalAddNoticelApp';

export default function AddNoticeButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const handleClick = () => {
    
    if (!isLoggedIn) {
    Notify.failure("Please log in", {
      position: 'center-top',
      cssAnimationStyle: 'from-right',
    })}
    else {
    setIsOpen(true);
  }
  }

  return (
    <>
      <Wrap>
        <Text>Add pet</Text>
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
