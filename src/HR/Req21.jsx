import './estilosReq.css'
import "../index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import tecno from "./tecnonauta.jpg";
import varo from "./varo.jpg"

function Req21() {
  return <div>
    <div className='container txt'>
      <div className='h1 pb-3 pt-5 border-bottom text-white'>
        Influencers
      </div>
      <div className='row pt-3'>
        <div className='col align-self-start bg-secondary px-0 mx-5 mb-5'>
          <div className='mw-auto' id='foriframe'>
            <iframe className='d-block m-auto' src="https://www.youtube.com/embed/UAoCeEqgyVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          
          <div className='bg-primary p-3'>
            <div className='d-flex align-items-start comillas flex-column'>
              "
            </div>
            
            <div className='align-self-center '>
              <p className="descrip m-0 text-light descrip">
                The computers is absolutely insane! Once again if you 
                want to check out this brand new Redux Gaming PC - 
                its an absolute super computer. Highly, recommend it
              </p>
            </div>
            <div className='d-flex align-items-end comillas flex-column'>
              "
            </div>
          </div>
          <div className='pt-3 bg-white'>
            <div className='d-inline p-2'>
              <img src={tecno} className='rounded-circle' height="40px" width={40} alt="" />
            </div>
            <div className='d-inline px-2 fs-5 fw-bold descrip'>
              TECNONAUTA
            </div>
            <div className='p-3 ml-3 descrip'>
              Thanks to @Tecnonauta for showing off the unboxing of the PC!
            </div>
          </div>
        </div>
        <div className='col align-self-start bg-secondary px-0 mx-5 mb-5'>
          <div className='mw-auto' id='foriframe'>
            <iframe className='d-block m-auto' src="https://www.youtube.com/embed/Hso4A8ZzXpM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          
          <div className='bg-primary p-3'>
            <div className='d-flex align-items-start comillas flex-column'>
              "
            </div>
            
            <div className='align-self-center '>
              <p className="descrip m-0 text-light descrip">
                You basically just pick wich games you play, wich performance
                you want and itll suggest a rig for you. They make things much,
                much simplier and again for only $75 bucks? Okay!
              </p>
            </div>
            <div className='d-flex align-items-end comillas flex-column'>
              "
            </div>
          </div>
          <div className='pt-3 bg-white'>
            <div className='d-inline p-2'>
              <img src={varo} className='rounded-circle' height="40px" width={40} alt="" />
            </div>
            <div className='d-inline px-2 fs-5 fw-bold descrip'>
              RINCÓN DE VARO
            </div>
            <div className='ml-3 p-3 descrip'>
              Thanks for the awesome review @RincónDeVaro! 
            </div>
          </div>
        </div>

      </div>
    </div>
    
  </div>
}

export default Req21;
/*const Req21 = ()=>{
    return <div>
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active mr-0 ml-auto">
        <iframe className="iframecss" width="777.02" height="350" src="https://www.youtube.com/embed/MD6kskn5lmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="carousel-item">
        <iframe className="iframecss" width="777.02" height="350" src="https://www.youtube.com/embed/ZwFaCQqShKY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="carousel-item" >
        <iframe className="iframecss" width="777.02" height="350" src="https://www.youtube.com/embed/9hDKfBKuXjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    <button className="carousel-control-prev border-0 " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden"></span>
    </button>
    <button className="carousel-control-next border-0" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden"></span>
    </button>
  </div>
  </div>
}
//data-bs-interval="2000"
export default Req21;*/