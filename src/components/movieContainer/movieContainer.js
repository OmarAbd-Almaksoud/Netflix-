import { Link } from "react-router-dom";
import "./movieContainer.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
function MovieContainer(props) {
  const { t, i18n } = useTranslation();
  const language = useSelector((state) => state.language);
  return (
    <>
      <div id="container">
        
        <img src={props.img} />
       
        
        <div className="dataOfMovie text-center w-100">
          <h1 className="my-4" style={{ letterSpacing: "8px" }}>
            {t("NETFLIX ... LAND OF MOVIES")}
          </h1>
          <h3 className="my-4" style={{ letterSpacing: "3px" }}>{t("Unlimited movies, TV shows, Series")} </h3>
          <div className="mt-5  d-flex justify-content-center">
          <Link to="/register" >
           <button className={`joinNow  ${language=="Arabic"?"px-5 mx-3":"px-5 mx-3"} button`} >
                {t("JOIN NOW")}
            </button>
            </Link>
            <Link  to="/sign-in" >
            <button className="button px-5 ">
                {t("SIGN IN")}
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieContainer;
