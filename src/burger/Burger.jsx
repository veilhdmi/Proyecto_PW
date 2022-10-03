import logousuario from "./logousuario.png"
import {Link} from "react-router-dom";
const Burger = () => {
    return <div>
        <nav class="navbar navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <img alt = "" src={logousuario} width="30" height="30" />
            </button>
            <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <ul >
                        <li class="nav-item active">
                            <Link to={"/EditarPerfil"} style={{ textDecoration: 'none' }}> <p class="nav-link text-white">Informacion de Usuario</p></Link>
                        </li>
                        <li class="nav-item ">
                        <Link to={"/Req14"} style={{ textDecoration: 'none' }}><p class="nav-link  text-white">Historial de compra</p></Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="https://github.com/">Log out</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>
    </div>
          
}
export default Burger;