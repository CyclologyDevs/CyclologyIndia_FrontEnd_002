import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import '../CSS_Style/signup.css'
// import axios from 'axios';
import { Link } from 'react-router-dom'

function UpdatePassword() {

    const [password, setPassword] = useState('');
    const [conpassword, setConpassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [statusCode, setStatusCode] = useState('');

    const { handleSubmit } = useForm();

    const URL = new URLSearchParams(window.location.search);
    console.log("\ntoken => " + URL.get('token'));
    const token = URL.get('token');
    console.log(token)


    const [focused, setFocused] = useState(false);
    const [x, setX] = useState(false)

    const handleFocus = (e) => {
        setFocused(true);
    };

    const onSubmit = (e) => {
        // e.preventDefault();
        setX(true)
        const data = { password, token };

        // console.log(password + " " + conpassword)

        if (password == conpassword) {
            fetch(`${process.env.REACT_APP_URL}/account/updatepassword`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            }).then((res) => {
                console.log('Data Send');
                setSuccess(true);
                setStatusCode(res.status / 100)
            })
        }
        else {
            window.alert('Password not matched!')
        }
    }

    const [checkpwd, setCheckpwd] = useState(true);

    const selectCheckbox = (e) => {
        const checked = e.target.checked;
        if (checked) {
            setCheckpwd(false)
        } else {
            setCheckpwd(true)
        }
    };


    return (
        <div className='gradient-custom'>
            {success ?
                (
                    <section className="vh-100 text-white font-serif">
                        <div className="mask d-flex align-items-center h-100">
                            <div className="container h-100">
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                        <div className="card" style={{ borderRadius: '15px' }}>
                                            <div className="card-body p-5 rounded-lg">

                                                {statusCode == 2 ? (
                                                    <>
                                                        <h1 className='text-3xl text-white'>Your password successfully changed</h1>
                                                        <Link to='/login'><button><u>Go to Login</u></button></Link>
                                                    </>
                                                ) : (
                                                    <h1>Try again</h1>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <section className="vh-100 text-white font-serif">
                        <div className="mask d-flex align-items-center h-100">
                            <div className="container h-100">
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                        <div className="card mt-14" style={{ borderRadius: '15px' }}>
                                            <div className="card-body p-5 rounded-lg">
                                                <h2 className="mb-1 pb-2 pb-md-0 mb-md-3 text-5xl text-center">Update Password</h2>

                                                <form onSubmit={handleSubmit(onSubmit)}>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="form3Example3cg">Password</label>
                                                        <input type={checkpwd ? 'password' : 'text'} id="form3Example4cg" className="form-control form-control-lg"
                                                            value={password}
                                                            required={true}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            pattern={`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,20}$`}
                                                            onBlur={handleFocus}
                                                            focused={x ? focused.toString() : ''} />
                                                        <span>⚠ Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters</span>
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="form3Example3cg">Confirm Password</label>
                                                        <input type={checkpwd ? 'password' : 'text'} id="conpassword" className="form-control form-control-lg"
                                                            value={conpassword}
                                                            onChange={(e) => setConpassword(e.target.value)}
                                                            pattern={`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,20}$`}
                                                            required={true}
                                                            onBlur={handleFocus}
                                                            focused={x ? focused.toString() : ''} />
                                                        <span>⚠ Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters</span>
                                                    </div>

                                                    <div className="flex mb-2">
                                                        <div className="col d-flex justify-content-start md:text-lg text-sm">
                                                            <input
                                                                className="form-check-input me-2"
                                                                type="checkbox"
                                                                value=""
                                                                id="form2Example3c"
                                                                onClick={(e) => {
                                                                    selectCheckbox(e);
                                                                }}
                                                            />
                                                            <label className="form-check-label" htmlFor="form2Example3">Show Password</label>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex justify-content-center">
                                                        <button className="rounded-full text-lg font-serif border-4 border-blue-800 hover:text-white py-2 px-20 bg-[#1814ff]">Submit</button>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }
        </div>
    )
}
export default UpdatePassword