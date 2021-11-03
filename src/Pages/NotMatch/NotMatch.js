import React from "react";
import { Link } from "react-router-dom";

const NotMatch = () => {
  return (
    <div>
      <img
        width="100%"
        src="https://i.ibb.co/CHWrNkj/404-Error-pana.png"
        alt=""
      />
      <Link to="/home">
        <button> Go ToHome</button>
      </Link>
    </div>
  );
};

export default NotMatch;
