import { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { CareerContext } from "../context/CareereContext";

export default function useFormEdit(id) {

    const { user } = useContext(AuthContext);
    const { updateCareer, careers } = useContext(CareerContext);

    if (careers.length === 0) {
        alert('You are not a owner, cannot update this post.Please return to catalog');   
    }

    const current = careers.find(x => x._id === id);


    const [value, setValue] = useState({
        title: current.title,
        imageUrl: current.imageUrl,
        category: current.category,
        description: current.description,
        requirements: current.requirements,
        salary: current.salary,
        _ownerId: user._id,
        _id: current._id
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

        updateCareer(id, value);

    }

    return { value, setValue, changeValue, onSubmit, id, current };
} 