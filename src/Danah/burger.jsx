import React from "react";
import logoUser from "./img/logousuario.png";
const Burger =()=>{
return <div>
    <nav class="navbar navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <img src={logoUser} width="30" height="30" alt=""></img>
            </button>
            <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <ul>
                      <li class="nav-item active">
                        <a class="nav-link text-white" href="google.com">Informacion de Usuario</a>
                      </li>
                      <li class="nav-item ">
                        <a class="nav-link  text-white" href="google.com">Historial de compra</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-white" href="google.com">Log out</a>
                      </li>
                    </ul>
                </nav>
            </div>
        </nav>
    </div>     
}
export default Burger;