import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/home";
import Week from "@/pages/week";

function AppRoutes (props) {
    const { path, header, body, footer } = props;

    const pathName = path || "/";

    return (
        <BrowserRouter basename={pathName} future={{ v7_startTransition: true }}>
            { header }
            { body }
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/week" element={<Week />} />
            </Routes>
            { footer }
        </BrowserRouter>
    );
}

export default AppRoutes;
