import { useNavigate } from "react-router-dom"

export const useNavigated = () => {
    const navigate = useNavigate();
    navigate('/');
}