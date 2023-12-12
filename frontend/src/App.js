import "./App.css";
import { useEffect, useState } from "react";
import { HashRouterRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import LoginSignUp from "./components/User/LoginSignUp";
import ShortLinkForm from "./components/Home/ShortLinkForm";
import ShortLinkAnalytics from "./components/Home/ShortLinkAnalytics";

function App() {
    useEffect(() => {

    }, []);
    const [shortId, setShortId] = useState('');

    const handleShortIdChange = (newShortId) => {
        setShortId(newShortId);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginSignUp />} />
                <Route path="/short" onShortIdChange={handleShortIdChange} element={<ShortLinkForm />} />
                <Route path="/shortanalytic" shortId={shortId} element={<ShortLinkAnalytics />} />
            </Routes>
        </Router>
    );
}

export default App;
