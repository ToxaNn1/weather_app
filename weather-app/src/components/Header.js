import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
//redux
import { createrQuery } from "../store/reducer/reducerMain";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createrAuth } from "../store/reducer/reducerAuth";
import { createrError } from "../store/reducer/reducerMain";
// UI
import Input from "./UI/Input";
import Button from "./UI/Button";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [value, setValue] = useState("");
    const [clickSearch, setClickSearch] = useState(false);

    const location = useLocation();
    const userId = location.pathname.at(-1);

    const userJSON = localStorage.getItem(`User${userId}`);
    const user = JSON.parse(userJSON); // return { login and password and id } from auth users
    const auth = useSelector((state) => state.auth.auth);
    const error = useSelector((state) => state.main.error); //error
    
    const search = () => {
        setClickSearch(!clickSearch);
    };

    useEffect(() => {
        value.length && dispatch(createrQuery(value)); //  if input empty exit from effect: else add to dispatch input value (city name)
        createrAuth(user); // audit if auth in system
        dispatch(createrError());
        setValue("");
    }, [clickSearch]);
    //  work only when click on submit

    function logInLogOut() {
        dispatch(createrAuth()); // log out
        navigate("login");
    }

    return (
        <div className="flex-col flex sm:flex-row p-3 bg-cyan-600 justify-between container relative ">
            <div className="flex items-center justify-center">
                {!auth ? <Button onClick={() => navigate("/")}>Main Page</Button> : null}
            </div>
            <div className="flex items-center ">
                <Input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={"Searh city..."}
                />
                {error.length ? (
                    <p className="absolute text-red-700 mt-1 bottom-0">{error}</p>
                ) : null}
                <Button onClick={search}>Search</Button>
            </div>
            <div className="flex items-center justify-center">
                <Button onClick={() => logInLogOut()}>{auth ? "Log Out" : "Log In"}</Button>
                {auth ? null : (
                    <Button onClick={() => navigate("registration")}>Registration</Button>
                )}
            </div>
        </div>
    );
};

export default Header;
