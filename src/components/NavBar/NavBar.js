import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid container">
                <a class="navbar-brand" href="#">
                    <img class="logo"src="./images/default-logo.png" alt="logo-AutoFull"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link text-light fs-4" href="#">Autos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light fs-4" href="#">Camionetas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light fs-4" href="#">Motos</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <CartWidget/>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar