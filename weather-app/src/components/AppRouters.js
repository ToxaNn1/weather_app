import React from "react";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import NoAuthPage from "../pages/NoAuthPage";
import FullInfoPage from "../pages/FullInfoPage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AuthPage from "../pages/AuthPage";

const AppRouters = () => {
    return (
        <div className="container mx-auto flex flex-col">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<NoAuthPage />}></Route>
                    <Route path="/:cityName" element={<FullInfoPage />}></Route>
                    <Route path="/main/user/:id" element={<AuthPage />}></Route>
                    <Route path="/main/user/:id/:cityName" element={<FullInfoPage />}></Route>
                    <Route path="login" element={<Login />}></Route>
                    <Route path="registration" element={<Registration />}></Route>
                </Route>
            </Routes>
        </div>
    );
};

export default AppRouters;
