import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import useGetAll from "../hooks/useGetAll";

import * as careerServices from "../services/careerServices";

export const CareerContext = createContext();

const CareerContextProvider = (props) => {

    const [careers, setCareers] = useGetAll();

    const navigate = useNavigate();

    async function createCareer(careerData) {
        const result = await careerServices.create(careerData);
        setCareers(oldValue => [...oldValue, result]);
        navigate('/catalog')
    }

    async function updateCareer(id, careerData) {
        const result = await careerServices.update(id, careerData)
        setCareers(careers.map(x => x._id === id ? result : x));
        navigate(`/details/${id}`);
        console.log(id);
    }

    async function deleteCareer(id) {
        setCareers(careers.filter(x => x._id !== id));
        navigate('/catalog');
    }

    return (
        <CareerContext.Provider value={{ createCareer, updateCareer, deleteCareer, careers }}>
            {props.children}
        </CareerContext.Provider>
    )
}

export default CareerContextProvider;