import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid container">
                <Link to='/'>
                        <img className="logo"src="../images/default-logo.png" alt="logo-AutoFull"/>
                </Link>                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/category/autos'><button className="btn btn-outline-primary fs-5 m-1">Autos</button></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/category/camionetas'><button className="btn btn-outline-primary fs-5 m-1">Camionetas</button></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/category/motos'><button className="btn btn-outline-primary fs-5 m-1">Motos</button></Link>
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