import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user_type, children }) => {
    const { user, loading } = useSelector((state) => state.user);
    console.log(user, loading);
    //   if (loading === false && isAuthenticated === false) {
    //     return <Navigate to="/login" />;
    //   }

    if (loading === false && user && user.user_type !== user_type) {
        return <Navigate to={`/${user_type}`} />;
    }

    return loading === false && user && children;
};

export default ProtectedRoute;