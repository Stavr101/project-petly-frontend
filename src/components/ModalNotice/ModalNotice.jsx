import { getPetsById } from "api/notices";
import { useEffect, useState } from "react";
import testPets from "../../components/NoticesCategoriesList/testList.json";

export default function ModalNotice({ petId, onClose }) {
  // const [pet, setPet] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const pet = testPets.find((item) => item.id === petId);

  // useEffect(() => {
  //   const getPetById = async () => {
  //     setLoading(true);

  //     try {
  //       const data = await getPetsById(petId);
  //       setPet(data);
  //       console.log("data!!!!", data);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getPetById();
  // }, [petId]);

  return (
    <div onClose={onClose}>
      <div>
        {/* <div>
          <img src={pet.avatar} />
        </div> */}
        <div>
          <h3>{pet.title}</h3>
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{pet.breed}</td>
              </tr>
              <tr>
                <td>Birthday:</td>
                <td>{pet.age}</td>
              </tr>
              <tr>
                <td>Breed:</td>
                <td>{pet.breed}</td>
              </tr>
              <tr>
                <td>Place:</td>
                <td>{pet.location}</td>
              </tr>
              {/* <tr>
                <td>The sex:</td>
                <td>{location}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{location}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{location}</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iste
        ullam nemo quia fuga cum aspernatur. Quod itaque qui natus mollitia vel
        optio. Ad sapiente dicta vero. Laboriosam, blanditiis quae!
      </div>

      <div>
        <button type="button">Add to</button>
        <button type="button">Contact</button>
        <button type="button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}
