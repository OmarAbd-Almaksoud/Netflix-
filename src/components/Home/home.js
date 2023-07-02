import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./home.css";
import MovieContainer from "../movieContainer/movieContainer";
import axios from "axios";
import axiosInstance from "../axiosConfig/axiosInstance";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import changeLanguage, { getDataFromAPI } from "../../store/action";
import { withTranslation } from 'react-i18next';

class Home extends React.Component {
  state = {
    currentPage: 1,
    itemsPerPage: 9,
  };

  render() {
    const { t } = this.props;
    const goToPage = (page) => {
      this.setState({ currentPage: page });
    };
    const lastItemIndex = this.state.currentPage * this.state.itemsPerPage;
    const firstItemIndex = lastItemIndex - this.state.itemsPerPage;
    let pages = [];
    for (
      let i = 1;
      i < this.props.movies.length / this.state.itemsPerPage;
      i++
    ) {
      pages.push(i);
    }

    this.props.changeLanguage();
    const myMovies = this.props.movies.slice(firstItemIndex, lastItemIndex);
    return (
      <>
        <MovieContainer
          img="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
          title="NETFLIX ... LAND OF MOVIES"
          description="Veteran warrior John Rambo returns for one final battle as he seeks ferocious vengeance on a drug cartel targeting his family."
          movieType="Action"
          year="2020"
          duration="1h 36m"
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className=" col-10" style={{ marginTop: "5%" }}>
              <h4 className="mb-5">{t('TRENDING MOVIES')}</h4>
              <div className="d-flex flex-wrap ">
                {myMovies.map(function (movie, index) {
                  return (
                    <>
                      <Link
                        id="link2"
                        to={`movies/${movie.id}`}
                        className="col-12 col-md-12 col-lg-6 col-xl-4 my-4"
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
                                  className="details p-2 px-3 mt-3 "
                                >
                                  {t('More Details')}
                                </a>
                                <a
                                  style={{
                                    border: "1px red solid",
                                    color: "red",
                                  }}
                                  className=" trailer p-2 px-3 mt-3 mx-2"
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
              <div className="d-flex mt-5 justify-content-center">
                {pages.map((page) => {
                  return (
                    <button
                      className={`${
                        this.state.currentPage == page
                          ? "activepaginationButtons"
                          : "btnOfPagination"
                      } mx-1`}
                      onClick={() => goToPage(page)}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguage: () => dispatch(getDataFromAPI()),
  };
};
const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default   withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Home));

