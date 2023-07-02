import ReactDOM from "react-dom";
import React from "react";
import "./notFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="notFoundCard col-5 col-sm-5 col-md-4 col-lg-3 col-xl-2">
          <img
            id="notfound"
            src="https://cdn-icons-png.flaticon.com/512/755/755014.png"
          />
        </div>
      </div>
      <div className="text-center my-3">
        <h4>Page you are looking for is NOT FOUND ! </h4>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1"></div>

          <div className="d-flex flex-wrap justify-content-center align-items-center mt-3 col-10">
            <div className="card col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 mx-2 my-2 py-3 text-center">
              <div>
                <img
                  className="imgCard"
                  src="https://cdn.iconscout.com/icon/free/png-256/free-home-house-main-page-building-address-location-1-2618.png?f=webp"
                />
              </div>
              <div className="my-3">
                <h6>HOME PAGE</h6>
              </div>
              <div className="mt-3 ">
                <Link to="/">
                  <button type="button" className="btn btn-warning">
                    Explore!
                  </button>
                </Link>
              </div>
            </div>
            <div className="card col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 mx-2 my-2 py-3 text-center">
              <div>
                <img
                  className="imgCard"
                  src="https://icon-library.com/images/free-movies-icon/free-movies-icon-16.jpg"
                />
              </div>
              <div className="my-3">
                <h6>MOVIES</h6>
              </div>
              <div className="mt-3">
                <Link to="/movies">
                  <button type="button" className="btn btn-warning">
                    Explore!
                  </button>
                </Link>
              </div>
            </div>

            <div className="card col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 mx-2 my-2 py-3 text-center">
              <div>
                <img
                  className="imgCard"
                  src="https://icons-for-free.com/iconfiles/png/512/movie+video+icon-1320087274946223173.png"
                />
              </div>
              <div className="my-3">
                <h6>TV SHOWS</h6>
              </div>
              <div className="mt-3">
                <button type="button" className="btn btn-warning">
                  Explore!
                </button>
              </div>
            </div>
            <div className="card col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 mx-2 my-2 py-3 text-center">
              <div>
                <img
                  className="imgCard"
                  src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png"
                />
              </div>
              <div className="my-3">
                <h6>MY ACCOUNT</h6>
              </div>
              <div className="mt-3">
                <Link to="/register">
                  <button type="button" className="btn btn-warning">
                    Explore!
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
