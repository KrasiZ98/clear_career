import { useEffect, useState } from "react";

export default function useGetOneById(id) {
    const [career, setCareer] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/careers/' + id)
            .then((response) => response.json())
            .then((result) => setCareer(result))
    }, [id]);

    return [career, setCareer];
}