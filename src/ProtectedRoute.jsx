import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import propTypes from "prop-types";

const storage = window.localStorage;
function Protected(props) {
  const { children, ...rest } = props;
  const isAuthenticated =
    storage.getItem("jwtToken") !== undefined &&
    storage.getItem("jwtToken") !== null;
  !isAuthenticated && console.warn("AUTHENTICATION ERROR");
  const location = useLocation();
  if (!children) {
    throw new Error(
      `A component needs to be specified for private route for path ${rest.path}`
    );
  }
  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <Navigate
      to={{
        pathname: "/signup",
        search: location.search,
      }}
      replace
      state={{ from: location }}
    />
  );
}

Protected.propTypes = {
  children: propTypes.any,
};
export default Protected;
