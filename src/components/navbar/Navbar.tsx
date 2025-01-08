import { Link, useLocation } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function Navigation() {
  const location = useLocation();

  return (
    <Navbar className="border-b-2">
      <NavbarBrand>
        <Link to="/" className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Team WINWIN🔥
        </Link>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <Link to="/">
          <NavbarLink active={location.pathname === "/"}>
            Home
          </NavbarLink>
        </Link>
        <Link to="/cagar">
          <NavbarLink active={location.pathname === "/cagar"}>
            Cagar
          </NavbarLink>
        </Link>
        <Link to="/request">
          <NavbarLink active={location.pathname === "/request"}>
            Request
          </NavbarLink>
        </Link>
        <Link to="/21">
          <NavbarLink active={location.pathname === "/21"}>
            About
          </NavbarLink>
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}
