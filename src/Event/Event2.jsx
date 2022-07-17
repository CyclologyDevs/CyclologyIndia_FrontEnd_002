import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer'
import img1 from '../Gimages/MAYJUNE.png';

function Event2(props) {

    const [posts, setPosts] = useState({ blogs: [] });
    const [diplay, setDisplay] = useState(false);
    const [check, setCheck] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const event_name = 'June800'
    const athlete_id = localStorage.getItem('athlete_id')
    const uuid = localStorage.getItem('uuid')
    const event_start_date = '2022-06-01'
    const event_end_date = '2022-06-30T23:59:59Z'

    const handleData = () => {
        const fetchPostList = async () => {
            const { data } = await axios(
                `${process.env.REACT_APP_URL}/events/event_june800`
            );
            setPosts({ blogs: data });
            // console.log(data)
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
            if (result.status / 100 == 2) {
                window.alert('Successfully join the event')
                setDisplay(true)
                setCheck(true)
            }

            if (result.status / 100 == 4) {
                window.alert('Your already join the event please refresh the page')
                setDisplay(false)
                setCheck(true)
            }
        })
    }

    const leaveEvent = () => {

        const Data = { event_name, athlete_id, uuid, event_start_date, event_end_date }
        fetch(`${process.env.REACT_APP_URL}/leave_event`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Data)
        }).then((result) => {
            // console.log(result)
            // let code = result.status
            if (result.status / 100 == 2) {
                window.alert('Successfully Left the Event')
                // window.location.reload();
                setDisplay(false)
                setCheck(false)
            }

            if (result.status / 100 == 4) {
                window.alert('Your already leave the event please refresh the page')
                setDisplay(true)
                setCheck(false)
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
            // console.log(result)

            if (result.status / 100 == 2) {
                setDisplay(true)
                setCheck(true)
            }
            if (result.status / 100 == 4) {
                setDisplay(false)
            }
        })
    }

    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        handleData()
        Event_Join()
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);


    return (

        <div className='bg-gray-800'>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="..." style={{ height: '700px' }} />
                    {/* <div className='text-center content'>
                            <h5 className='font-serif font-bold text-white text-2xl md:text-5xl mb-2'>May 750</h5>
                            <p className='font-serif text-xs text-justify md:text-xl text-white'>This is a 750kms cycling match.</p>
                        </div> */}
                </div>
            </div>


            <div className='mt-10 container inline-block'>
                <div className='float-left md:ml-20'>
                    <h1 className='text-left md:text-4xl text-lg text-white font-serif font-bold' style={{ whiteSpace: 'nowrap' }}>Cyclology Event</h1>
                </div>
                <div className='float-right md:mr-20'>
                    {props.auth ? (
                        localStorage.getItem('athlete_id') == 'null' ? (
                            <Link to='/profile'>
                                <button className="font-serif font-bold text-white py-2 px-8 bg-[#1814ff] rounded text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Connect to Strava</button>
                            </Link>
                        ) : !diplay ? (
                            <button className="font-serif font-bold text-white py-2 px-8 bg-[#1814ff] rounded text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]" onClick={() => handleSubmit()}>Join</button>
                        ) : (
                            <button className="font-serif font-bold text-white py-2 px-8 bg-[#eb171e] rounded text-lg hover:bg-black hover:shadow-md hover:shadow-[#eb171e]" onClick={() => leaveEvent()}>Leave Event</button>
                        )
                    ) : (
                        <Link to='/login'>
                            <button className="font-serif font-bold text-white py-2 px-8 bg-[#1814ff] rounded text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Login</button>
                        </Link>
                    )}
                </div>
            </div>

            {props.auth ? (
                localStorage.getItem('athlete_id') != 'null' ? (
                    check ? (
                        width >= 600 ? (
                            <section className="text-gray-500 body-font font-serif">
                                <div className='place-items-center'>
                                    <div className="mx-auto flex py-24 items-center">
                                        <div className="mx-auto">
                                            <h2 className="display-3 text-center my-3 font-bold text-violet-700" style={{ fontFamily: 'Lobster' }}>Scoreboard</h2>
                                            <table className="border-2 border-gray-600 shadow-2xl m-0 rounded-2xl table">
                                                <thead className='text-white'>
                                                    <tr className='text-xs md:text-lg'>
                                                        <th scope="col" style={{ whiteSpace: 'nowrap' }} className='text-white border-2 border-gray-600'>S. No.</th>
                                                        <th scope="col" className='text-white border-2 border-gray-600'>Name</th>
                                                        <th scope="col" className='text-white border-2 border-gray-600'>Cyclology Rider Number</th>
                                                        <th scope="col" className='text-white border-2 border-gray-600'>Total Distance (K.M.)</th>
                                                        <th>Progress</th>
                                                    </tr>
                                                </thead>
                                                <tbody className='text-white md:text-lg text-xs border-gray-600'>
                                                    {posts.blogs &&
                                                        posts.blogs.map((item, i) => (
                                                            <tr key={i}>
                                                                <th className='text-white border-2 border-gray-600'>{i + 1}</th>
                                                                <th className='text-white border-2 border-gray-600' style={{ whiteSpace: 'nowrap' }}>{item.fname + " " + item.lname}</th>
                                                                <th className='text-white border-2 border-gray-600'>{`${item.uuid}`.length > 0 && `${item.uuid}`.length < 2 ? 'cyclo000' + item.uuid :
                                                                    `${item.uuid}`.length > 1 && `${item.uuid}`.length < 3 ? 'cyclo00' + item.uuid : `${item.uuid}`.length > 2 && `${item.uuid}`.length < 4 ? 'cyclo0' : 'cyclo' + item.uuid}</th>
                                                                <th className='text-white border-2 border-gray-600'>{(item.T_Distance / 1000).toFixed(2)}</th>
                                                                <th className='text-white border-2 border-gray-600'>{`${item.T_Distance / 1000}` >= 800 ? (
                                                                    <th className='pt-3 pb-3 border-gray-600'>🏆Completed</th>
                                                                ) : (
                                                                    <div>
                                                                        <th className='pt-3 pb-3 text-white border-gray-600'>{(800 - item.T_Distance / 1000).toFixed(2)} <span className='pl-1'>KM left</span></th>
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
                        ) : (
                            <section className="text-gray-500 body-font font-serif">
                                <div className='place-items-center'>
                                    <div className="mx-auto flex py-24 items-center">
                                        <div className="mx-auto">
                                            <h2 className="display-3 text-center my-3 font-bold text-violet-700" style={{ fontFamily: 'Lobster' }}>Scoreboard</h2>
                                            <table className="border-2 border-gray-600 shadow-2xl m-0 rounded-2xl table">
                                                <thead className='text-white'>
                                                    <tr className='text-xs md:text-lg'>
                                                        <th scope="col" style={{ whiteSpace: 'nowrap' }} className='text-white border-2 border-gray-600'>S. No.</th>
                                                        <th scope="col" className='text-white border-2 border-gray-600'>Name</th>
                                                        <th scope="col" className='text-white border-2 border-gray-600'>Cyclology Rider Number</th>
                                                        <th scope="col" className='text-white border-2 border-gray-600'>Total Distance (K.M.)</th>
                                                        <th>Progress</th>
                                                    </tr>
                                                </thead>
                                                <tbody className='text-white md:text-lg text-xs border-gray-600'>
                                                    {posts.blogs &&
                                                        posts.blogs.map((item, i) => (
                                                            <tr key={i}>
                                                                <th className='text-white border-2 border-gray-600'>{i + 1}</th>
                                                                <th className='text-white border-2 border-gray-600' style={{ maxWidth: '9ch', wordWrap: 'break-word' }}>{item.fname + " " + item.lname}</th>
                                                                <th className='text-white border-2 border-gray-600'>{`${item.uuid}`.length > 0 && `${item.uuid}`.length < 2 ? 'cyclo000' + item.uuid :
                                                                    `${item.uuid}`.length > 1 && `${item.uuid}`.length < 3 ? 'cyclo00' + item.uuid : `${item.uuid}`.length > 2 && `${item.uuid}`.length < 4 ? 'cyclo0' : 'cyclo' + item.uuid}</th>
                                                                <th className='text-white border-2 border-gray-600'>{(item.T_Distance / 1000).toFixed(2)}</th>
                                                                <th className='text-white border-2 border-gray-600'>{`${item.T_Distance / 1000}` >= 800 ? (
                                                                    <th className='pt-3 pb-3 border-gray-600'>🏆Completed</th>
                                                                ) : (
                                                                    <div>
                                                                        <th className='pt-3 pb-3 text-white border-gray-600'>{(800 - item.T_Distance / 1000).toFixed(2)} <span className='pl-1'>KM left</span></th>
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
                        )
                    ) : (
                        <div className='m-20'>
                            <p className='text-center text-3xl text-white font-serif pb-10'>Please join the event to see the Scoreboard</p>
                        </div>
                    )
                ) : (
                    <div className='m-20'>
                        <p className='text-center text-3xl text-white font-serif pb-10'>Please connect your strave account to see the Scoreboard</p>
                    </div>
                )
            ) : (
                <div>
                    <p className='text-center text-3xl text-white font-serif m-20'>Please login to see the Scoreboard</p>
                </div>
            )}

            <Footer />
        </div >
    );
};

export default Event2