import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

function useAuth() { // return auth user or no
    const [result, setResult] = useState(false);
    const location = useLocation();
    const { id } = useParams();

    const userId = location.pathname.at(-1);
    const userJSON = localStorage.getItem(`User${userId}`);
    const user = JSON.parse(userJSON); // return { login and password and id } from auth users

    useEffect(() => {
        if (user) {
            setResult(true);
        } else {
            setResult(false);
        }
    }, []);

    return [result, id];
}
export default useAuth;
