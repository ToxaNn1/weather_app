import React, { useState, useEffect } from "react";
// ui
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
// router
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error , setError] = useState('')
    const navigate = useNavigate();
    let idUser;

    useEffect(() => {
        auditLogin(login,password)
    }, [login, password]);

    const auditLogin = (login, paswword) => { // audit if password and login in localstorage
        for (let i = 0; i <= localStorage.length; i++) {
            let key = localStorage.key(i); //get names Keys in storage
            let data = JSON.parse(localStorage.getItem(key)); // get value from this Keys
            if (data) {
                // because localStorage have one key with value null
                idUser = key.split("").at(-1); // return userId
                if (data["login"] === login && data["password"] === paswword) { 
                    navigate(`/main/user/${idUser}`)
                } else {
                    setError('Wrong password or login')
                }
            }
        }
    };
    const errorFun = ()=>{
        if(error){
            alert(error)
        }
    }

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
                type="password"
                placeholder="password"
            ></Input>
            <Button onClick={errorFun}>Увійти</Button>
            <Button onClick = {()=>navigate('/registration')}>Зареєструватись</Button>
        </div>
    );
};

export default Login;
