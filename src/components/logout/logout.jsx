import React from "react";
import { useState, useEffect } from "react";

function Logout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const handleLogout = (e) => {
  //   e.preventDefault();
  //   localStorage.removeItem('isLoggedIn');
  //   window.location.href = "/login";
  // setIsLoggedIn(false);
  // };
  useEffect(() => {
    localStorage.removeItem("isLoggedIn");
  }, []);
  return (
    <div>
      {isLoggedIn ? (
        <button

        // onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
}
<<<<<<< HEAD
export default Logout;
=======
export default Logout;
>>>>>>> b52ab9b7f9b9e757e5fe30fbad59bb2e488b36cd
