import { NavLink } from "react-router-dom";
import Map from "../components/map/Map";

export default function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <NavLink to={'/21'}>
                Messages
            </NavLink>
            <Map/>
        </div>
    )
}
