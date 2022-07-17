import React, { useEffect, useState } from 'react'
import '../CSS_Style/Profile.css'
// import Navbar from '../Components/Navbar'
// import Navbar2 from '../Components/Navbar2'
import axios from 'axios'
import { Redirect } from 'react-router-dom';

const ProfileEdit = () => {

    const [data, setData] = useState('')
    const id = localStorage.getItem('uuid')
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [filename, setFilename] = useState('');
    const [about_you, setAbout_you] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [emergency_contact, setEmergency_contact] = useState('');
    const [relation_emergency_contact, setRelation_emergency_contact] = useState('')
    const [date_of_birth, setDate_of_birth] = useState('');
    const [blood_group, setBlood_group] = useState('O+');
    const [occupation, setOccupation] = useState('')
    const [gender, setGender] = useState('')
    const [facebook_link, setFacebook_link] = useState('')
    const [insta_link, setInsta_link] = useState('')
    const [twitter_link, setTwitter_link] = useState('')
    const [linkdin_link, setLinkdin_link] = useState('')
    const [accident_insurance_number, setAccident_insurance_number] = useState('') //accident insurance number
    const [userReg, setUserReg] = useState(false);
    const [focused, setFocused] = useState(false);
    const [x, setX] = useState(false)


    const values = async () => {
        try {
            await axios
                .get(`${process.env.REACT_APP_URL}/account/profile/${id}`)
                .then(res => {
                    setData(res.data.data)
                    // setFilename(res.data.data.filename)
                    setEmail(res.data.data.email)
                    setPhone_number(res.data.data.phone_number)
                    setEmergency_contact(res.data.data.emergency_contact)
                    setRelation_emergency_contact(res.data.data.relation_emergency_contact)
                    setFname(res.data.data.fname)
                    setGender(res.data.data.gender)
                    setLname(res.data.data.lname)
                    setDate_of_birth(res.data.data.date_of_birth)
                    setBlood_group(res.data.data.blood_group)
                    setOccupation(res.data.data.occupation)
                    setFacebook_link(res.data.data.facebook_link)
                    setInsta_link(res.data.data.insta_link)
                    setLinkdin_link(res.data.data.linkdin_link)
                    setAccident_insurance_number(res.data.data.accident_insurance_number)
                    setAbout_you(res.data.data.about_you)
                    setTwitter_link(res.data.data.twitter_link)
                })
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        values()
    }, [])

    const handleFocus = (e) => {
        setFocused(true);
    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const handleClick = async (e) => {
        setX(true)
        e.preventDefault();
        const id = localStorage.getItem('uuid')
        const data = { uuid: id, fname, lname, email, filename, phone_number, about_you, date_of_birth, blood_group, occupation, gender, facebook_link, insta_link, twitter_link, linkdin_link, accident_insurance_number, emergency_contact, relation_emergency_contact };
        // console.log(data)
        const res = await fetch(`${process.env.REACT_APP_URL}/account/edit_profile`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }).then(() => {
            console.log('Data Send');
            // console.log(data)
            setUserReg(true);
        })
    }

    function onChangeValue(e) {
        setGender(e.target.value);
    }

    return (
        <div>
            {userReg ? (
                <Redirect to='/profile' />
            ) : (
                <div className='font-serif text-white mt-32 mb-20'>
                    <h1 className='text-center text-5xl mb-4'>{fname + " " + lname}</h1>
                    <div className="image-upload xl:ml-96 ml-32 mb-8">
                        <label for="file-input">
                            <img className='rounded-t-3xl rounded-b-3xl md:w-60 w-36 xl:ml-64 md:ml-40 border-8 border-white' src={`${process.env.REACT_APP_URL}/${localStorage.getItem("Photo")}`} alt='' />
                        </label>

                        {/* <input id="file-input" type="file" onChange={(e) => setFilename(e.target.files[0])} /> */}
                    </div>
                    <div className="xl:ml-72 xl:mr-72 ml-6 mr-8">
                        <div className='border border-black container'>
                            <h3 className='mb-2 mt-3 xl:ml-44 ml-20 text-xl'>Profile Details</h3>
                            <hr />
                            <div className="grid grid-cols-3 gap-32 xl:ml-20 md:ml-20 ml-4 mr-10 md:text-lg text-xs row">
                                <div className="col">
                                    <h2 className='m' style={{ whiteSpace: 'nowrap' }}>Full Name</h2>
                                    <h2 className='m'>Email ID</h2>
                                    <h2 className='m' style={{ whiteSpace: 'nowrap' }}>Mobile Number</h2>
                                    <h2 className='m' style={{ whiteSpace: 'nowrap' }}>Emergency Contact</h2>
                                    <h2 className='m' style={{ whiteSpace: 'nowrap' }}>E-Contact Relation</h2>
                                    <h2 className='m pt-1'>Gender</h2>
                                    <h2 className='md:pt-0 pt-16 m' style={{ whiteSpace: 'nowrap' }}>Blood Group</h2>
                                    <h2 className='m'>Date of Birth</h2>
                                    <h2 className='m' style={{ whiteSpace: 'nowrap' }}>Insurance Number</h2>
                                    <h2 className='m'>Occupation</h2>
                                    <h2 className='md:pt-0 pt-2 m' style={{ whiteSpace: 'nowrap' }}>Facebook Id</h2>
                                    <h2 className='md:pt-0 m' style={{ whiteSpace: 'nowrap' }}>Instagram Id</h2>
                                    <h2 className='md:pt-0 m' style={{ whiteSpace: 'nowrap' }}>Twitter Id</h2>
                                    <h2 className='md:pt-0 pt-1 m'>Linkedin Id</h2>
                                    <h2 className='m'>About You</h2>
                                </div>
                                <div className="col-span-2 mr-40 mt-3">
                                    <form onSubmit={handleClick}>
                                        <div className='row mt-2'>
                                            <div className='col'>
                                                <input type="text" id="firstName" className="form-control form-control-lg md:pl-4 md:pr-4 pl-1 pr-1" value={fname}
                                                    onChange={(e) => setFname(e.target.value)} required />
                                            </div>
                                            <div className='col'>
                                                <input type="text" id="firstName" className="form-control form-control-lg md:pl-4 md:pr-4 pl-1 pr-1" value={lname}
                                                    onChange={(e) => setLname(e.target.value)} required />
                                            </div>
                                        </div>
                                        <div className='editform'>
                                            <input type="email" id="emailaddress"
                                                className="form-control form-control-lg border-none mt-2 md:pl-4 md:pr-4 pl-1 pr-1" value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required={true}
                                                onBlur={handleFocus}
                                                focused={x ? focused.toString() : ''} />
                                            <span>⚠ It should be a valid email address!</span>
                                        </div>
                                        <div className='editform'>
                                            <input type="tel" id="phone_number"
                                                className="form-control form-control-lg mt-2 md:pl-4 md:pr-4 pl-1 pr-1" value={phone_number}
                                                onChange={(e) => setPhone_number(e.target.value)}
                                                required={true}
                                                onBlur={handleFocus}
                                                focused={x ? focused.toString() : ''} />
                                            <span>⚠ Phone number is required</span>
                                        </div>
                                        <div className='editform'>
                                            <input type="tel" id="emergency_contact"
                                                className="form-control form-control-lg mt-2 md:pl-4 md:pr-4 pl-1 pr-1" value={emergency_contact}
                                                onChange={(e) => setEmergency_contact(e.target.value)}
                                                required={true}
                                                onBlur={handleFocus}
                                                focused={x ? focused.toString() : ''} />
                                            <span>⚠ Emergency Contact Relation is required</span>
                                        </div>
                                        <div className='editform'>
                                            <input type="text" id="relation_emergency_contact"
                                                className="form-control form-control-lg mt-2 md:pl-4 md:pr-4 pl-1 pr-1" value={relation_emergency_contact}
                                                onChange={(e) => setRelation_emergency_contact(e.target.value)}
                                                required={true}
                                                onBlur={handleFocus}
                                                focused={x ? focused.toString() : ''} />
                                            <span>⚠ Emergency Contact Relation is required</span>
                                        </div>
                                        <div className="mb-1 mt-2" onChange={onChangeValue}>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="inlineRadioOptions"
                                                    id="femaleGender"
                                                    value="Female"
                                                    checked={gender === "Female"}
                                                />
                                                <label className="form-check-label" htmlFor="femaleGender">Female</label>
                                            </div>

                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="inlineRadioOptions"
                                                    id="maleGender"
                                                    value="Male"
                                                    checked={gender === "Male"}
                                                />
                                                <label className="form-check-label" htmlFor="maleGender">Male</label>
                                            </div>

                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="inlineRadioOptions"
                                                    id="otherGender"
                                                    value="Other"
                                                    checked={gender === "Other"}
                                                />
                                                <label className="form-check-label" htmlFor="otherGender">Other</label>

                                            </div>
                                        </div>

                                        <select className="form-control form-control-lg mt-2" name="form-label" id="blood_group"
                                            onChange={(e) => setBlood_group(e.target.value)} placeholder='Choose blood group' value={blood_group}>
                                            <option value="A+">A+</option>
                                            <option value="B+">B+</option>
                                            <option value="AB+">AB+</option>
                                            <option value="O+">O+</option>
                                            <option value="A-">A-</option>
                                            <option value="B-">B-</option>
                                            <option value="AB-">AB-</option>
                                            <option value="O-">O-</option>
                                        </select>
                                        <div className='editform'>
                                            <input type="date" id="date_of_birth"
                                                className="form-control form-control-lg mt-2 md:pl-4 md:pr-4 pl-1 pr-1" value={date_of_birth}
                                                onChange={(e) => setDate_of_birth(e.target.value)}
                                                required={true}
                                                onBlur={handleFocus}
                                                focused={x ? focused.toString() : ''} />
                                            <span>⚠ Date of Birth is required</span>
                                        </div>
                                        <input type="text" id="accident_insurance_number"
                                            className="form-control form-control-lg mt-2 md:pl-4 md:pr-4 pl-1 pr-1" value={accident_insurance_number}
                                            onChange={(e) => setAccident_insurance_number(e.target.value)} />
                                        <div className='editform'>
                                            <input type="text" id="occupation"
                                                className="form-control form-control-lg mt-2 md:pl-4 md:pr-4 pl-1 pr-1" value={occupation}
                                                onChange={(e) => setOccupation(e.target.value)}
                                                required={true}
                                                onBlur={handleFocus}
                                                focused={x ? focused.toString() : ''} />
                                            <span>⚠ Occupation is required</span>
                                        </div>
                                        <input type="text" id="facebook_link"
                                            className="form-control form-control-lg mt-2 md:pl-4 md:pr-4 pl-1 pr-1" value={facebook_link}
                                            onChange={(e) => setFacebook_link(e.target.value)} />
                                        <input type="text" id="insta_link"
                                            className="form-control form-control-lg mt-2 md:pl-4 md:pr-4 pl-1 pr-1" value={insta_link}
                                            onChange={(e) => setInsta_link(e.target.value)} />
                                        <input type="text" id="twitter_link"
                                            className="form-control form-control-lg mt-2 md:pl-4 md:pr-4 pl-1 pr-1" value={twitter_link}
                                            onChange={(e) => setTwitter_link(e.target.value)} />
                                        <input type="text" id="linkdin_link"
                                            className="form-control form-control-lg mt-2 md:pl-4 md:pr-4 pl-1 pr-1" value={linkdin_link}
                                            onChange={(e) => setLinkdin_link(e.target.value)} />
                                        <input type="text" id="about_you"
                                            className="form-control form-control-lg mt-2 md:pl-4 md:pr-4 pl-1 pr-1" value={about_you}
                                            onChange={(e) => setAbout_you(e.target.value)} />
                                        <div className='mt-4'>
                                            <button onClick={(e) => setX(true)} className='btn bg-orange-600 py-2 xl:px-40 px-6 mb-8 text-lg text-white mr-5 xl:mr-10'>Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div >

            )}
        </div>
    )
}

export default ProfileEdit;