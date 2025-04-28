import React from "react";
import {Route, Routes} from "react-router-dom";
import {Index} from "./Index.jsx";

export const Layout = () => {
    return (
        <Routes>
            <Route path="/" element={<Index/>}></Route>
        </Routes>
    );
};
