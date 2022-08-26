import React, { useState } from "react";
// ui
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
// router
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { createrNewId } from "../store/reducer/reducerAuth";

const Registration = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let idUser;
    const id = useSelector((state) => state.auth.id);

    const submitButton = () => {
        dispatch(createrNewId());
        if (login.length > 4 && password.length > 4 && auditLogin(login)) {
            localStorage.setItem(`User${id}`, JSON.stringify({ login, password, id }));
            navigate(`/main/user/${id}`);
        } else {
            setError("Login and password must contains 4 symbols or login is exists");
        }
    };

    const auditLogin = (login) => {
        // audit if password and login in localstorage
        for (let i = 0; i <= localStorage.length; i++) {
            let key = localStorage.key(i); //get names Keys in storage
            let data = JSON.parse(localStorage.getItem(key)); // get value from this Keys
            if (data) {
                // because localStorage have one key with value null
                idUser = key.split("").at(-1); // return userId
                if (data["login"] !== login) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        }
    };

    return (
        <div className="flex flex-col">
            <Input
                onChange={(e) => setLogin(e.target.value)}
                value={login}
                className="p-2 w-2/3 ml-5"
                type="email"
                placeholder="login"
            ></Input>
            <Input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="p-2 w-2/3 ml-5"
                type="text"
                placeholder="password"
            ></Input>
            <Button onClick={() => submitButton()}>Зареєструватись</Button>
            {error ? <p className="text-red-700">{error}</p> : null}
        </div>
    );
};

export default Registration;
