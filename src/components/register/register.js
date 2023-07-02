import React, { useEffect, useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { useDispatch } from "react-redux";
import { isLoggedIn } from "../../store/action";
import { useTranslation } from "react-i18next";
function Register() {
  const dispatch=useDispatch()
  const {t,i18n}=useTranslation()
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [err, setErr] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/sign-in");
  };

  //   function to test if string has any spaces
  function hasWhiteSpace(s) {
    return /\s/.test(s);
  }

  //   function for validation to an email format
  function ValidateEmail(email) {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }

  //   function to check password
  function checkPassword(str) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
  }
  var password;
  var rePassword;
  const handelNewUser = (ev) => {
    switch (ev.target.name) {
      case "name":
        setNewUser({ ...newUser, name: ev.target.value });
        setErr({
          ...err,
          name:
            ev.target.value.length == 0
              ? "name is required"
              : ev.target.value.length <= 3
              ? "name must be at least 4 character"
              : hasWhiteSpace(ev.target.value)
              ? "name must not has any spaces"
              : "",
        });
        break;
      case "email":
        setNewUser({ ...newUser, email: ev.target.value });
        setErr({
          ...err,
          email:
            ev.target.value.length == 0
              ? "email is required"
              : ValidateEmail(ev.target.value)
              ? ""
              : 'email is wrong , please type email matches "xxxx@xxxx.com"',
        });
        break;
      case "password":
        setNewUser({ ...newUser, password: ev.target.value });
        setErr({
          ...err,
          password:
            ev.target.value.length == 0
              ? "password is required"
              : checkPassword(ev.target.value)
              ? ""
              : "invalid password",
        });
        break;
      case "repassword":
        setNewUser({ ...newUser, rePassword: ev.target.value });
        break;
      default:
        return;
        break;
    }
  };

  const createAccount = () => {
    if (newUser.password != newUser.rePassword) {
      setErr({ ...err, rePassword: "not matched password , try again" });
    } else {
      setErr({ ...err, rePassword: "" });
    }
  };

  const preventDefault = async (ev) => {
    ev.preventDefault();
    await createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(isLoggedIn(true))
        navigate("/sign-in");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10" style={{ marginTop: "4%" }}>
            <div className="d-flex justify-content-center align-items-center p-1 ">
              <h4>{t("CREATE AN ACCOUNT")}</h4>
            </div>
            <div className="d-flex justify-content-center align-items-center  ">
              <form
                style={{ padding: "30px" }}
                onSubmit={(e) => {
                  preventDefault(e);
                }}
              >
                <div className="form-group">
                  <label htmlFor="name">{t("NAME")} : </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder={t("Enter Your Name")}
                    onChange={(e) => handelNewUser(e)}
                  />
                  <small
                    id="emailHelp"
                    className="form-text  "
                    style={{ color: "red" }}
                  >
                    {err.name}
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t("EMAIL ADDRESS")} : </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder={t("Enter Email")}
                    onChange={(e) => handelNewUser(e)}
                  />
                  <small
                    id="emailHelp"
                    className="form-text  "
                    style={{ color: "red" }}
                  >
                    {err.email}
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t("PASSWORD")} : </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    aria-describedby="emailHelp"
                    placeholder={t("Enter Password")}
                    onChange={(e) => handelNewUser(e)}
                  />
                  <small
                    id="emailHelp"
                    className="form-text  "
                    style={{ color: "white" }}
                  >
                   {t("password warning")}
                  </small>
                  <small
                    id="emailHelp"
                    className="form-text  "
                    style={{ color: "red" }}
                  >
                    {err.password}
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="repassword">{t("RE-PASSWORD")} : </label>
                  <input
                    type="password"
                    name="repassword"
                    className="form-control"
                    id="repassword"
                    aria-describedby="emailHelp"
                    placeholder={t("Enter Password again")}
                    onChange={(e) => handelNewUser(e)}
                  />
                  <small
                    id="emailHelp"
                    className="form-text  "
                    style={{ color: "red" }}
                  >
                    {err.rePassword}
                  </small>
                </div>

                <button
                  type="submit"
                  className="btn w-100 mt-4  "
                  style={{ backgroundColor: "#e00712", color: "white" }}
                  onClick={() => {
                    createAccount();
                  }}
                >
                 {t("CREATE AN ACCOUNT")}
                </button>
                <button
                  type="submit"
                  className="btn  w-100 mt-3  "
                  style={{ backgroundColor: "#e00712", color: "white" }}
                  onClick={() => {
                    navigateToLogin();
                  }}
                >
                 {t(" HAVE AN ACCOUNT ? LOG-IN !")}
                </button>
              </form>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}

export default Register;
