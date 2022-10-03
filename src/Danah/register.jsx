import "./register.css";
import React from "react";

const Register = ()=>{
    return <div class="container">
        <div class="design">
        
        <div class="text-center mt-4 name">
            REGISTER
        </div>
        <form class="p-3 mt-3">
        <div>
            <a id="descrip" href="google.com">Ingresa tu usuario</a>
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="usuario" id="usuario" placeholder="Username"></input>
            </div>
        </div>
        <div>
            <a id="descrip" href="google.com">Ingresa tu correo</a>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="text" name="correo" id="correo" placeholder="Mail"></input>
            </div>
        </div>
        <div>
            <a id="descrip" href="google.com">Ingresa tu contraseña</a>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="contraseña" id="pwd" placeholder="Password"></input>
            </div>
        </div>
        <div>
            <a id="descrip" href="google.com">Verificar contraseña</a>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="contraseña" id="pwd" placeholder="Password"></input>
            </div>
        </div>

            <button class="btn mt-3">Crear cuenta</button>
        </form>
        <div class="text-center fs-6">
            <a href="google.com">Olvidaste tu contraseña?</a> or <a href="/src/hector/login.jsx">Sign up</a>
        </div>
    </div>
</div>
}

export default Register;