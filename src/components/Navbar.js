import React from 'react'

function Navbar() {
    return (
        <>
            {/* Nav Bar component */}
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    {/* Name of Company or logo */}
                    <a className="navbar-brand" href="/">IT Agency</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* Divisions of Page */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* Home section */}
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            {/* About section */}
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            {/* Contact section */}
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
