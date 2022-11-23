import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ user_type, children }) => {
    const navigate = useNavigate();
    const { user, loading } = useSelector((state) => state.user);
    
    console.log(user);
    //   if (loading === false && isAuthenticated === false) {
    //     return <Navigate to="/login" />;
    //   }
    if(user.user_type)
    {
        if (loading === false && user.user_type !== user_type) {
            console.log("protected",user.user_type);
            return navigate(`/${user.user_type}`)
        }
        else{
            return navigate('/aaaa');
        }
    }

    return navigate('/aaaa');
};

export default ProtectedRoute;