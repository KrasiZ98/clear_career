import { useEffect, useState } from "react";

export default function useGetAll() {
    const [careers, setCareers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/careers')
            .then((response) => response.json())
            .then((result) => setCareers(Object.values(result)))
    }, []);

    return [careers, setCareers];
}