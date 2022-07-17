import React from 'react'
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import pic_1 from '../Gimages/img46.jpeg'
import pic_2 from '../Gimages/img48.jpeg'
import pic_3 from '../Gimages/img50.jpeg'
import pic_4 from '../Gimages/img44.jpeg'


// import arrow from '../Images/arrow.svg'

import { Link } from 'react-router-dom'


function Gallery8() {
    return (
        <div>
            <SimpleReactLightbox>
                <SRLWrapper>
                    <div className=''>
                        <div className="container-fluid mt-32 mb-4">
                            <h1 className='uppercase text-6xl font-bold text-amber-500 text-center mb-10' style={{ fontFamily: 'Lobster' }}>CYCLOLOGY AT WWF EVENT</h1>
                            <div className="row">
                                <div className="col-lg-4 mb-4">
                                    <div className="carousel-item active shadow-none">
                                        <img src={pic_1} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="carousel-item active shadow-none">
                                        <img src={pic_2} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="carousel-item active shadow-none">
                                        <img src={pic_3} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="carousel-item active shadow-none">
                                        <img src={pic_4} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                                    </div>
                                </div>
                                {/*<div className="col-lg-4 mb-4">
                                    <div className="carousel-item active shadow-none">
                                        <img src={pic_5} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="carousel-item active shadow-none">
                                        <img src={pic_6} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="carousel-item active shadow-none">
                                        <img src={pic_7} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="carousel-item active shadow-none">
                                        <img src={pic_8} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="carousel-item active shadow-none">
                                        <img src={pic_9} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                                    </div>
                              </div>*/}
                            </div>
                            <div className='mt-20 mb-20'>
                                <Link to='/gallery'>
                                    <button className="flex mx-auto font-serif text-white py-2 px-8 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Back Gallery</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SRLWrapper>
            </SimpleReactLightbox >

            {/* <div className='content-end'>
                <a href="#top" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Back to home" className='animate-bounce mr-8 mb-4' style={{ float: 'right' }}>
                    <img src={arrow} alt='' className='justify-items-end w-10' />
                </a>
            </div> */}
        </div>
    )
}

export default Gallery8