import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieContainer from "../movieContainer/movieContainer";
import { useDispatch, useSelector } from "react-redux";
import changeLanguage from "../../store/action";
import Spinner from "../spinner/spinner";
import axiosInstance from "../axiosConfig/axiosInstance";
import './movieDetails.css'
import { useTranslation } from "react-i18next";


function MovieDetails() {
  const{t,i18n}=useTranslation();
  const language = useSelector((state) => state.language);
  const loader = useSelector((state) => state.loader);
  // console.log(loader);
  const dispatch = useDispatch();
  const { mid } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();
  const [productionCompanies, setproductionCompanies] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(
        `https://api.themoviedb.org/3/movie/${mid}popular?api_key=ef9be752efec7af3a6ff1321350998d8`
      )
      .then((res) => {
        setMovie(res.data);
        setGenres(res.data.genres);
        setproductionCompanies(res.data.production_companies);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const GoBack = () => {
    navigate(-1);
  };

  return (
    <>
      {(loader==true) ? (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="container-fluid mt-5">
            <div className="row">
              <div className="col-0 col-lg-1 "></div>
              <div className="col-12 col-md-6 col-lg-3 mt-5 ">
                {" "}
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  style={{ Height: "474px", Width: "310px" }}
                />
                <div className="text-center mt-3">
                <a
                   style={{
                    border: "1px green solid",
                    color: "green",
                  }}
                    class="btn details  mx-1 my-1"
                    onClick={() => {
                      GoBack();
                    }}
                  >
                    {t("BACK TO MOVIES")}
                  </a>
                  <a class="btn details  my-1 " href={movie.homepage}
                   style={{
                    border: "1px green solid",
                    color: "green",
                  }}>
                   {t("MOVIE'S WEBSITE")}  
                  </a>
                  
                </div>
              </div>
              <div className=" ms-3 col-10 col-md-5 col-lg-5  mt-5">
                <div>
                  <h4>{movie.original_title}</h4>
                  <p style={{ letterSpacing: "2px" }}>{movie.tagline}</p>
                </div>
                <div className="ms-5 mt-4">
                  <h5 className="mt-2">More Details About Movie : </h5>
                  <li className="my-2">Relase date : {movie.release_date}</li>
                  <li className="my-2">Vote Average : {movie.vote_average}</li>
                  <li className="my-2">Vote Count : {movie.vote_count}</li>
                  <li className="my-2">
                    popularity in US : {movie.popularity}
                  </li>
                  <li className="my-2">release date: {movie.release_date}</li>
                  <li className="my-2">Genres of movie :</li>
                  {genres.map((item) => {
                    return (
                      <div className="d-flex">
                        <div>
                          <li className="ms-5">{item.name}</li>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-12  col-md-12 col-lg-2 mt-5">
                <div className="mb-5">
                  {" "}
                  <h6>{t("Production Companies")} :</h6>
                </div>
                <div>
                  {productionCompanies.map((company) => {
                    return (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                        style={{
                          width: "150px",
                          height: "100px",
                          backgroundColor: "#a6a6a6",
                          borderRadius: "12px",
                        }}
                        className=" my-1 mx-1"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MovieDetails;
