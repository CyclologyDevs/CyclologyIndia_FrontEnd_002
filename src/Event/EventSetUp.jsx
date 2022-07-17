import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../Gimages/May_750.png';
import img2 from '../Gimages/MAYJUNE.png';
import img3 from '../Gimages/North_Bengal_Event.png';
// import '../CSS_Style/Event.css'


function EventSetUp() {
  return (
    <div id='top'>
      <div className='mb-10'>
        <div id="carouselExampleCaptions" className="carousel slide container mb-7" style={{ height: "80%", width: "100%" }} data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item  active">
              <Link to='/event2'>
                <img src={img2} className="d-block w-100" alt="..." style={{ height: '700px' }} />
              </Link>
            </div>

            <div className="carousel-item">
              <Link to='/event3'>
                <img src={img3} className="d-block w-100" alt="..." style={{ height: '700px' }} />
              </Link>
            </div>

            <div className="carousel-item">
              <Link to='/event1'>
                <img src={img1} className="d-block w-100" alt="..." style={{ height: "700px", width: "100%" }} />
                {/* <div className='text-center content'>
                  <h5 className='font-serif font-bold text-white text-2xl md:text-5xl mb-2'>Event 1 / May 750</h5>
                  <p className='font-serif text-xs text-justify md:text-4xl text-white'>This is a 750kms cycling match.</p>
                </div> */}
              </Link>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div >
  )
}

export default EventSetUp