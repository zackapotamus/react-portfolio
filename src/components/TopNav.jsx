import React from 'react';
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <header>
        <div className="container-fluid" id="header-container">
            <div className="row justify-content-between" id="header-row">
                <div className="col-12 col-md-5 col-lg-4" id="header-name">
                    <div className="row justify-content-center">
                        <h1 id="your-name">Zack Hayden</h1>

                    </div>
                </div>
                {/* <!-- <div className="col d-none d-lg-block d-xl-block">blah</div> --> */}
                <div className="col-12 col-md-5 col-lg-4 d-flex align-items-center justify-content-center"
                    id="header-nav-col">
                    <div className="row justify-content-center align-items-center">
                        <div className="col">
                            <nav className="nav justify-content-center align-items-center">
                                <Link className="nav-link" to="/about">About</Link>
                                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
};

export default TopNav;