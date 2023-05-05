import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { CareerContext } from "../../context/CareereContext";

export const Delete = () => {
    const params = useParams();
    const { deleteCareer } = useContext(CareerContext);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/careers/' + params.id, {
            method: 'DELETE',
        })
            .then(deleteCareer(params.id))
    })
}