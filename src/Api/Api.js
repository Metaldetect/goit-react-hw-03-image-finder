import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const URL_KEY = '38647531-e08c59cfd663d065d133cb71d';

const getProducts = async searchTerm => {
  const url = `${BASE_URL}?key=${URL_KEY}&q=${encodeURIComponent(
    searchTerm
  )}&page=1&image_type=photo&orientation=horizontal&per_page=12`;

  try {
    const response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error('Request failed.');
    }

    return response.data.hits;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export default getProducts;
