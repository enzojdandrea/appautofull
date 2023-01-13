import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid container">
                <Link to='/'>
                    {/* <a className="navbar-brand" href="#"> */}
                        <img className="logo"src="../images/default-logo.png" alt="logo-AutoFull"/>
                    {/* </a> */}
                </Link>                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/category/autos'><a className="nav-link text-light fs-4" href="#">Autos</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/category/camionetas'><a className="nav-link text-light fs-4" href="#">Camionetas</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/category/motos'><a className="nav-link text-light fs-4" href="#">Motos</a></Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <CartWidget/>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar