import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/pages/home";
import Today from "@/pages/today";
import Week from "@/pages/week";
import Hour from "@/pages/hour";

function AppRoutes (props) {
    const { header, body, footer } = props;

    return (
        <Router>
            { header }
            { body }
            <Routes>
                <Route path="/" element={<Home />}  exact="exact" />
                <Route path="/today" element={<Today />} />
                <Route path="/week" element={<Week />} />
                <Route path="/hour" element={<Hour />} />
            </Routes>
            { footer }
        </Router>
    );
}

export default AppRoutes;
