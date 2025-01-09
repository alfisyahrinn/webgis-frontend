import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function Navigation() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn")
  const navigate = useNavigate();
  const handleLogout = () => {
    // Hapus status login dari localStorage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/login");
  };
  return (
    <Navbar className="border-b-2">
      <NavbarBrand>
        <Link to="/" className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Team WINWIN🔥
        </Link>
      </NavbarBrand>

      <NavbarToggle />
      <div className="items-center flex gap-8" >
        <NavbarCollapse >
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
          {isLoggedIn &&
            <Link to="/admin">
              <NavbarLink active={location.pathname === "/21"}>
                Admin
              </NavbarLink>
            </Link>}
        </NavbarCollapse>
        {isLoggedIn ?
          <button type="button" onClick={handleLogout} className="focus:outline-none text-white m-auto bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Logout</button>
          : <Link to="/login">
            <button type="button" className="focus:outline-none text-white m-auto bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Login</button>
          </Link>}

      </div>

    </Navbar>
  );
}
