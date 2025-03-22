import React, { useState, useEffect } from "react";
import InformationForm from "./components/InformationForm";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [hasAccount, setHasAccount] = useState(true); // Toggle between login & sign-up

  useEffect(() => {
    setAuthenticated(localStorage.getItem("authenticated") === "true");
  }, []);

  return (
    <div>
      {authenticated ? (
        <InformationForm setAuthenticated={setAuthenticated} />
      ) : hasAccount ? (
        <Login setAuthenticated={setAuthenticated} setHasAccount={setHasAccount} />
      ) : (
        <SignUp setHasAccount={setHasAccount} />
      )}
    </div>
  );
};

export default App;
