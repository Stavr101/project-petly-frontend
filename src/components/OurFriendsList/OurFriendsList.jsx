// import { useState } from "react";
import { OurFriendsItem } from "../OurFriendsItem/OurFriendsItem";

const mocFriends = [
  {
    id: 1,
    name: "test name",
    time: {
      mn: "1 - 1",
      tu: "2 - 2",
      wd: "3 - 3",
      th: "4 - 4",
    },
    email: "email@gmail.com",
    brandImage:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Large_bonfire.jpg",
    phone: undefined,
  },
  {
    id: 2,
    name: "test name 2",
    time: {
      mn: "",
      tu: "",
      wd: "",
      th: "",
    },
    email: "email@gmail.com",
    brandImage:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Large_bonfire.jpg",
    phone: undefined,
  },
];

export const OurFriendsList = () => {
  //   const [friends, setFriend] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);

  const isFriends = Boolean(mocFriends.length);

  return (
    <>
      {isFriends && (
        <ul>
          {mocFriends.map((mocItem) => {
            return <OurFriendsItem key={mocItem.id} data={mocItem} />;
          })}
        </ul>
      )}
      {/* {error && <p>The list of friends is still empty...</p>} */}
      {/* {loading && <Loader />} */}
      {/* {isFriends && !loading && <LoadMoreBtn onLoadMore={loadMore} />} */}
    </>
  );
};
