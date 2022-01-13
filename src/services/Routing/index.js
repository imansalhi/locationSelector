import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import LocationsList from "../../pages/locations";
import SelectLocation from "../../pages/SelectLocation";

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/locations" element={<LocationsList />} />
                <Route path="/" element={<SelectLocation />} />
            </Routes>
        </Router>
    );
}