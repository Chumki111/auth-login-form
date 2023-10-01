import { useContext } from "react";
import { AuthContext } from "../Context/UserProvider";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {user ,loading}=useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};
PrivetRoute.propTypes = {
    children : PropTypes.node
}

export default PrivetRoute;