import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import CheckLogin from "../components/CheckLogin";

const mainlayout = () => {
    return (
        <>
            <CheckLogin>
                <Header />
                <Outlet />
                <Footer />
            </CheckLogin>
        </>
    );
};


export default mainlayout