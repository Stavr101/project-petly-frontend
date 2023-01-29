import { OurFriendsItem } from "../OurFriendsItem/OurFriendsItem";
import { FriendsList } from "./OurFriendsList.styled";
import { useEffect, useState } from "react";
import { getAllFriends } from "api/friends";
import Loader from "shared/loader/Loader";

export const OurFriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isFriends = Boolean(friends.length);

  useEffect(() => {
    const fetchFriends = async () => {
      setLoading(true);

      try {
        const data = await getAllFriends();
        setFriends((prevFriends) => [...prevFriends, ...data]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFriends();
  }, []);

  return (
    <>
      {isFriends && (
        <FriendsList>
          {friends.map((friend) => {
            return <OurFriendsItem key={friend._id} data={friend} />;
          })}
        </FriendsList>
      )}
      {error && <p>The list of friends is still empty...</p>}
      {loading && <Loader />}
    </>
  );
};
