import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
    return (
        <div className="container flex flex-col items-center justify-between ">
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;
