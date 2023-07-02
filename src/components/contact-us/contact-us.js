import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const{t,i18n}=useTranslation();
    const navigate=useNavigate()
    const send=()=>{
        alert('Thanks for your massage , we will responde in no time ');
        navigate('/')
    }
    const home=()=>{
        navigate('/')
    }
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row mt-5">
          <div className="col-2"></div>
          <div className="col-8 mt-5">
            <div className="text-center">
              <h4>{t("Tell us how we can help !")} </h4>
              <div className="form-group text-left mt-5">
               
                <textarea
                  className="form-control mt-3"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
                <small >{t("we are here to help, please explain everything and we will responde in no time ...")}</small>
              </div>
            </div>
           <div className="text-center mt-5" >
           <button className="btn btn-success w-25"onClick={()=>send()}>{t("SEND")} </button>
           <button className="btn btn-success w-25 mx-2" onClick={()=>home()}>{t("BACK TO HOME")} </button>
           </div>
           
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
