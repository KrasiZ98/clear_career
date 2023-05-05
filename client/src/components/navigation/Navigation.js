import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

export const Navigation = () => {
    const { user } = useContext(AuthContext);
    return (
        <header>
            {/* <!-- Navigation --> */}
            <Link id="logo" to="/"
            ><img id="logo-img" src="./images/logo.jpg" alt=""
                /></Link>

            <nav>
                <div>
                    <Link to="/catalog">Dashboard</Link>
                </div>

                {/* <!-- Logged-in users --> */}
                {user.email
                    ?
                    <div className="user">
                        <Link>Welcome, {user.email}</Link>
                        <Link to="/create">Create Offer</Link>
                        <Link to="/logout ">Logout</Link>
                    </div>
                    : <div className="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>}


                {/* <!-- Guest users --> */}

            </nav>
        </header>
    )
}