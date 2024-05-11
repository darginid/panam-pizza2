import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <>
      <div className="container-notFound">
        <h1>404 Error</h1>
        <p>Page Not Found</p>
        <Link to={"/"}>
            <span className="btn_bg_none">На главную</span>
      </Link>
    </div>
    </>
  );
};

export default NotFound;
