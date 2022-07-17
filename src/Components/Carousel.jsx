import React from 'react'
// import { Link } from 'react-router-dom'
import img1 from '../Gimages/MAYJUNE.png';
import img2 from '../Gimages/North_Bengal_Event.png';
import img3 from '../Gimages/May_750.png';
import { Link } from 'react-router-dom';

function Carousel() {
    return (
        <div> {/* Carousel */}

            <div id="carouselExampleCaptions" className="carousel slide container mt-20 mb-6" style={{ height: "90%", width: "90%" }} data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner rounded-lg">
                    <div className="carousel-item active">
                        <Link to='/event2'>
                            <img src={img1} className="d-block w-100" alt="..." style={{ height: '700px' }} />
                            
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <Link to='/event3'>
                            <img src={img2} className="d-block w-100" alt="..." style={{ height: '700px' }} />
                           
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <Link to='/event1'>
                            <img src={img3} className="d-block w-100" alt="..." style={{ height: '700px' }} />
                            
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
    )
}

export default Carousel