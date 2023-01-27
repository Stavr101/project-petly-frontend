import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

export const OurFriendsItem = ({ data }) => {
  const { id, name, brandImage, time, ...rest } = data;
  const dayOfTheWeek = new Date().getDay() - 1;

  return (
    <li>
      <h3>{name}</h3>
      <div>
        <img src={brandImage} alt={name} loading="lazy" width={140}></img>
        <ul>
          <li>
            <p>Time:</p>
            <p>
              {Object.values(time)[dayOfTheWeek]
                ? Object.values(time)[dayOfTheWeek]
                : "_ _ _ _ _ _ _"}
            </p>
          </li>
          {Object.entries(rest).map(([key, value]) => (
            <li key={key}>
              <p>{capitalizeFirstLetter(key)}</p>
              <p>{value ?? "_ _ _ _ _ _ _"}</p>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};
