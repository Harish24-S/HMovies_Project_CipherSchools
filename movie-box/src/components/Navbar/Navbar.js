import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./Navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar({ showSignInButton, logout, show }) {
  const navigate = useNavigate();

  const goToSignInPage = () => {
    navigate("/sign-in");
  };

  return (
    <div className={`navbar_container ${show && "navbar_color"} ${
      dark && "navbar_dark"
    }`}>
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

      {logout && (
        <p className="navbar_icon">
          <AccountCircleIcon />
        </p>
      )}
    </div>
  );
}

export default Navbar;