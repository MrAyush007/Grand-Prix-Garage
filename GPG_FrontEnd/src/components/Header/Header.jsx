// import React, { useEffect, useRef, useState } from "react";

// import { Container, Row, Col } from "reactstrap";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import "../../styles/header.css";

// const navLinks = [
//   {
//     path: "/home",
//     display: "Home",
//   },

//   {
//     path: "/cars",
//     display: "Cars",
//   },

//   {
//     path: "/services",
//     display: "Services",
//   },

//   {
//     path: "/finance",
//     display: "Finance",
//   },

//   {
//     path: "/about",
//     display: "About",
//   },
//   {
//     path: "/contact",
//     display: "Contact",
//   },
//   ...(sessionStorage.getItem("userRoles") === "ADMIN"
//     ? [{ path: "/admin", display: "Admin" }]
//     : []),
// ];

// const Header = () => {
//   const navigate = useNavigate();
//   const menuRef = useRef(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

//   const handleLogin = () => {
//     // Perform login actions
//     setIsLoggedIn(true);
//     window.location.reload();
//   };

//   const handleLogout = () => {
//     // Perform logout actions
//     setIsLoggedIn(false);
//     sessionStorage.removeItem("isLoggedIn");
//     sessionStorage.removeItem("token");
//     sessionStorage.removeItem("userId");
//     sessionStorage.removeItem("userRoles");
//     navigate("/");
//   };

//   useEffect(() => {
//     const sessionStatus = sessionStorage.getItem("isLoggedIn");
//     if (sessionStatus === "true") {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   return (
//     <header className="header">
//       {/* ============ header top ============ */}
//       <div className="header__top">
//         <Container>
//           <Row>
//             <Col lg="6" md="6" sm="6">
//               <div className="header__top__left">
//                 <span>Need Help?</span>
//                 <span className="header__top__help">
//                   <i class="ri-phone-fill"></i> +919156917179
//                 </span>
//               </div>
//             </Col>

//             <Col lg="6" md="6" sm="6">
//               <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
//                 {/* <Link to="#" className=" d-flex align-items-center gap-1">
//                   <i class="ri-login-circle-line"></i> Login
//                 </Link> */}
//                 {isLoggedIn ? (
//                   <button
//                     className="btn btn-outline-primary"
//                     onClick={handleLogout}
//                   >
//                     <i className="ri-login-circle-line"></i> Logout
//                   </button>
//                 ) : (
//                   <Link to="/login" className="btn btn-outline-primary">
//                     <i
//                       className="ri-login-circle-line"
//                       onClick={handleLogin}
//                     ></i>{" "}
//                     Login
//                   </Link>
//                 )}

//                 {/* <Link to="#" className=" d-flex align-items-center gap-1">
//                   <i class="ri-user-line"></i> Register
//                 </Link> */}
//                 <Link to="/register" className="btn btn-outline-primary">
//                   <i class="ri-user-line"></i> Register
//                 </Link>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* =============== header middle =========== */}
//       <div className="header__middle">
//         <Container>
//           <Row>
//             <Col lg="4" md="3" sm="4">
//               <div className="logo">
//                 <h1>
//                   <Link to="/home" className=" d-flex align-items-center gap-2">
//                     <i class="ri-car-line"></i>
//                     <span>
//                       DREAM CAR <br />
//                     </span>
//                   </Link>
//                 </h1>
//               </div>
//             </Col>

//             <Col lg="3" md="3" sm="4">
//               <div className="header__location d-flex align-items-center gap-2">
//                 <span>
//                   <i class="ri-earth-line"></i>
//                 </span>
//                 <div className="header__location-content">
//                   <h4>India</h4>
//                   <h6>Pune, Akurdi</h6>
//                 </div>
//               </div>
//             </Col>

//             <Col lg="3" md="3" sm="4">
//               <div className="header__location d-flex align-items-center gap-2">
//                 <span>
//                   <i class="ri-time-line"></i>
//                 </span>
//                 <div className="header__location-content">
//                   <h4>Sunday to Friday</h4>
//                   <h6>10am - 7pm</h6>
//                 </div>
//               </div>
//             </Col>

//             <Col
//               lg="2"
//               md="3"
//               sm="0"
//               className=" d-flex align-items-center justify-content-end "
//             >
//               <button className="header__btn btn ">
//                 <Link to="/contact">
//                   <i class="ri-phone-line"></i> Request a call
//                 </Link>
//               </button>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* ========== main navigation =========== */}

