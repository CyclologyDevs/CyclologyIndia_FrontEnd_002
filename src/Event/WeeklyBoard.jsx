import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer'
import img1 from '../images/event.jpeg';


function WeeklyBoard(props) {

    const [posts, setPosts] = useState({ blogs: [] });
    const [diplay, setDisplay] = useState(false);
    const event_name = 'May750'
    const athlete_id = localStorage.getItem('athlete_id')
    const uuid = localStorage.getItem('uuid')
    const event_start_date = '2022-05-01'
    const event_end_date = '2022-05-31T23:59:59Z'

    const handleData = () => {
        const fetchPostList = async () => {
            const { data } = await axios(
                `${process.env.REACT_APP_URL}/events/event_may750`
            );
            setPosts({ blogs: data });
            console.log(data);
        };
        fetchPostList();
    }

    const handleSubmit = () => {
        const Data = { event_name, athlete_id, uuid, event_start_date, event_end_date }
        fetch(`${process.env.REACT_APP_URL}/join_event`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Data)
        }).then((result) => {
            console.log(result)
            // let code = result.status
            if (result.status / 100 == 2) {
                window.alert('Successfully join the event')
            }

            if (result.status / 100 == 4) {
                window.alert('Your already join the event')
            }
        })
    }

    const Event_Join = async () => {
        const Data = { event_name, athlete_id, uuid }
        await fetch(`${process.env.REACT_APP_URL}/is_in_event`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Data)
        }).then((result) => {
            console.log(result)

            if (result.status / 100 == 2) {
                setDisplay(true)
            }
        })
    }


    useEffect(() => {
        handleData()
        Event_Join()
    }, []);


    return (

        <div className='bg-gray-800'>
            <div className="carousel-inner rounded-lg mt-20">
                <div className="carousel-item active">
                    <Link to='/event1'>
                        <img src={img1} className="d-block w-100" alt="..." style={{ height: '600px' }} />
                        <div className='text-center content'>
                            <h5 className='font-serif font-bold text-black text-2xl md:text-5xl mb-2'>May 750</h5>
                            <p className='font-serif text-xs text-justify md:text-xl text-blue-800'>This is a 750kms cycling match.</p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className='mt-10 container flex'>
                <div className='xl:pl-28 md:pl-10 pl-0'>
                    <h1 className='text-left md:text-4xl text-lg text-white font-serif font-bold'>Cyclology Event</h1>
                </div>
                <div className='xl:pl-80 md:pl-6 pl-0'>
                    {props.auth ? (
                        localStorage.getItem('athlete_id') == 'null' ? (
                            <Link to='/profile'>
                                <button className="md:ml-96 ml-28 font-serif font-bold text-white py-2 px-8 bg-[#1814ff] rounded text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Connect to Strava</button>
                            </Link>
                        ) : !diplay ? (
                            <button className="md:ml-96 ml-28 font-serif font-bold text-white py-2 px-8 bg-[#1814ff] rounded text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]" onClick={() => handleSubmit()}>Join</button>
                        ) : (
                            <button className="md:ml-80 ml-20 font-serif font-bold text-white py-2 px-8 bg-indigo-900 rounded text-lg">Your already join the event</button>
                        )
                    ) : (
                        <Link to='/login'>
                            <button className="md:ml-96 ml-28 font-serif font-bold text-white py-2 px-8 bg-[#1814ff] rounded text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Login</button>
                        </Link>
                    )}
                </div>
            </div>
            <section className="text-gray-500 body-font font-serif">
                <div className='place-items-center'>
                    <div className="container mx-auto flex py-24  items-center">
                        <div className="mx-auto">
                            <h2 className="display-3 text-center my-3 font-bold text-violet-700" style={{ fontFamily: 'Lobster' }}>Scoreboard</h2>
                            <table className="border-2 border-gray-600 table shadow-2xl m-0 rounded-2xl">
                                <thead className='text-white'>
                                    <tr className='text-xs md:text-lg'>
                                        <th scope="col" style={{ whiteSpace: 'nowrap' }} className='text-white border-2 border-gray-600'>S. No.</th>
                                        <th scope="col" className='text-white border-2 border-gray-600'>uuid</th>
                                        <th scope="col" className='text-white border-2 border-gray-600'>Name</th>
                                        <th scope="col" className='text-white border-2 border-gray-600'>Total Distance (K.M.)</th>
                                        <th>Progress</th>
                                    </tr>
                                </thead>
                                {/* num1.toFixed(2) */}
                                <tbody className='text-white md:text-lg text-xs border-gray-600'>
                                    {posts.blogs &&
                                        posts.blogs.map((item, i) => (
                                            <tr key={i}>
                                                <th className='text-white border-2 border-gray-600'>{i + 1}</th>
                                                <th className='text-white border-2 border-gray-600'>{item.uuid}</th>
                                                <th className='text-white border-2 border-gray-600'>{item.fname + " " + item.lname}</th>
                                                <th className='text-white border-2 border-gray-600'>{(item.T_Distance / 1000).toFixed(2)}</th>
                                                <th className='text-white border-2 border-gray-600'>{`${item.T_Distance / 1000}` >= 750 ? (
                                                    <th className='pt-3 pb-3 border-gray-600'>🏆Completed</th>
                                                ) : (
                                                    <div>
                                                        <th className='pt-3 pb-3 text-white border-gray-600'>{(750 - item.T_Distance / 1000).toFixed(2)} <span className='pl-1'>KM left</span></th>
                                                    </div>
                                                )}</th>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section >

            <Footer />
        </div >
    );
};

export default WeeklyBoard