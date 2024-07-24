import { NavLink } from "react-router-dom";

function Navlinkmenu() {
    return (
        <div id="sidebar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/today">Today</NavLink>
            <NavLink to="/week">Week</NavLink>
            <NavLink to="/hour">Hour</NavLink>
        </div>
    );
}

export default Navlinkmenu;