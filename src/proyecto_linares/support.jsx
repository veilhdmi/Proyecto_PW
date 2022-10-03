import logo from "./img/logo.png"
import carrito from "./img/media/carrito-de-compras.png"
import perfil from "./img/media/perfil.png"
import tg from "./img/media/tarjeta-grafica.png"
import guide from "./img/guide.png"
import "./support.css"
const Support = () =>{
    return <div>
        <header className="container">
        <div className="barNav">
            <div className="navbar">
                <span className="logo"><img alt="" src={logo} height="70px" width="70px"/></span>
                <span >Home</span>
                <span >About</span>
                <span >Support</span>
                <span >Reviews</span>
                <span >Ranking</span>
                <span ><img alt="" height="60px" width="60px" src={carrito} /></span>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-info" id="index" type="submit">Search</button>
                </form>
                <span><img alt="" height="30px" width="30px" src={perfil} /></span>
            </div>

        </div>
    </header>
    <div className="container bg-white">

    
    <h1 className="color-black">
        Support Hub
    </h1>
    <div className="row">
        <div className="col">
            <button className="casilla rounded text-align-center">
                <div><img src={guide} alt="guide" height= "100px" width= "100px"/></div>
                <div>Guides</div>
            </button>
        </div>
        <div className="col">
            <button className="casilla rounded text-align-center">
                <div><img
                        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/327/white-question-mark_2754.png"
                        alt="faq" height= "100px" width= "100px"/></div>
                <div>FAQ</div>
            </button>
        </div>
        <div className="col">
            <button className="casilla rounded text-align-center">
                <div><img
                        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/ticket_1f3ab.png"
                        alt="ticket" height= "100px" width= "100px"/></div>
                <div>Submit Ticket</div>
            </button>
        </div>
    </div>
    </div>
    <footer>
        <div className="row_footer">
            <div className="col_footer">
                <p className = "color-white fs-2">Build your pc!</p><img alt=""
                    src={tg} className="footer_logo"/>
                <p className="footer_about">Project of the course implemented by the students of the prograweb subject of
                    the
                    cycle 2022-2
                </p>
            </div>
            <div className="col_footer">
                <h3>
                    <div className="bottom_line"><span></span></div>
                </h3>
                <p>correo1@aloe.ulima.edu.pe</p>
                <p>correo2@aloe.ulima.edu.pe</p>
                <p>correo3@aloe.ulima.edu.pe</p>
                <p className="footer_email">20192659@aloe.ulima.edu.pe</p>
                <h4>+51 951654412</h4>
            </div>
            <div className="col_footer">
                <h3>Links <div className="bottom_line"><span></span></div>
                </h3>
                <ul>
                    <li><span >HOME</span></li>
                    <li><span >ABOUT</span></li>
                    <li><span >SERVICE</span></li>
                    <li><span >CONTACT US</span></li>
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
        <p className="copyright">Build your pc! Ⓒ 2022 - All Rights Reserved</p>
    </footer>

    </div>

}
export default Support