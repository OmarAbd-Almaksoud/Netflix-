import React, { useEffect, useState } from "react";
import {  signOut } from "firebase/auth";
import "./sign-in.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from "../../store/action";
import { useTranslation } from "react-i18next";

function SignIn() {
  const{t,i18n}=useTranslation();
  const dispatch=useDispatch()
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const[err,setErr]=useState({
    email:'',
    password:''
  })
  const navigate=useNavigate()
  const navigateToRegister=()=>{
    navigate('/register')
  }

  const handelValidation = (ev) => {
    if (ev.target.name == "email") {
       setErr({...err,email:(ev.target.value.length==0)?'email is required':(!ev.target.value.includes('@'))?'email must include @':''})
      setUser({ ...user, email: ev.target.value });
    } else {
        setErr({...user,password:(ev.target.value.length==0)?'password is required':(ev.target.value.length<5)?'password at least 5 characters':''})
      setUser({ ...user, password: ev.target.value });
    }
  };
  const preventDefault=(ev)=>{
    ev.preventDefault();
    signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            dispatch(isLoggedIn(true))
            alert('You are siggned in successfully !')
            console.log(` is looged in ${isLoggedIn}`);
            navigate("/")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });

  }

  const logOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
          navigate("/");
          dispatch(isLoggedIn(false))
          alert("Signed out successfully")
      }).catch((error) => {
      // An error happened.
      });
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10" style={{ marginTop: "4%" }}>
            <div className="d-flex justify-content-center align-items-center p-1 ">
              <img
                src="https://dashboard.rtta.rw/public/assets/img/avatar.png"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div className="d-flex justify-content-center align-items-center  ">
              <form style={{ padding: "30px" }} onSubmit={(e)=>preventDefault(e)}>
                <div className="form-group">
                  <label htmlFor="email">{t("EMAIL ADDRESS")} : </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder={t("Enter Email")}
                    onChange={(e) => {
                      handelValidation(e);
                    }}
                  />
                  <small id="emailHelp" className="form-text  " style={{color:'red'}}>
                    {err.email}
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="password">{t("PASSWORD")}</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    placeholder={t("Enter Password")}
                    onChange={(e) => {
                      handelValidation(e);
                    }}
                  />
                   <small id="emailHelp" className="form-text  " style={{color:'red'}}>
                    {err.password}
                  </small>
                </div>

                <button
                  type="submit"
                  className="btn w-100 mt-4  "
                  style={{ backgroundColor: "#e00712", color: "white" }}
                >
                  {t("LOG-IN")}
                </button>
                <button
                 
                  className="btn  w-100 mt-3  "
                  style={{ backgroundColor: "#e00712", color: "white" }}
                  onClick={()=>{navigateToRegister()}}
                >
                  {t("HAVE'T ACCOUNT ? CREATE ONE !")}
                </button>
                <button
                 
                  className="btn  w-100 mt-3  "
                  style={{ backgroundColor: "#e00712", color: "white" }}
                  onClick={()=>{logOut()}}
                >
                 {t('LOG OUT !')}
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

export default SignIn;
