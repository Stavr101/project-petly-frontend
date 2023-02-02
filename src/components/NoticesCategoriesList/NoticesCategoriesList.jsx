import { useEffect, useState } from 'react';
import Grid from "@mui/material/Grid";
import { fetchAdsByCategory } from 'api/notices';
import Error from "components/Error/Error";
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';

// const categoriesForBack = {
//   sell: 'sell',
//   'lost-found': 'lostFound',
//   'for-free': 'inGoodHands',
// };

const NoticesCategoriesList = ({ query }) => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    let filteredPets = pets;
  
    if (query !== "") {
      filteredPets = pets.filter(({ title }) => {
        return title.toLowerCase().includes(query.toLowerCase());
      });
    }
  
    useEffect(() => {
      const fetchPets = async () => {
        setLoading(true);
  
        try {
          const data = await fetchAdsByCategory();
          setPets((prevPets) => [...prevPets, ...data]);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchPets();
    }, []);

  return (
    <>
      {filteredPets && (
        <Grid
          container
          columnSpacing={4}
          rowSpacing={{ mobile: 6, tablet: 7.5, desktop: 7.5 }}
          component="ul"
          alignItems="stretch"
        >
          {filteredPets.map((item) => {
            return <NoticeCategoryItem key={item._id} data={item} />;
          })}
        </Grid>
      )}
      {error && <Error />}
      {loading && <p>is loading...</p>}
    </>
  );
};

export default NoticesCategoriesList;