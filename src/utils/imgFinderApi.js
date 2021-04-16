import axios from 'axios';

const KEY = '20900619-dafda001e6b1a08a6ce834e06';

const fetchHits = ({ searchQuery = '', currentPage = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${KEY}&q=${searchQuery}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default { fetchHits };
