/** @format */

import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="">
      <div className="text-center mt-5 ">
        <h2 className="fs-1 text-danger">Opps!!!! an Error Ocurred</h2>
        <br />
        {error && (
          <div>
            <h3 className=""> Status Code:{error?.status}</h3>
            <h3 className=" text-danger">
              {error.statusText || error.message}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
