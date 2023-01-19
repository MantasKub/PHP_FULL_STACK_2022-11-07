import './App.css';
import { useState, useEffect } from 'react';

const App = () => {

  const API_URL = 'https://www.omdbapi.com/?apikey=e02b35c8&page=';
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState();

  useEffect(() => {

    if (!search) return;

    setLoading(true);
    setMovies([]);

    fetch(API_URL + page + '&s=' + search)
      .then(resp => resp.json())
      .then(resp => {
        setLoading(false)

        if (resp.Response === 'False') return;

        setMovies(resp.Search)
        setTotal(Math.ceil(resp.totalResults / 10));
      });
  }, [page, search]);

  const next = () => {
    if (page > 1)
      setPage(page + 1);
  }

  const previous = () => {
    if (page < total)
      setPage(page - 1);
  }


  return (
    <>
      {/* {loading ? <div className="loading">Loading...</div> : <div></div>} */}
      {loading && <div className="loading">Loading...</div>}
      <div className="container">
        <h1 className="mb-3">Movies data base</h1>

        <input type="text" className="form-control" onChange={(e) => setSearch(e.target.value)} />

        {movies.length > 0 &&


          <>
            <div className="row movies">
              {movies.map(movies =>
                <div className="movie col-4" key={movies.imdbID}>
                  <img src={movies.Poster} alt={movies.Title} />
                  <h3>{movies.Title}</h3>
                  <div className="d-flex justify-content-between info ">
                    <span>{movies.Year}</span>
                    <span>{movies.Type}</span>
                  </div>
                </div>
              )}
            </div>

            <ul className="pagination justify-content-center">
              <li className={page == 1 ? 'page-item disabled' : 'page-item'}>
                <a
                  href="#"
                  className="page-link"
                  onClick={previous}
                >Previous</a>
              </li>
              <li className="page-item">
                <span>{page}</span>
              </li>
              <li className="page-item">
                <a
                  href="#"
                  className="page-link"
                  onClick={next}
                >Next</a>
              </li>
            </ul>
          </>
        }
      </div>
    </>
  );
}

export default App;
