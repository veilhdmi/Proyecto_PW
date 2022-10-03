
import Req20 from "./Req20"
import Req21 from "./Req21"
import React from "react";
//import Req19 from "./Req19"
import {Link} from "react-router-dom";
import "./estilosReq.css"

const Req20y21= () =>{
    return <div className="w-auto">
        <div>
            <Req20/>
        </div>    
        <div className="bg-dark w-auto">
            <Req21/>
        </div>  
        <div>
            <Link to={"/Req19"}>
            <p>aeaaaaaaaa</p>
            </Link>
        </div>
        </div>
}
export default Req20y21;