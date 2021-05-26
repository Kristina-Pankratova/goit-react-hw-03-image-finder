import axios from 'axios';

const KEY = '20900619-dafda001e6b1a08a6ce834e06';
const BASE_URL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&';

const fetchHits = ({ searchQuery = '', currentPage = 1 }) => {
  return axios
    .get(`${BASE_URL}&key=${KEY}&q=${searchQuery}&page=${currentPage}`)
    .then(response => response.data.hits);
};

export default { fetchHits };
