import React from "react";
// import { Link } from "react-router-dom";
import "./LandingPageContent.css";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuth0 } from "@auth0/auth0-react";

function LandingPageContent() {
  const { user, loginWithRedirect } = useAuth0();
  const goToSignInPage = () => {
    // navigate("/sign-in");
    loginWithRedirect();
  };
  return (
    <div className="landingpagecontent_container">
      <p className="landingpagecontent_title">
        Discover, Watch, and Enjoy the Latest Releases with Ease
      </p>
      <p className="landingpagecontent_subtitle">
        Welcome to HMovies, your gateway to the Cinematic Universe of trailers.
        <br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Watch the latest trailers from anywhere, anytime.
      </p>
      <p className="landingpagecontent_description">
        Ready to watch? Enter your email to signup & enjoy the realm of trailers.
      </p>
      <div className="landingpagecontent_input">
        {/* <input type="text" placeholder="Email address" /> */}
       
        <button className="landingpagecontent_button" onClick={goToSignInPage}> GET STARTED </button>
        
      </div>
    </div>
  );
}

export default LandingPageContent;