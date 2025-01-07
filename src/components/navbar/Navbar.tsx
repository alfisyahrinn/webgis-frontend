import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
export default function Navigation() {
  return (
    <Navbar className="border-b-2">
      <NavbarBrand>
        <Link to={'/'} className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Team WINWIN🔥</Link>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <Link to={'/'}>
          <NavbarLink active>
            Home
          </NavbarLink>
        </Link>
        <Link to={'/cagar'}>
          <NavbarLink >
            Cagar
          </NavbarLink>
        </Link>
        <Link to={'/21'}>
          <NavbarLink >
            About
          </NavbarLink>
        </Link>
      </NavbarCollapse>
    </Navbar>

  )
}
