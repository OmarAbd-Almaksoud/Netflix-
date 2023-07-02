import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import store from "./../../store/store";
import { useDispatch, useSelector } from "react-redux";
import changeLanguage from "../../store/action";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";
import { isLoggedIn } from "../../store/action";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();
  const isLoggedInValue = useSelector((state) => state.isLoggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const language = useSelector((state) => state.language);

  const changeLanguageNavBar = () => {
    dispatch(changeLanguage(language == "Arabic" ? "English" : "Arabic"));
  };
  const SignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(isLoggedIn(false));
        navigate("/");
        alert("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <header>
        <div className="logo d-none d-md-none d-lg-block">
          <Link to="/" id="logo">
            <h3>{t("NETFLIX")}</h3>
          </Link>
        </div>
        <div className="logo d-block d-md-block d-lg-none">
          <Link to="/" className="me-5">
            <img
              src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456"
              style={{ width: "50px", height: "50px" }}
            />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/" id="link">
                {t("Home")}
              </Link>
            </li>
            <li>
              <Link to="/movies" id="link">
                {t("Movies")}
              </Link>
            </li>
            <li>
              {!isLoggedInValue ? (
                <Link to="/register" id="link" className="d-none d-md-block">
                  {t("Sign-UP")}
                </Link>
              ) : (
                <Link to="/contact-us" id="link" className="d-none d-md-block">
                  {t("Contact-us")}
                </Link>
              )}
            </li>
            <li>
              {!isLoggedInValue ? (
                <Link to="/sign-in" id="link">
                  {t("Sign-in")}
                </Link>
              ) : (
                <Link
                  onClick={() => SignOut()}
                  id="link"
                  className="d-none d-lg-block"
                >
                  {t("Sign-out")}
                </Link>
              )}
            </li>
          </ul>
        </nav>
        <div>
          {language == "English" ? (
            <button
              className=" ms-1 px-2 py-1 langButton"
              onClick={() => {
                changeLanguageNavBar();
                i18n.changeLanguage("ar");
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9I4E5slRsJEPaUApefVAH2_dAJg31Dysjcg&usqp=CAU"
                style={{ width: "30px", height: "20px" }}
              />
            </button>
          ) : (
            <button
              className=" ms-1 px-2 py-1 langButton"
              onClick={() => {
                changeLanguageNavBar();
                i18n.changeLanguage("en");
              }}
            >
              <img
                src="https://img.freepik.com/free-vector/illustration-usa-flag_53876-18165.jpg"
                style={{ width: "30px", height: "20px" }}
              />
            </button>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
