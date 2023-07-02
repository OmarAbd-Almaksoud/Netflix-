import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import MovieContainer from "./components/movieContainer/movieContainer";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";
import SignIn from "./components/Sign-in/sign-in";
import Register from "./components/register/register";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/notFound/notFound";
import Movies from "./components/movies/movies";
import MovieDetails from "./components/movieDetails/movieDetails";
import { useSelector } from "react-redux";
import ContactUs from "./components/contact-us/contact-us";


function App() {
  const language=useSelector(state=>state.language)
  return (
    <>
     <div dir={`${language=='Arabic'?'rtl':'ltr'}`}>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movie"
          element={
            <MovieContainer
              img="https://wallpaperaccess.com/full/1342054.jpg"
              title="Rambo: Last Blood"
              description="Veteran warrior John Rambo returns for one final battle as he seeks ferocious vengeance on a drug cartel targeting his family."
              movieType="Action"
              year="2020"
              duration="1h 36m"
            />
          }
        />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="register" element={<Register />} />
        <Route path="movies" element={<Movies/>}/>
        <Route path="movies/:mid" element={<MovieDetails/>} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
     </div>
    </>
  );
}

export default App;
