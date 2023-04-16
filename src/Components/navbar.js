import "../Style/navbar.css";
import { auth } from "../Config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useState, useCallback } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import alertify from "alertifyjs";

export const NavBar = () => {
  /*Navbar Küçülme  -- Başlangıç */
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  /*Navbar Küçülme  -- Bitiş */

  /*Kullanıcı hooks  -- Başlangıç*/
  const [user] = useAuthState(auth);

  const handleSignOut = useCallback(() => {
    signOut(auth);
    alertify.error("Çıkış yapıldı", 1);
  }, []);
  /*Kullanıcı hooks  -- Bitiş*/

  /*Navbar Kullanıcı Kısmı Hover Efekti  -- Başlangıç*/
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const mystyle = {
    backgroundColor: isHover ? "#0FC9F2" : "#0F9BF2",
  };
  /*Navbar Kullanıcı Kısmı Hover Efekti -- Bitiş*/

  return (
    <div>
      <Navbar className="navbar-expand-lg" fixed="top">
        <NavbarBrand href="/">
          {" "}
          <img
            src="https://images.vexels.com/media/users/3/137615/isolated/preview/5af2a9cbd8cd93aa90889fbc05656cb5-cubo-de-logotipo-abstrato-geometrico.png"
            alt="Logo"
            width="25"
            height="25"
            class="d-inline-block "
          />
          TeachSource
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto sagaYasla" navbar full>
            <NavItem>
              <NavLink>
                <Link to="/addPost" className="yesilButon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-grid-3x3-gap"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 2v2H2V2h2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zM9 2v2H7V2h2zm5 0v2h-2V2h2zM4 7v2H2V7h2zm5 0v2H7V7h2zm5 0h-2v2h2V7zM4 12v2H2v-2h2zm5 0v2H7v-2h2zm5 0v2h-2v-2h2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2z" />
                  </svg>{" "}
                  Oluştur
                </Link>
              </NavLink>
            </NavItem>
            <div className="kullaniciAlani">
              <UncontrolledDropdown nav menuRole="menu" direction="down">
                <DropdownToggle nav caret>
                  {user && (
                    <img
                      src={
                        user.photoURL ||
                        "https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png"
                      }
                      widht="30"
                      height="30"
                      className="kullanici"
                    />
                  )}
                </DropdownToggle>
                <DropdownMenu key="start" drop="start" variant="secondary">
                  <DropdownItem className="butonHover"><Link to="/profile">Profilim</Link></DropdownItem>
                  <DropdownItem divider />
                  <div className="butonHover">
                    <DropdownItem
                      style={mystyle}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button onClick={handleSignOut}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-box-arrow-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                          />
                        </svg>{" "}
                        Çıkış Yap
                      </button>
                    </DropdownItem>
                  </div>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};