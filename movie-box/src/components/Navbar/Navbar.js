import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ showSignInButton, logout, show }) {
  const navigate = useNavigate();

  const goToSignInPage = () => {
    navigate("/sign-in");
  };

  return (
    <div className="navbar_container">
      <img
        className="navbar_logo"
        src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-movie-cinema-kiranshastry-lineal-color-kiranshastry-2.png"
        alt="Logo"
      />
      <h1 className="navbar_title">HMovies</h1>
      {/* <Link to="/sign-in">
      {showSignInButton === false ? ("") : (
      <button className="navbar_button">Sign In</button>)}
      </Link> */}
      {showSignInButton === false ? (" ") : (
        <button className="navbar_button" onClick={goToSignInPage}>
          Sign In
        </button>
      )}
    </div>
  );
}

export default Navbar;