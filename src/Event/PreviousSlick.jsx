import React, { Component } from "react";
import Slider from "react-slick";
import '../CSS_Style/slick.css'

import pic_1 from '../Gimages/May_750.png'
import pic_2 from '../Gimages/North_Bengal_Event.png'


import { Link } from "react-router-dom";


export default class PreviousSlick extends Component {

    getChildData = (id) => {
        console.log(id);
        this.setState({ //this is obviously wrong to do 
            driveURL: id,
        });
    }

    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="ml-10 mr-10 mt-16 mb-10" id='previousevent'>
                <h2 className="text-white text-bold text-4xl uppercase mb-6 text-center font-serif">Previous Event</h2>
                <Slider {...settings}>
                    <div className="border-2 text-center border-gray-800 box-border bg-transparent rounded-lg hover:border-indigo-700 hover:shadow-lg hover:shadow-[#1814ff] pt-2 pl-2 pr-2">
                        <img src={pic_2} alt="" className="rounded-t-lg" style={{ height: 'auto', width: '1000px' }} />
                        <h3 className="font-bold text-white font-serif text-2xl mt-48 mb-2">
                            North Bengal Event
                        </h3>
                        <p className="text-white font-serif">
                            North Bengal Event
                        </p>
                        {/* <Link to='/event3'> */}
                        <button className="flex mx-auto font-serif mt-3 mb-2 text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Ended</button>
                        {/* </Link> */}
                    </div>
                    <div className="border-2 text-center border-gray-800 box-border bg-transparent rounded-lg hover:border-indigo-700 hover:shadow-lg hover:shadow-[#1814ff] pt-2 pl-2 pr-2">
                        <img src={pic_1} alt="" className="rounded-t-lg" style={{ height: 'auto', width: '1000px' }} />
                        <h3 className="font-bold text-white font-serif text-2xl mt-2 mb-2">
                            May 750
                        </h3>
                        <p className="text-white font-serif">
                            This is a 750kms cycling match.
                        </p>
                        <Link to='/event1'>
                            <button className="flex mx-auto font-serif mt-3 mb-2 text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Result</button>
                        </Link>
                    </div>
                </Slider>
            </div>
        );
    }
}