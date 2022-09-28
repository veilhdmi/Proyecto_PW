import './estilosReq.css'
import React from 'react';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Req21() {
  return (
    <Carousel slide={false} interval={null}>
      <Carousel.Item>
        <div className='d-flex justify-content-center w-100 align-self-center'>
          <iframe className="nah" src="https://www.youtube.com/embed/MD6kskn5lmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='d-flex justify-content-center w-100 align-self-center'>
          <iframe className="nah" src="https://www.youtube.com/embed/MD6kskn5lmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='d-flex justify-content-center w-100 align-self-center'>
          <iframe className="nah" src="https://www.youtube.com/embed/MD6kskn5lmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </Carousel.Item>
      
    </Carousel>
  );
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