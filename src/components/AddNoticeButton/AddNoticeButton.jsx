import {
  Wrap,
  Text,
  Button,
  Icon,
  Cont,
} from "components/AddNoticeButton/AddNoticeButton.styled";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export default function AddNoticeButton() {
  const handleClick = () => {
    Notify.failure("Please log in")
  }

  return (
      <Wrap>
        <Text>Add pet</Text>
        <Button onClick={handleClick}>
          <Icon />
          <Cont>Add pet</Cont>
        </Button>
      </Wrap>
  );
}
