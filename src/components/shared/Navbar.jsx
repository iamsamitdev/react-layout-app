import {NavLink} from 'react-router-dom'
function Navbar() {
    return (
        
        <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
            <div className="container">

                <NavLink to="/home" className="navbar-brand">
                    <img src="/assets/images/logo.png" alt=""/>
                </NavLink>

                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link">หน้าหลัก</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">เกี่ยวกับเรา</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/service" className="nav-link">บริการ</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">ติดต่อเรา</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar