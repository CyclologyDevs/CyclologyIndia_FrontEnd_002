import React from 'react'
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import pic_1 from '../Gimages/img43.jpg'
import pic_2 from '../Gimages/img207.jpg'
import pic_3 from '../Gimages/img45.jpg'
import pic_4 from '../Gimages/img49.jpg'
import pic_5 from '../Gimages/img47.jpg'
import pic_6 from '../Gimages/img208.jpg'
import pic_7 from '../Gimages/img501.jpg'
import pic_8 from '../Gimages/img502.jpg'
import pic_9 from '../Gimages/img503.jpg'
import pic_10 from '../Gimages/img504.jpg'
import pic_11 from '../Gimages/img505.jpg'
import pic_13 from '../Gimages/img507.jpg'
import pic_14 from '../Gimages/img508.jpg'
import pic_15 from '../Gimages/img509.jpg'
import pic_16 from '../Gimages/img510.jpg'
import pic_17 from '../Gimages/img511.jpg'
import pic_18 from '../Gimages/img512.jpg'
import pic_19 from '../Gimages/img513.jpg'



import '../CSS_Style/gallery.css'
import { Link } from 'react-router-dom';


function Gallery13() {
    return (
        <SimpleReactLightbox>
            <SRLWrapper>
                <div className="container-fluid mt-28 mb-4">
                    <h1 className='uppercase text-5xl font-bold text-amber-500 text-center mb-10 font-serif'>CYCLOLOGY SUNDAY TRAIL RIDE </h1>
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
                        <div className="col-lg-4 mb-4">
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
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="carousel-item active shadow-none">
                                <img src={pic_10} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="carousel-item active shadow-none">
                                <img src={pic_11} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                            </div>
                        </div>
                        {/*<div className="col-lg-4 mb-4">
                            <div className="carousel-item active shadow-none">
                                <img src={pic_12} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                            </div>
                        </div> */}
                        <div className="col-lg-4 mb-4">
                            <div className="carousel-item active shadow-none">
                                <img src={pic_13} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="carousel-item active shadow-none">
                                <img src={pic_14} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="carousel-item active shadow-none">
                                <img src={pic_15} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="carousel-item active shadow-none">
                                <img src={pic_16} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="carousel-item active shadow-none">
                                <img src={pic_17} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="carousel-item active shadow-none">
                                <img src={pic_18} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="carousel-item active shadow-none">
                                <img src={pic_19} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                            </div>
                        </div>
                        {/*<div className="col-lg-4 mb-4">
                            <div className="carousel-item active shadow-none">
                                <img src={pic_1} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                            </div>
                        </div>*/}
                    </div>
                    <div className='mt-20 mb-20'>
                        <Link to='/gallery'>
                            <button className="flex mx-auto font-serif text-white py-2 px-8 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Back Gallery</button>
                        </Link>
                    </div>
                </div>
            </SRLWrapper >
        </SimpleReactLightbox >
    )
}

export default Gallery13