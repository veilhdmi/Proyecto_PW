
import "./editar.css";
import React from "react";
import logo from "./img/logousuario.png";
const Editar = ()=>{
    return <div>
            <div class="wrapper bg-white mt-sm-5">
        <h4 class="pb-4 border-bottom">Editar Perfil</h4>
        <div id="logo"class="d-flex align-items-start py-3 border-bottom">
            <img src={logo} class="img" alt=""></img>
        </div>
        <b>Foto de perfil</b>
        <div >
            <button id="btn-sub" type="button"class="btn btn-outline-secondary btn-sm btn-block "><a id="subir" href="google.com">Upload</a></button>
        </div>
        <div class="py-2">
            <div class="row py-2">
                <div class="col-md-6">
                    <label for="firstname">Nombre</label>
                    <input type="text" class="bg-light form-control" placeholder="Name"></input>
                </div>
                <div class="col-md-6 pt-md-0 pt-3">
                    <label for="username">Usuario</label>
                    <input type="text" class="bg-light form-control" placeholder="Username"></input>
                </div>
            </div>
            <div class="row py-2">
                <div class="col-md-6">
                    <label for="email">Correo electronico</label>
                    <input type="text" class="bg-light form-control" placeholder="user@email.com"></input>
                </div>
                <div class="col-md-6 pt-md-0 pt-3">
                    <label for="phone">Numero de telefono</label>
                    <input type="tel" class="bg-light form-control" placeholder="+51"></input>
                </div>
            </div>
            <div class="row py-2">
                <div class="col-md-6">
                    <label for="country">Pais</label>
                    <select name="country" id="country" class="bg-light">
                        <option value="india" selected>Peru</option>
                        <option value="usa">USA</option>
                        <option value="uk">Brasil</option>
                        <option value="uae">Mexico</option>
                    </select>
                </div>
                <div class="col-md-6 pt-md-0 pt-3" id="lang">
                    <label for="language">Idioma</label>
                    <div class="arrow">
                        <select name="language" id="language" class="bg-light">
                            <option value="english" selected>English</option>
                            <option value="english_us">Español</option>
                            <option value="enguk">Italiano</option>
                            <option value="arab">Catalan</option>
                        </select>
                    </div>
                </div>
            </div>
            <div >
                <button type="button" class="btn btn-outline-primary">Guardar cambios</button>
                <button type="button"class="btn btn-outline-secondary">Cancelar</button>
            </div>
            <div class="d-sm-flex align-items-center pt-3" id="deactivate">
                <div>
                    <a href="google.com">Desactivar cuenta</a>
                    <p>Detalles de la cuenta y contraseña</p>
                </div>
            </div>
                <button class="btn danger btn-primary">Desactivar</button>
            </div>
        </div>
    </div>
}

export default Editar; 