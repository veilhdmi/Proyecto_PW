import geforce from "./geforce.png"
import intel from "./intel.png"
import teclado from "./teclado.png"
import "./estilosReq.css"
const Req14 = () =>{
    return <div>
        <div className="container txt">
            <div className="h2 border-bottom py-3">
                Historial de compras
            </div>
            <div className="row bg-black align-items-center my-2 border-bottom border-secondary border-5">
                <div className="col m-2 text-center">
                    <img src={geforce} height="50px" width={50} alt="" />
                </div>
                
                <div className="col text-light" id="Descripcion_compra">
                    NVIDA GEFORCE RTX 3070 8GB (VR READY)
                </div>
                <div className="col text-center text-light" id="Precio_compra">
                    $679
                </div>
                <div className="col text-center text-light" id="Fecha_compra">
                    10/12/2022
                </div>
            </div>
            <div className="row bg-black align-items-center my-2 border-bottom border-secondary border-5">
                <div className="col m-2 text-center">
                    <img src={intel} height="50px" width={50} alt="" />
                </div>
                
                <div className="col text-light" id="Descripcion_compra">
                    NVIDA GEFORCE RTX 3070 8GB (VR READY)
                </div>
                <div className="col text-center text-light" id="Precio_compra">
                    $679
                </div>
                <div className="col text-center text-light" id="Fecha_compra">
                    10/12/2022
                </div>
            </div>
            <div className="row bg-black align-items-center my-2 border-bottom border-secondary border-5">
                <div className="col m-2 text-center">
                    <img src={teclado} height="50px" width={50} alt="" />
                </div>
                
                <div className="col text-light" id="Descripcion_compra">
                    NVIDA GEFORCE RTX 3070 8GB (VR READY)
                </div>
                <div className="col text-center text-light" id="Precio_compra">
                    $679
                </div>
                <div className="col text-center text-light" id="Fecha_compra">
                    10/12/2022
                </div>
            </div>
        </div>
    </div>
}
export default Req14;