//       <div className="main__navbar">
//         <Container>
//           <div className="navigation__wrapper d-flex align-items-center justify-content-between">
//             <span className="mobile__menu">
//               <i class="ri-menu-line" onClick={toggleMenu}></i>
//             </span>

//             <div className="navigation" ref={menuRef} onClick={toggleMenu}>
//               <div className="menu">
//                 {navLinks.map((item, index) => (
//                   <NavLink
//                     to={item.path}
//                     className={(navClass) =>
//                       navClass.isActive ? "nav__active nav__item" : "nav__item"
//                     }
//                     key={index}
//                   >
//                     {item.display}
//                   </NavLink>
//                 ))}
//               </div>
//             </div>

//             <div className="nav__right">
//               <div className="search__box">
//                 <input type="text" placeholder="Search" />
//                 <span>
//                   <i class="ri-search-line"></i>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useEffect, useRef, useState } from "react";
// import { Container, Row, Col } from "reactstrap";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import "../../styles/header.css";

// const Header = () => {
//   const navigate = useNavigate();
//   const menuRef = useRef(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

//   const handleLogin = () => {
//     // Perform login actions
//     setIsLoggedIn(true);
//     window.location.reload();
//   };

//   const handleLogout = () => {
//     // Perform logout actions
//     setIsLoggedIn(false);
//     sessionStorage.removeItem("isLoggedIn");
//     sessionStorage.removeItem("token");
//     sessionStorage.removeItem("userId");
//     console.log(sessionStorage.getItem("userRoles"));
//     sessionStorage.removeItem("userRoles");
//     navigate("/");
//   };

//   // Filter navLinks to include Admin only if user has 'admin' role
//   const navLinks = [
//     { path: "/home", display: "Home" },
//     { path: "/cars", display: "Cars" },
//     { path: "/services", display: "Services" },
//     { path: "/finance", display: "Finance" },
//     { path: "/about", display: "About" },
//     { path: "/contact", display: "Contact" },
//     ...(sessionStorage.getItem("userRoles") === "ADMIN"
//       ? [{ path: "/admin", display: "Admin" }]
//       : []),
//   ];

//   return (
//     <header className="header">
//       {/* ============ header top ============ */}
//       <div className="header__top">
//         <Container>
//           <Row>
//             <Col lg="6" md="6" sm="6">
//               <div className="header__top__left">
//                 <span>Need Help?</span>
//                 <span className="header__top__help">
//                   <i className="ri-phone-fill"></i> +919156917179
//                 </span>
//               </div>
//             </Col>

//             <Col lg="6" md="6" sm="6">
//               <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
//                 {isLoggedIn ? (
//                   <button
//                     className="btn btn-outline-primary"
//                     onClick={handleLogout}
//                   >
//                     <i className="ri-login-circle-line"></i> Logout
//                   </button>
//                 ) : (
//                   <Link to="/login" className="btn btn-outline-primary">
//                     <i
//                       className="ri-login-circle-line"
//                       onClick={handleLogin}
//                     ></i>{" "}
//                     Login
//                   </Link>
//                 )}
//                 <Link to="/register" className="btn btn-outline-primary">
//                   <i className="ri-user-line"></i> Register
//                 </Link>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* =============== header middle =========== */}
//       <div className="header__middle">
//         <Container>
//           <Row>
//             <Col lg="4" md="3" sm="4">
//               <div className="logo">
//                 <h1>
//                   <Link to="/home" className=" d-flex align-items-center gap-2">
//                     <i className="ri-car-line"></i>
//                     <span>
//                       DREAM CAR <br />
//                     </span>
//                   </Link>
//                 </h1>
//               </div>
//             </Col>

//             <Col lg="3" md="3" sm="4">
//               <div className="header__location d-flex align-items-center gap-2">
//                 <span>
//                   <i className="ri-earth-line"></i>
//                 </span>
//                 <div className="header__location-content">
//                   <h4>India</h4>
//                   <h6>Pune, Akurdi</h6>
//                 </div>
//               </div>
//             </Col>

//             <Col lg="3" md="3" sm="4">
//               <div className="header__location d-flex align-items-center gap-2">
//                 <span>
//                   <i className="ri-time-line"></i>
//                 </span>
//                 <div className="header__location-content">
//                   <h4>Sunday to Friday</h4>
//                   <h6>10am - 7pm</h6>
//                 </div>
//               </div>
//             </Col>

