import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid container">
                <a className="navbar-brand" href="#">
                    <img className="logo"src="./images/default-logo.png" alt="logo-AutoFull"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link text-light fs-4" href="#">Autos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light fs-4" href="#">Camionetas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light fs-4" href="#">Motos</a>
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