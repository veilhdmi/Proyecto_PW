import logo from "./img/logo.png"
import carrito from "./img/media/carrito-de-compras.png"
import perfil from "./img/media/perfil.png"
import tg from "./img/media/tarjeta-grafica.png"
import "./ranking_ordenadores.css"
const Ranking=()=>{
    return <div>
         <header className="container-sm">
        <div className="barNav">
            <div className="navbar">
                <span className="logo"><img alt="" src={logo} height="70px" width="70px"/></span>
                <span href="#">Home</span>
                <span href="#">About</span>
                <span href="#">Support</span>
                <span href="#">Reviews</span>
                <span href="#">Ranking</span>
                <span href="#"><img alt="" height="60px" width="60px" src={carrito} /></span>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-info" id="index" type="submit">Search</button>
                </form>
                <span><img alt="" height="30px" width="30px" src={perfil} /></span>
            </div>
        </div>
    </header>
    <div className="container bg-white">
        <h1 className="color-white">
            Ranking Best Sellers Build
        </h1>
        <ul className="nav nav-tabs">
            <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                    aria-expanded="false">🖥️ Monster PC $586</span>
                <ul className="dropdown-menu">
                    <li><span className="dropdown-item" href="#">💳 Intel Core i7 $25</span></li>
                    <li><span className="dropdown-item" href="#">🕋 Hyper 212 RGB Black Edition $78</span></li>
                    <li><span className="dropdown-item" href="#">🔣 GeForce RTX 3050 $36</span></li>
                    <li><span className="dropdown-item" href="#">💿 Disco Ssd M2 1 Tb $200</span></li>
                </ul>
            </li>
            <li>
                <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                    aria-expanded="false">🖥️ Cruse Build $863</span>
                <ul className="dropdown-menu">
                    <li><span className="dropdown-item" href="#">💳 Intel Core i5 $26</span></li>
                    <li><span className="dropdown-item" href="#">🕋 Hyper 212 EVO $78</span></li>
                    <li><span className="dropdown-item" href="#">🔣 GeForce RTX 3080 Ti Y RTX 3080 $45</span></li>
                    <li><span className="dropdown-item" href="#">💿 Disco Ssd M2 1 Tb $200</span></li>
                </ul>
            </li>
            <li>
                <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                    aria-expanded="false">🖥️ Nasa PC $567
                </span>
                <ul className="dropdown-menu">
                    <li><span className="dropdown-item" href="#">💳 Intel Core i7 $56</span></li>
                    <li><span className="dropdown-item" href="#">🕋 Hyper 212 LED $63</span></li>
                    <li><span className="dropdown-item" href="#">🔣 GeForce RTX 3050 $75</span></li>
                    <li><span className="dropdown-item" href="#">💿 Disco Ssd M2 1 Tb $200</span></li>
                </ul>
            </li>
            <li>
                <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                    aria-expanded="false">🖥️ Budget Build $746</span>
                <ul className="dropdown-menu">
                    <li><span className="dropdown-item" href="#">💳 Intel Core i8 $30</span></li>
                    <li><span className="dropdown-item" href="#">🕋 Hyper T20 $63</span></li>
                    <li><span className="dropdown-item" href="#">🔣 GeForce RTX 3080 Ti Y RTX 3080 $79</span></li>
                    <li><span className="dropdown-item" href="#">💿 Disco Ssd M2 1 Tb $200</span></li>
                </ul>
            </li>

        </ul>
        </div>
    <footer className="mt-5">
        <div className="row_footer">
            <div className="col_footer">
                <span className="color-white fs-2" >Build your pc!</span><img alt=""
                    src={tg} className="footer_logo"/>
                <span className="footer_about">Project of the course implemented by the students of the prograweb subject of
                    the
                    cycle 2022-2
                </span>
            </div>
            <div className="col_footer">
                <h3>
                    <div className="bottom_line"><span></span></div>
                </h3>
                <span>correo1@aloe.ulima.edu.pe</span>
                <span>correo2@aloe.ulima.edu.pe</span>
                <span>correo3@aloe.ulima.edu.pe</span>
                <span className="footer_email">20192659@aloe.ulima.edu.pe</span>
                <h4>+51 951654412</h4>
            </div>
            <div className="col_footer">
                <h3>Links <div className="bottom_line"><span></span></div>
                </h3>
                <ul>
                    <li><span href="">HOME</span></li>
                    <li><span href="">ABOUT</span></li>
                    <li><span href="">SERVICE</span></li>
                    <li><span href="">CONTACT US</span></li>
                </ul>
            </div>
            <div className="col_footer">
                <h3>Newsletter <div className="bottom_line"><span></span></div>
                </h3>
                <form>
                    <ion-icon className="icon" name="mail"></ion-icon>
                    <input type="email" placeholder="Enter your email" required/>
                    <button type="submit">
                        <ion-icon className="icon_right" name="arrow-round-forward"></ion-icon>
                    </button>
                </form>
                <div className="social_icons">
                    <ion-icon className="social_icon" name="logo-facebook"></ion-icon>
                    <ion-icon className="social_icon" name="logo-whatsapp"></ion-icon>
                    <ion-icon className="social_icon" name="logo-twitter"></ion-icon>
                    <ion-icon className="social_icon" name="logo-instagram"></ion-icon>
                </div>
            </div>
        </div>
        <span className="copyright">Build your pc! Ⓒ 2022 - All Rights Reserved</span>
    </footer>
    </div>
} 
export default Ranking;