//             <Col
//               lg="2"
//               md="3"
//               sm="0"
//               className=" d-flex align-items-center justify-content-end "
//             >
//               <button className="header__btn btn ">
//                 <Link to="/contact">
//                   <i className="ri-phone-line"></i> Request a call
//                 </Link>
//               </button>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* ========== main navigation =========== */}

//       <div className="main__navbar">
//         <Container>
//           <div className="navigation__wrapper d-flex align-items-center justify-content-between">
//             <span className="mobile__menu">
//               <i className="ri-menu-line" onClick={toggleMenu}></i>
//             </span>

//             <div className="navigation" ref={menuRef} onClick={toggleMenu}>
//               <div className="menu">
//                 {navLinks.map((item, index) => (
//                   <NavLink
//                     to={item.path}
//                     className={(navClass) =>
//                       navClass.isActive ? "nav__active nav__item" : "nav__item"
//                     }
//                     key={index}
//                   >
//                     {item.display}
//                   </NavLink>
//                 ))}
//               </div>
//             </div>

//             <div className="nav__right">
//               <div className="search__box">
//                 <input type="text" placeholder="Search" />
//                 <span>
//                   <i className="ri-search-line"></i>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useEffect, useRef, useState } from "react";
// import { Container, Row, Col } from "reactstrap";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import "../../styles/header.css";

// const Header = () => {
//   const navigate = useNavigate();
//   const menuRef = useRef(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userRoles, setUserRoles] = useState([]);

//   const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

//   const handleLogin = () => {
//     // Perform login actions
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     // Perform logout actions
//     setIsLoggedIn(false);
//     sessionStorage.removeItem("isLoggedIn");
//     sessionStorage.removeItem("token");
//     sessionStorage.removeItem("userId");
//     sessionStorage.removeItem("userRoles");
//     setUserRoles([]);
//     navigate("/");
//   };

//   useEffect(() => {
//     const sessionStatus = sessionStorage.getItem("isLoggedIn");
//     const roles = sessionStorage.getItem("userRoles");
//     console.log(roles);
//     // console.log(sessionStorage.getItem("userRoles"));

//     if (sessionStatus === "true") {
//       setIsLoggedIn(true);
//       setUserRoles(roles);
//     }
//   }, []);

//   const navLinks = [
//     { path: "/home", display: "Home" },
//     { path: "/cars", display: "Cars" },
//     { path: "/services", display: "Services" },
//     { path: "/finance", display: "Finance" },
//     { path: "/about", display: "About" },
//     { path: "/contact", display: "Contact" },
//     ...(userRoles.includes("ADMIN")
//       ? [{ path: "/admin", display: "Admin" }]
//       : []),
//     ...(userRoles.includes("SALESPERSON")
//       ? [{ path: "/salesperson", display: "SALESPERSON" }]
//       : []),
//   ];

//   return (
//     <header className="header">
//       {/* ============ header top ============ */}
//       <div className="header__top">
//         <Container>
//           <Row>
//             <Col lg="6" md="6" sm="6">
//               <div className="header__top__left">
//                 <span>Need Help?</span>
//                 <span className="header__top__help">
//                   <i className="ri-phone-fill"></i> +919156917179
//                 </span>
//               </div>
//             </Col>

//             <Col lg="6" md="6" sm="6">
//               <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
//                 {/* {isLoggedIn ? (
//                   <button
//                     className="btn btn-outline-primary"
//                     onClick={handleLogout}
//                   >
//                     <i className="ri-login-circle-line"></i> Logout
//                   </button>
//                 ) : (
//                   <Link to="/login" className="btn btn-outline-primary">
//                     <i
//                       className="ri-login-circle-line"
//                       onClick={handleLogin}
//                     ></i>{" "}
//                     Login
//                   </Link>
//                 )}
//                 <Link to="/register" className="btn btn-outline-primary">
//                   <i className="ri-user-line"></i> Register
//                 </Link> */}
//                 {isLoggedIn ? (
//                   <>
//                     <span className="user__name">
//                       <i className="ri-user-line"></i> {firstName}
//                       {console.log(firstName)}
//                     </span>
//                     <button
//                       className="btn btn-outline-primary"
//                       onClick={handleLogout}
//                     >
//                       <i className="ri-login-circle-line"></i> Logout
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <Link to="/login" className="btn btn-outline-primary">
//                       <i
//                         className="ri-login-circle-line"
//                         onClick={handleLogin}
//                       ></i>{" "}
//                       Login
//                     </Link>
//                     <Link to="/register" className="btn btn-outline-primary">
//                       <i className="ri-user-line"></i> Register
//                     </Link>
//                   </>
//                 )}
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* =============== header middle =========== */}
//       <div className="header__middle">
//         <Container>
//           <Row>
//             <Col lg="4" md="3" sm="4">
//               <div className="logo">
//                 <h1>
//                   <Link to="/home" className=" d-flex align-items-center gap-2">
//                     <i className="ri-car-line"></i>
//                     <span>
//                       DREAM CAR <br />
//                     </span>
//                   </Link>
//                 </h1>
//               </div>
//             </Col>

