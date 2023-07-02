import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Col } from "react-bootstrap";
import './footer.css'

class Footer extends React.Component {
  state = {};

  render() {
    return (
      <div
        className="container-fluid"
        style={{ marginTop: "10%", marginBottom: "5%" }}
      >
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="d-flex justify-content-center ">
              <div className="w-100">
                <div className="logo text-center" > 
                  <h4 style={{color:'#e00712',letterSpacing:'20px'}}>NETFLIX</h4>
                </div>
                <div className="text-center mt-4">
               <a href="https://www.facebook.com/netflixmiddleeastnorthafrica/?brand_redir=475822799216240"> <i className="fa-brands fa-facebook mx-1 p-1 socialIcons"></i></a>
                <a href="https://twitter.com/i/topics/10026367762"><i className="fa-brands fa-twitter mx-1 p-1 socialIcons"></i></a>
                <a href="https://www.instagram.com/netflix/?hl=en"><i className="fa-brands fa-instagram mx-1 p-1 socialIcons"></i></a>
               <a > <i className="fa-solid fa-phone mx-1 p-1 socialIcons"></i></a>
                <a href="https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw"><i className="fa-brands fa-youtube mx-1 p-1 socialIcons"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    );
  }
}

export default Footer;
