import './burgerUser.css'
import logousuario from './logousuario.png';
const probando = () =>{
    return <div>
         <nav className="navbar navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <img alt='' src={logousuario} width="30" height="30"/>
            </button>
              <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <ul >
                        <li className="nav-item active">
                            <div className="nav-link text-white">Informacion de Usuario</div>
                        </li>
                        <li className="nav-item ">
                            <div className="nav-link  text-white">Historial de compra</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link text-white">Log out</div>
                        </li>
                        </ul>
                    </nav>
              </div>
           </nav>
        </div>
      
}
export default probando;