//             <Col lg="3" md="3" sm="4">
//               <div className="header__location d-flex align-items-center gap-2">
//                 <span>
//                   <i className="ri-earth-line"></i>
//                 </span>
//                 <div className="header__location-content">
//                   <h4>India</h4>
//                   <h6>Pune, Akurdi</h6>
//                 </div>
//               </div>
//             </Col>

//             <Col lg="3" md="3" sm="4">
//               <div className="header__location d-flex align-items-center gap-2">
//                 <span>
//                   <i className="ri-time-line"></i>
//                 </span>
//                 <div className="header__location-content">
//                   <h4>Sunday to Friday</h4>
//                   <h6>10am - 7pm</h6>
//                 </div>
//               </div>
//             </Col>

//             <Col
//               lg="2"
//               md="3"
//               sm="0"
//               className=" d-flex align-items-center justify-content-end "
//             >
//               <button className="header__btn btn ">
//                 <Link to="/contact">
//                   <i className="ri-phone-line"></i> Request a call
//                 </Link>
//               </button>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* ========== main navigation =========== */}

//       <div className="main__navbar">
//         <Container>
//           <div className="navigation__wrapper d-flex align-items-center justify-content-between">
//             <span className="mobile__menu">
//               <i className="ri-menu-line" onClick={toggleMenu}></i>
//             </span>

//             <div className="navigation" ref={menuRef} onClick={toggleMenu}>
//               <div className="menu">
//                 {navLinks.map((item, index) => (
//                   <NavLink
//                     to={item.path}
//                     className={(navClass) =>
//                       navClass.isActive ? "nav__active nav__item" : "nav__item"
//                     }
//                     key={index}
//                   >
//                     {item.display}
//                   </NavLink>
//                 ))}
//               </div>
//             </div>

//             <div className="nav__right">
//               <div className="search__box">
//                 <input type="text" placeholder="Search" />
//                 <span>
//                   <i className="ri-search-line"></i>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../styles/header.css";

const Header = () => {
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRoles, setUserRoles] = useState([]);
  const [userName, setUserName] = useState("");

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const handleLogin = () => {
    // Perform login actions
    setIsLoggedIn(true);
    window.location.reload();
  };

  const handleLogout = () => {
    // Perform logout actions
    setIsLoggedIn(false);
    sessionStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const sessionStatus = sessionStorage.getItem("isLoggedIn");
    const roles = sessionStorage.getItem("userRoles");
    const name = sessionStorage.getItem("firstName"); // Retrieve the user's name

    if (sessionStatus === "true") {
      setIsLoggedIn(true);
      setUserRoles(roles);
      setUserName(name); // Set the user's name
    }
  }, []);

  const navLinks = [
    { path: "/home", display: "Home" },
    { path: "/cars", display: "Cars" },
    { path: "/services", display: "Services" },
    { path: "/finance", display: "Finance" },
    { path: "/about", display: "About" },
    { path: "/contact", display: "Contact" },
    ...(userRoles.includes("ADMIN")
      ? [{ path: "/admin", display: "Admin" }]
      : []),
    ...(userRoles.includes("SALESPERSON")
      ? [{ path: "/salesperson", display: "SALESPERSON" }]
      : []),
  ];

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +918076045455
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                {isLoggedIn ? (
                  <>
                    <span className="user__name">
                      <i className="ri-user-line"></i> {userName}
                      {console.log("hii" + userName)}
                    </span>
                    <button
                      className="btn btn-outline-primary"
                      onClick={handleLogout}
                    >
                      <i className="ri-login-circle-line"></i> Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="btn btn-outline-primary">
                      <i
                        className="ri-login-circle-line"
                        onClick={handleLogin}
                      ></i>{" "}
                      Login
                    </Link>
                    <Link to="/register" className="btn btn-outline-primary">
                      <i className="ri-user-line"></i> Register
                    </Link>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i className="ri-car-line"></i>
                    <span>
                      Grand Prix Garage <br />
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>India</h4>
                  <h6>Pune, Akurdi</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i className="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
