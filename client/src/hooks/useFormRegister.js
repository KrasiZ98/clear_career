import { useContext, useState } from "react";
import validation from "../components/register-page/validation";
import { AuthContext } from "../context/AuthContext";

export default function useFormRegister() {

    const [value, setValue] = useState({
        email: '',
        password: '',
        repass: '',
    });

    const [error, setError] = useState({});

    const { authRegister } = useContext(AuthContext);

    function changeValue(e) {
        setValue(oldValue => ({
            ...oldValue,
            [e.target.name]: e.target.value
        }));
    }

    function onSubmit(event) {
        event.preventDefault();

        // if (Object.values(value).some(x => x === '')) {
        //     return alert('Please write emptie fileds');
        // }
        // if (value.password !== value.repass) {
        //     return alert('Password dont match');
        // }
        setError(validation(value));
        authRegister(value);
    }

    return { value, error, setValue, changeValue, onSubmit };
} 