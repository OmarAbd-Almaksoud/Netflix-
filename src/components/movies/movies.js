import React, { useEffect, useState } from "react";
import "./movies.css";
import axios from "axios";
import { Link } from "react-router-dom";
import axiosInstance from "../axiosConfig/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../spinner/spinner";
import { getDataFromAPI } from "../../store/action";
import Pagination from "../pagination/pagination";
import { useTranslation } from "react-i18next";
function MoviesTwo() {
  const { t, i18n } = useTranslation();

  const [currentPage,setCurrentPage]=useState(1);
  const [moviesPerPage,setMoviesPerPage]=useState(9);
  const lastMovieIndex=currentPage*moviesPerPage;
  const firstMovieIndex=lastMovieIndex-moviesPerPage;
  const loader = useSelector((state) => state.loader);
  const moviesFromState = useSelector((state) => state.movies);
  const moviesArray=moviesFromState.slice(firstMovieIndex,lastMovieIndex);
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataFromAPI());
  }, []);
  return (
    <>
      {/* {loader ? (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <Spinner />
        </div>
      ) : ( */}
        <>
          {" "}
          <div className="container-fluid">
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                <div className="d-flex flex-wrap justify-content-center mt-5">
                  {moviesArray.map((movie) => {
                    return (
                      <>
                        <Link
                          id="link2"
                          to={`/movies/${movie.id}`}
                          className="col-12  col-md-12 col-lg-6 col-xl-4 my-4"
                        >
                          <div>
                            <div>
                              <img
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                              />
                            </div>
                            <div className="my-4">
                              <h4>{movie.title}</h4>
                            </div>
                            <div className="my-4">
                              <h6>SUMMARY</h6>
                              <div style={{ maxHeight: "150px" }}>
                                <p id="test"> {movie.overview}</p>
                              </div>

                              <div className="mt-5 d-flex justify-content-between">
                                <div>
                                  <a
                                    style={{
                                      border: "1px green solid",
                                      color: "green",
                                    }}
                                    className="details p-2 mt-3 "
                                  >
                                    {t('More Details')}
                                  </a>
                                  <a
                                    style={{
                                      border: "1px red solid",
                                      color: "red",
                                    }}
                                    className=" trailer p-2 mt-3 mx-2"
                                  >
                                   {t("Watch Trailer")}
                                  </a>
                                </div>
                                <div>
                                  <i class="fa-regular fa-bookmark "></i>
                                  <i class="fa-solid fa-share mx-3"></i>
                                </div>
                              </div>
                            </div>
                            <div></div>
                          </div>
                        </Link>
                      </>
                    );
                  })}
                </div>
                <Pagination  totlaMovies={moviesFromState.length} moviesPerPage={moviesPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
              </div>
              <div className="col-1"></div>
            </div>
          </div>
        </>
      {/* )} */}
    </>
  );
}

export default MoviesTwo;
