import { Link } from "react-router-dom"
import useFormRegister from "../../hooks/useFormRegister"

export const Register = () => {
    const { value, error, setValue, changeValue, onSubmit } = useFormRegister();

    return (
        <section id="register">
            <div className="form">
                <h2>Register</h2>
                <form className="login-form" onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="email"
                        id="register-email"
                        placeholder="email"
                        value={value.email}
                        onChange={changeValue}
                    />
                    {error.email && <p style={{color: 'red'}}>{error.email}</p>}
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        placeholder="password"
                        value={value.password}
                        onChange={changeValue}
                    />
                     {error.password && <p style={{color: 'red'}}>{error.password}</p>}
                    <input
                        type="password"
                        name="repass"
                        id="repeat-password"
                        placeholder="repass"
                        value={value.repass}
                        onChange={changeValue}
                    />
                     {error.repass && <p style={{color: 'red'}}>{error.repass}</p>}
                    <button type="submit">register</button>
                    <p className="message">Already registered? <Link to="/login">Login</Link></p>
                </form>
            </div>
        </section>
    )
}