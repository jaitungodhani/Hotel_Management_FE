import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ user_type, children }) => {
    const navigate = useNavigate();
    const { user, loading } = useSelector((state) => state.user);
    
    //   if (loading === false && isAuthenticated === false) {
    //     return <Navigate to="/login" />;
    //   }

    if (loading === false && user && user.user_type !== user_type) {
        return navigate(`/${user.user_type}`)
    }

    return loading === false && user && children;
};

export default ProtectedRoute;