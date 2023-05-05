import { Link } from "react-router-dom"
import useFormLogin from "../../hooks/useFormLogin"

export const Login = () => {
    const { value, setValue, changeValue, onSubmit } = useFormLogin();

    return (
        <section id="login">
            <div className="form">
                <h2>Login</h2>
                <form className="login-form" onSubmit={onSubmit}>
                    <input type="text" name="email" id="email" placeholder="email" value={value.email} onChange={changeValue}/>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        value={value.password}
                        onChange={changeValue}
                    />
                    <button type="submit">login</button>
                    <p className="message">
                        Not registered? <Link to="/register">Create an account</Link>
                    </p>
                </form>
            </div>
        </section>
    )
}