import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../CSS_Style/signup.css'
import closeButton from '../images/x-lg.svg'
import Loadergif from '../Components/Loadergif';
var axios = require('axios');
var FormData = require('form-data');
// var fs = require('fs');

function Register() {

    const { handleSubmit } = useForm();

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [filename, setFilename] = useState('');
    const [password, setPassword] = useState('');
    const [conpassword, setConpassword] = useState('');
    const [about_you, setAbout_you] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [emergency_contact, setEmergency_contact] = useState('');
    const [relation_emergency_contact, setRelation_emergency_contact] = useState('')
    const [date_of_birth, setDate_of_birth] = useState('');
    const [blood_group, setBlood_group] = useState('O+');
    const [occupation, setOccupation] = useState('Enginner')
    const [gender, setGender] = useState('')
    const [facebook_link, setFacebook_link] = useState('')
    const [insta_link, setInsta_link] = useState('')
    const [twitter_link, setTwitter_link] = useState('')
    const [linkdin_link, setLinkdin_link] = useState('')
    const [accident_insurance_number, setAccident_insurance_number] = useState('') //accident insurance number
    const [userReg, setUserReg] = useState(false);
    const [focused, setFocused] = useState(false);
    const [x, setX] = useState(false)
    const [load, setload]= useState(false)


    function onChangeValue(e) {
        setGender(e.target.value);
    }

    var data = new FormData();
    data.append('filename', filename);
    data.append('fname', fname);
    data.append('lname', lname);
    data.append('email', email);
    data.append('password', password);
    data.append('phone_number', phone_number);
    data.append('gender', gender);
    data.append('date_of_birth', date_of_birth);
    data.append('blood_group', blood_group);
    data.append('emergency_contact', emergency_contact);
    data.append('relation_emergency_contact', relation_emergency_contact);
    data.append('insta_link', insta_link);
    data.append('facebook_link', facebook_link);
    data.append('twitter_link', twitter_link);
    data.append('linkdin_link', linkdin_link);
    data.append('occupation', occupation);
    data.append('about_you', about_you);
    data.append('accident_insurance_number', accident_insurance_number);


    const onSubmit = async (e) => {
        if (phone_number.length != 10 || emergency_contact.length != 10) {
            return window.alert('Phone number not valid')
        }

        if (phone_number == emergency_contact) {
            return window.alert('Phone number and Emergency number should be different!!!')
        }

        setX(true)
        if (password === conpassword) {
            setload(true)
            axios.post(`${process.env.REACT_APP_URL}/account/register`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    mode: 'no-cors',
                }
            })
                .then((res) => {
                    // console.log("_________________________________________login post response")
                    // console.log(res);
                    window.alert("Registered Successfully");
                    setload(false)
                    setUserReg(true);
                    window.location.reload();
                })
                .catch((err) => {
                    // console.log("_________________________________________error response")
                    // console.log(err.message);
                    setload(false)
                    window.alert("Email is already used");
                })
        }
        else {
            window.alert('Password not matched!')
        }
    }

    const [checkpwd, setCheckpwd] = useState(true);
    const [concheckpwd, setConcheckpwd] = useState(true);


    const handleFocus = (e) => {
        setFocused(true);
    };


    const selectCheckbox = (e) => {
        const checked = e.target.checked;
        if (checked) {
            setCheckpwd(false)
        } else {
            setCheckpwd(true)
        }
    };

    const selectConcheckbox = (e) => {
        const checked = e.target.checked;
        if (checked) {
            setConcheckpwd(false)
        } else {
            setConcheckpwd(true)
        }
    };

    return (
        
        <div className='gradient-custom'>
               
            {userReg ? (
                <Redirect to='/login' />
            ) : (
                <section className="pt-14 bg-transparent font-serif">
                    <div className="container py-5 h-100">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-12 col-lg-9 col-xl-7">
                                <div className="card shadow-2-strong card-registration bg-black">
                                    <div className="card-body rounded-lg md:pl-6 md:pr-6 p-8 text-white">
                                        <h3 className="mb-1 pb-2 pb-md-0 mb-md-3 text-5xl text-center">Registration Form</h3>
                                        <p className='px-2 md:text-lg text-sm mb-2 text-center'>*Please check the details before submitting</p>
                                        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" autoSave='off' className='md:pl-8 md:pr-8'>
                                            <div className="row">
                                                <div className="col-md-6 mb-1">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="firstName">*First Name</label>
                                                        <input type="text" autoComplete="nope" autoSave='nope' id="firstName" className="form-control form-control-lg"
                                                            onChange={(e) => setFname(e.target.value)}
                                                            required={true}
                                                            onBlur={handleFocus}
                                                            focused={x ? focused.toString() : ''} />
                                                        <span>⚠ First name is required</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-1">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="lastName">*Last Name</label>
                                                        <input type="text" autoComplete="nope" autoSave='nope' id="lastName" className="form-control form-control-lg"
                                                            onChange={(e) => setLname(e.target.value)}
                                                            required={true}
                                                            onBlur={handleFocus}
                                                            focused={x ? focused.toString() : ''} />
                                                        <span>⚠ Last name is required</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="emailaddress">*Email</label>
                                                        <input type="email" autoComplete="nope" autoSave='nope' id="emailaddress" className="form-control form-control-lg"
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            required={true}
                                                            onBlur={handleFocus}
                                                            focused={x ? focused.toString() : ''} />
                                                        <span>⚠ It should be a valid email address!</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="myFile">*Upload your Image</label>
                                                        <input type="file" id="filename" className="form-control form-control-lg"
                                                            onChange={(e) => setFilename(e.target.files[0])}
                                                            required={true}
                                                            onBlur={handleFocus}
                                                            focused={x ? focused.toString() : ''} />
                                                        <span>⚠ Image is required</span>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="form3Example3cg">*Password</label>
                                                        <input autoComplete="nope" autoSave='nope' type={checkpwd ? 'password' : 'text'} id="password" className="form-control form-control-lg"
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            pattern={`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,20}$`}
                                                            required={true}
                                                            onBlur={handleFocus}
                                                            focused={x ? focused.toString() : ''} />
                                                        <span>⚠ Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters</span>
                                                    </div>

                                                    <div className="flex">
                                                        <div className="col d-flex justify-content-start md:text-lg text-sm mt-2">
                                                            <input
                                                                className="form-check-input me-2"
                                                                type="checkbox"
                                                                value=""
                                                                id="form2Example2c"
                                                                onClick={(e) => {
                                                                    selectCheckbox(e);
                                                                }}
                                                            />
                                                            <label className="form-check-label" htmlFor="form2Example3">Show Password</label>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="form3Example3cg">*Confirm Password</label>
                                                        <input autoComplete="nope" type={concheckpwd ? 'password' : 'text'} id="conpassword" className="form-control form-control-lg"
                                                            value={conpassword}
                                                            onChange={(e) => setConpassword(e.target.value)}
                                                            pattern={`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,20}$`}
                                                            required={true}
                                                            onBlur={handleFocus}
                                                            focused={x ? focused.toString() : ''} />
                                                        <span>⚠ Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters</span>
                                                    </div>
                                                    <div className="flex">
                                                        <div className="col d-flex justify-content-start md:text-lg text-sm">
                                                            <input
                                                                className="form-check-input me-2"
                                                                type="checkbox"
                                                                value=""
                                                                id="form2Example3c"
                                                                onClick={(e) => {
                                                                    selectConcheckbox(e);
                                                                }}
                                                            />
                                                            <label className="form-check-label" htmlFor="form2Example3">Show Password</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="phone_number">*Phone Number</label>
                                                        <input type="text" id="phone_number" className="form-control form-control-lg"
                                                            onChange={(e) => setPhone_number(e.target.value)}
                                                            pattern="[0-9]{10}"
                                                            required={true}
                                                            onBlur={handleFocus}
                                                            focused={x ? focused.toString() : ''} />
                                                        <span>⚠ Enter a valid Phone Number</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="emergency_contact">*Emergency Number</label>
                                                        <input type="text" id="emergency_contact" className="form-control form-control-lg"
                                                            onChange={(e) => setEmergency_contact(e.target.value)}
                                                            pattern="[0-9]{10}"
                                                            required={true}
                                                            onBlur={handleFocus}
                                                            focused={x ? focused.toString() : ''} />
                                                        <span>⚠ Emergency number is required</span>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-md-6 mb-1 d-flex align-items-center">
                                                    <div className="form-outline datepicker w-100">
                                                        <label className="form-label" htmlFor="text">*Emergency Contact Relation</label>
                                                        <input autoComplete="nope" type="text" id="relation_emergency_contact" className="form-control form-control-lg"
                                                            onChange={(e) => setRelation_emergency_contact(e.target.value)}
                                                            required={true}
                                                            onBlur={handleFocus}
                                                            focused={x ? focused.toString() : ''} />
                                                        <span>⚠ Emergency Contact Relation is required</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-1" onChange={onChangeValue}>
                                                    <h6 className="mb-2 pb-1 mt-2" id='gender'>*Gender: </h6>
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
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="phone_number">*Blood Group</label>
                                                        <select className="form-control form-control-lg" name="form-label" id="blood_group"
                                                            onChange={(e) => setBlood_group(e.target.value)} placeholder='Choose blood group'>
                                                            <option value="A+">A+</option>
                                                            <option value="B+">B+</option>
                                                            <option value="AB+">AB+</option>
                                                            <option value="O+">O+</option>
                                                            <option value="A-">A-</option>
                                                            <option value="B-">B-</option>
                                                            <option value="AB-">AB-</option>
                                                            <option value="O-">O-</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline datepicker w-100">
                                                        <label htmlFor="birthdayDate" className="form-label">*Birthday</label>
                                                        <input
                                                            type="Date"
                                                            className="form-control form-control-lg"
                                                            id="birthdayDate"
                                                            onChange={(e) => setDate_of_birth(e.target.value)}
                                                            required={true}
                                                            onBlur={handleFocus}
                                                            focused={x ? focused.toString() : ''} />
                                                        <span>⚠ Date of Birth is required</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="emailAddress">Facebook id</label>
                                                        <input autoComplete="nope" type="text" id="facebook_link" className="form-control form-control-lg"
                                                            onChange={(e) => setFacebook_link(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="phone_number">Instagram id</label>
                                                        <input autoComplete="nope" type="text" id="insta_link" className="form-control form-control-lg"
                                                            onChange={(e) => setInsta_link(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="emailAddress">Twitter id</label>
                                                        <input autoComplete="nope" type="text" id="twitter_link" className="form-control form-control-lg"
                                                            onChange={(e) => setTwitter_link(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="phone_number">Linkedin id</label>
                                                        <input autoComplete="nope" type="text" id="linkedin_link" className="form-control form-control-lg"
                                                            onChange={(e) => setLinkdin_link(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="text">*Occupation</label>
                                                        <input autoComplete="nope" type="text" id="occupation" className="form-control form-control-lg"
                                                            onChange={(e) => setOccupation(e.target.value)}
                                                            required={true}
                                                            onBlur={handleFocus}
                                                            focused={x ? focused.toString() : ''} />
                                                        <span>⚠ Occupation is required</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="emailAddress">Accident insurance number</label>
                                                        <input autoComplete="nope" type="text" id="accident_insurance_number" className="form-control form-control-lg"
                                                            onChange={(e) => setAccident_insurance_number(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="mb-1 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="phone_number">About you</label>
                                                        <textarea autoComplete="nope" type="text" id="about_you" className="form-control form-control-lg"
                                                            onChange={(e) => setAbout_you(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="form-check d-flex justify-content-center mb-3">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    value=""
                                                    id="form2Example4c"
                                                    required={true}
                                                />
                                                <label className="form-check-label" htmlFor="form2Example3">
                                                    I read & agree all statements in <a href="#!" data-bs-toggle="modal" data-bs-target="#exampleModal"><u className='space-y-2'>Terms of service</u></a>
                                                </label>
                                                {/* <!-- Modal --> */}
                                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog modal-dialog-centered">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                                <button type="button" style={{ float: 'right' }} data-bs-dismiss="modal" aria-label="Close"><img className='w-6' src={closeButton} alt=''></img></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                ...
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-primary text-black" data-bs-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-2 d-flex justify-content-center">
                                                <button className="rounded-full text-lg font-serif border-4 border-blue-800 hover:text-white py-2 px-20 bg-[#1814ff]" onClick={(e) => setX(true)} >Submit</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {load? <Loadergif />: ''}
        </div>
    )
}


export default Register