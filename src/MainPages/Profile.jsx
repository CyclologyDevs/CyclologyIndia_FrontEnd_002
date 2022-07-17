import React, { useEffect, useState } from 'react'
import '../CSS_Style/Profile.css'
import axios from 'axios'
import { Link } from 'react-router-dom';


const Profile = () => {

    const [userEvent, setUserEvent] = useState([])
    const [data, setData] = useState('')
    const [dataCheck, setDataCheck] = useState(false)

    const id = localStorage.getItem('uuid')
    const athleteId = localStorage.getItem('athlete_id')
    // const Photo = localStorage.getItem("Photo");

    const values = async () => {
        try {
            await axios
                .get(`${process.env.REACT_APP_URL}/account/profile/${id}`)
                .then(res => {
                    // console.log(res)
                    setData(res.data.data)
                    // localStorage.setItem("Photo",  res.data.Photo)             
                })
        }
        catch (err) {
            console.log(err);
        }
    }


    const [discon, setDiscon] = useState(false)







    const disconnectstrava = async () => {

        const uuid = localStorage.getItem('uuid')
        const athlete_id = localStorage.getItem('athlete_id')
        const email = localStorage.getItem('email')
        const values = { athlete_id, uuid, email }
        try {
            const res = await fetch(`${process.env.REACT_APP_URL}/disconnect_strava`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            }).then(async (result) => {
                // console.log(await result.json());
                // setUserEvent(await result.json())
                if (result.status / 100 == 2) {
                    // (true)
                    localStorage.setItem("athlete_id", null);
                    setDiscon(true);
                }
                if (result.status / 100 == 4) {
                    // setDataCheck(false)
                    setDiscon(false);
                }
            })
        }
        catch (err) {
            console.log(err);
        }
    }

    const UserJoinEvent = async () => {

        const uuid = localStorage.getItem('uuid')
        const athlete_id = localStorage.getItem('athlete_id')

        const values = { athlete_id, uuid }
        const res = await fetch(`${process.env.REACT_APP_URL}/joint_event_list`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
        }).then(async (result) => {
            // console.log(await result.json());
            setUserEvent(await result.json())
            if (result.status / 100 == 2) {
                setDataCheck(true)
            }
            if (result.status / 100 == 4) {
                setDataCheck(false)
            }
        })
    };



    useEffect(() => {
        setTimeout(() => {
            values()
            UserJoinEvent()
        }, 1000)
    }, [])


    return (
        <div className='font-serif text-white mt-32 mb-20'>
            <h1 className='text-center text-5xl mb-4'>{data.fname + " " + data.lname}</h1>
            <div className='flex justify-center mb-8'>
                <img className='rounded-t-3xl rounded-b-3xl md:w-60 w-36 border-8 border-white' src={`${process.env.REACT_APP_URL}/${localStorage.getItem("Photo")}`} alt='' />
            </div>
            <h2 className='m text-center text-2xl' style={{ whiteSpace: 'nowrap' }}>Uuid: {id.length > 0 && id.length < 2 ? 'cyclo000' + id :
                id.length > 1 && (id.length < 3) ? 'cyclo00' + id : id.length > 2 && id.length < 4 ? 'cyclo0' + id : id}</h2>
            <div className="xl:ml-72 xl:mr-72 ml-6 mr-8">
                <div className='border border-black container'>
                    <h3 className='mb-2 mt-3 xl:ml-44 ml-20 text-xl'>Profile Details</h3>
                    <hr />
                    <div className="xl:ml-40 md:ml-20 ml-4 md:text-lg text-xs overflow-hidden">
                        <div className="">
                            <div className='flex' style={{ width: '80%' }}>
                                <h2 className='m' style={{ whiteSpace: 'nowrap', width: '50%' }}>Full Name</h2>
                                <h2 className='m' style={{ whiteSpace: 'nowrap' }}>{data.fname + " " + data.lname}</h2>
                            </div>
                            <div className='flex' style={{ width: '80%' }}>
                                <h2 style={{ whiteSpace: 'nowrap', width: '50%' }}>Email ID</h2>
                                <h2 className='md:ml-0 ml-2'>{data.email}</h2>
                            </div>
                            <div className='flex' style={{ width: '80%' }}>
                                <h2 className='m' style={{ whiteSpace: 'nowrap', width: '50%' }}>Mobile Number</h2>
                                <h2 className='m'>{data.phone_number}</h2>
                            </div>
                            <div className='flex' style={{ width: '80%' }}>
                                <h2 style={{ whiteSpace: 'nowrap', width: '50%' }}>Emergency Contact</h2>
                                <h2>{data.emergency_contact}</h2>
                            </div>
                            <div className='flex' style={{ width: '80%' }}>
                                <h2 className='m' style={{ whiteSpace: 'nowrap', width: '50%' }}>E-Contact Relation</h2>
                                <h2 className='m'>{data.relation_emergency_contact}</h2>
                            </div>
                            <div className='flex' style={{ width: '80%' }}>
                                <h2 style={{ whiteSpace: 'nowrap', width: '50%' }}>Gender</h2>
                                <h2 >{data.gender}</h2>
                            </div>
                            <div className='flex' style={{ width: '80%' }}>
                                <h2 className='m' style={{ whiteSpace: 'nowrap', width: '50%' }}>Blood Group</h2>
                                <h2 className='m'>{data.blood_group}</h2>
                            </div>
                            <div className='flex' style={{ width: '80%' }}>
                                <h2 style={{ whiteSpace: 'nowrap', width: '50%' }}>Date of Birth</h2>
                                <h2>{data.date_of_birth}</h2>
                            </div>
                            <div className='flex' style={{ width: '80%' }}>
                                <h2 className='m' style={{ whiteSpace: 'nowrap', width: '50%' }}>Occupation</h2>
                                <h2 className='m'>{data.occupation}</h2>
                            </div>
                            <div className='flex' style={{ width: '80%' }}>
                                <h2 style={{ whiteSpace: 'nowrap', width: '50%' }}>About You</h2>
                                <h2>{data.about}</h2>
                            </div>
                            <div className='flex' style={{ width: '80%' }}>
                                <h2 className='m' style={{ whiteSpace: 'nowrap', width: '50%' }}>Insurance Number</h2>
                                <h2 className='m'>{data.accident_insurance_number}</h2>
                            </div>
                            <div className='flex' style={{ width: '80%' }}>
                                <h2 style={{ whiteSpace: 'nowrap', width: '50%' }}>Facebook Id</h2>
                                <a href={data.facebook_link} target="_blank" rel="noreferrer"><h2>Facebook</h2></a>
                            </div>
                            <div className='flex' style={{ width: '80%' }}>
                                <h2 className='m' style={{ whiteSpace: 'nowrap', width: '50%' }}>Instagram Id</h2>
                                <a href={data.insta_link} target="_blank" rel="noreferrer"><h2 className='m'>Instagram</h2></a>
                            </div>
                            <div className='flex' style={{ width: '80%' }}>
                                <h2 style={{ whiteSpace: 'nowrap', width: '50%' }}>Twitter Id</h2>
                                <a href={data.twitter_link} target="_blank" rel="noreferrer"><h2>Twitter</h2></a>
                            </div>
                            <div className='flex' style={{ width: '80%' }}>
                                <h2 className='m' style={{ whiteSpace: 'nowrap', width: '50%' }}>Linkedin Id</h2>
                                <a href={data.linkdin_link} target="_blank" rel="noreferrer"><h2 className='m'>Linkedin</h2></a>
                            </div>
                        </div>
                    </div>

                    <Link to='/profileEdit'>
                        <button className='btn bg-orange-600 py-2 xl:px-40 px-6 xl:ml-72 ml-0 mb-8 text-lg text-white'>Edit</button>
                    </Link>
                </div>
            </div>


            <div className='justify-center mt-40'>
                <h1 className='text-center md:text-5xl text-4xl uppercase mb-6'>Joined Events</h1>
                {dataCheck ? (
                    <div>
                        {userEvent.map((event, i) => {
                            return (
                                // <div key={i} className='mx-auto'>
                                <p key={i} className='text-white text-center text-3xl'>{i + 1 + ". " + event.event_name}</p>
                                // </div>
                            )
                        })}
                    </div>
                ) : (
                    <div>
                        <h1 className='text-white text-center text-2xl'>Your not joined any event</h1>
                    </div>
                )}
            </div>


            <div className='flex justify-center mt-40'>
                <div className='p-20 flex-box border box-border rounded-xl md:mx-20 mx-10'>
                    <h1 className='text-center text-4xl text-stone-400 font-serif mb-20'>My Strava</h1>
                    {athleteId === 'null' ? (
                        <a href='https://www.strava.com/oauth/authorize?client_id=83421&response_type=code&redirect_uri=http://www.cyclologyindia.com/profileStrava&approval_prompt=force&scope=read,read_all,activity:read_all'>
                            <button className="flex mx-auto font-serif text-white py-2.5 px-4 bg-orange-600 rounded-full md:text-lg text-sm hover:bg-transparent hover:shadow-md hover:shadow-orange-600">Connect with<span className='pl-2 font-bold'>STRAVA</span></button>
                        </a>
                    ) : (
                        discon ? (
                            <a href='https://www.strava.com/oauth/authorize?client_id=83421&response_type=code&redirect_uri=http://www.cyclologyindia.com/profileStrava&approval_prompt=force&scope=read,read_all,activity:read_all'>
                                <button className="flex mx-auto font-serif text-white py-2.5 px-4 bg-orange-600 rounded-full md:text-lg text-sm hover:bg-transparent hover:shadow-md hover:shadow-orange-600">Connect with<span className='pl-2 font-bold'>STRAVA</span></button>
                            </a>
                        ) : (

                            <h1 className='text-center'>Strava already connected
                                <div className="b pt-8">
                                    <button className="flex mx-auto font-serif text-white py-2.5 px-4 bg-orange-600 rounded-full md:text-lg text-sm hover:bg-transparent hover:shadow-md hover:shadow-orange-600" onClick={disconnectstrava}>Disconnect Strava</button>
                                </div>
                            </h1>)




                    )}
                    <p className='text-center text-white mt-28 font-serif'>Power by <span className='pl-2 font-bold text-orange-600'>STRAVA</span></p>
                </div>
            </div>
        </div >
    )
}

export default Profile;