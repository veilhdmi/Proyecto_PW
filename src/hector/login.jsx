import "./login.css";
import React from "react";
import logoUser from "./img/usuario.jpg";

const Login_Hector = () =>{
    
    return <div className="login-box">
        <img src= {logoUser} className="avatar" alt="avatarImage"></img>
            <h1>INGRESE AQUI</h1>
        <form>
            <label for="email">CORREO</label>
            <input type="text" placeholder="Ingrese su correo"></input>
            <label for="password">CONTRASEÑA</label>
            <input type="password" placeholder="Escriba su contraseña"></input>
            <input type="submit" value="INGRESAR"></input>
            <a href="google.com">¿Te olvidaste tu contraseña?</a>
            <h5>CREA TU CUENTA AQUI</h5>     
            <input type="submit" value="CREAR CUENTA"></input>
        </form>
    </div>
}
export default Login_Hector;