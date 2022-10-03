import logousuario from "./logousuario.png"
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
                            <a class="nav-link text-white" href="https://github.com/">Informacion de Usuario</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link  text-white" href="https://github.com/">Historial de compra</a>
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