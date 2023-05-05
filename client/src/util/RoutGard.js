import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { CareerContext } from "../context/CareereContext";

export const Gard = () => {
    
    const {user} = useContext(AuthContext);
    const {career} = useContext(CareerContext);
    
    console.log(career);
   
}