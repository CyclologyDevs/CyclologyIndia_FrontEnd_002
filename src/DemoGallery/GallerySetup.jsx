import React from 'react'
import pic_1 from '../Gimages/img6.jpg'
import pic_2 from '../Gimages/pic_23.JPG'
import pic_3 from '../Gimages/pic_24.JPG'
import pic_5 from '../Gimages/img201.jpeg'
import pic_10 from '../Gimages/img27.jfif'
import pic_11 from '../Gimages/img50.jpeg'
import pic_12 from '../Gimages/img209.jpeg'
import { Link } from "react-router-dom";


function GallerySetup() {

    return (
        <div className="container-fluid mt-32 mb-4">
            <h1 className='uppercase text-5xl font-serif font-bold text-amber-500 text-center mb-10' id='photo'>Welcome to our Gallery</h1>
            <div className="row">
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none new">
                        <img src={pic_1} className="d-block w-100" style={{ height: "45vh", width: "100%" }} alt="..." />

                        <div className="carousel-caption d-block d-md-block">
                            <h5 className='mb-8 text-2xl font-serif uppercase font-bold' >CYCLOLOGY PLOGGING</h5>
                            {/* <div className='overlay'>
                                <div className='text-center content mt-10 p-3 bg-black' style={{ backgroundColor: 'black', width: '100%' }}>
                                    <h4 className='text-white md:text-3xl font-bold' style={{ fontFamily: 'Sofia' }}>11+ Photos</h4>
                                </div>
                            </div> */}
                            <Link to='/cyclology-plogging'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <img src={pic_2} className="d-block w-100" style={{ height: "45vh", width: "100%" }} alt="..." />
                        <div className="carousel-caption d-block d-md-block">
                            <h5 className='mb-2 text-2xl font-serif text-bold uppercase font-bold'>CYCLOLOGY TOURING</h5>
                            <Link to='/cyclology-touring'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <img src={pic_3} className="d-block w-100" style={{ height: "45vh", width: "100%" }} alt="..." />
                        <div className="carousel-caption d-block d-md-block">
                            <h5 className='mb-2 text-2xl font-serif text-bold font-bold'>CYCLOLOGY ENDURO</h5>
                            <Link to='/cyclology-enduro'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <img src={pic_5} className="d-block w-100" style={{ height: "45vh", width: "100%" }} alt="..." />
                        <div className="carousel-caption d-block d-md-block">
                            <h5 className='mb-2 text-2xl font-serif text-bold font-bold'>CYCLOLOGY FIRESIDE CHAT</h5>
                            <Link to='/cyclology-firesidechat'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <img src={pic_10} className="d-block w-100" style={{ height: "45vh", width: "100%" }} alt="..." />
                        <div className="carousel-caption d-block d-md-block">
                            <h5 className='mb-2 text-2xl font-serif text-bold uppercase font-bold'>CYCLOLOGY AT DECATHLON STORE OPENING</h5>
                            <Link to='/cyclology-decathlon'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <img src={pic_11} className="d-block w-100" style={{ height: "45vh", width: "100%" }} alt="..." />
                        <div className="carousel-caption d-block d-md-block">
                            <h5 className='mb-2 text-2xl font-serif text-bold uppercase font-bold'>CYCLOLOGY AT WWF EVENT</h5>
                            <Link to='/cyclology-wwf'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <img src={pic_12} className="d-block w-100" style={{ height: "45vh", width: "100%" }} alt="..." />
                        <div className="carousel-caption d-block d-md-block">
                            <h5 className='mb-2 text-2xl font-serif text-bold uppercase font-bold'>CYCLOLOGY SUNDAY TRAIL RIDE</h5>
                            <Link to='/cyclology-sundayride'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link>
                        </div>
                    </div>
                </div>               
            </div>


            <h1 className='uppercase text-5xl font-serif font-bold text-amber-500 text-center mb-10 mt-10' id='video'>Videos</h1>
            <div className="row">
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <iframe style={{ height: "45vh", width: "100%" }} src="https://www.youtube.com/embed/_nU85_ntz4c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div className="carousel-caption d-block d-md-block">
                            {/* <h5 className='mb-2 text-2xl font-serif text-bold'>Coming Soon...</h5> */}
                            {/* <Link to='/gallery4'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <iframe style={{ height: "45vh", width: "100%" }} src="https://www.youtube.com/embed/KV56ySNceKE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div className="carousel-caption d-block d-md-block">
                            {/* <h5 className='mb-2 text-2xl font-serif text-bold'>Coming Soon...</h5> */}
                            {/* <Link to='/gallery4'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <iframe style={{ height: "45vh", width: "100%" }} src="https://www.youtube.com/embed/H2BqIzvvO1s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div className="carousel-caption d-block d-md-block">
                            {/* <h5 className='mb-2 text-2xl font-serif text-bold'>Coming Soon...</h5> */}
                            {/* <Link to='/gallery4'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <iframe style={{ height: "45vh", width: "100%" }} src="https://www.youtube.com/embed/UzF2GFeXes8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div className="carousel-caption d-block d-md-block">
                            {/* <h5 className='mb-2 text-2xl font-serif text-bold'>Coming Soon...</h5> */}
                            {/* <Link to='/gallery4'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GallerySetup