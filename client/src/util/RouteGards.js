import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"


export const RouteGards = ({ children }) => {
    const { user } = useContext(AuthContext);
 

    if (user.accessToken === undefined) {
        return <Navigate to='/login' ></Navigate>
    }

    return children ? children : <Outlet ></Outlet>
}