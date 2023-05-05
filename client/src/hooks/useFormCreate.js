import { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { CareerContext } from "../context/CareereContext";

export default function useFormCreate() {

    const { user } = useContext(AuthContext);
    const { createCareer } = useContext(CareerContext);

    const [value, setValue] = useState({
        title: '',
        imageUrl: '',
        category: '',
        description: '',
        requirements: '',
        salary: '',
        _ownerId: user._id
    });


    function changeValue(e) {
        setValue(oldValue => ({
            ...oldValue,
            [e.target.name]: e.target.value
        }));
    }

    function onSubmit(event) {
        event.preventDefault();

        if (Object.values(value).some(x => x === '')) {
            return alert('Please write emptie fileds');
        }

        createCareer(value);
    }

    return { value, setValue, changeValue, onSubmit };
} 