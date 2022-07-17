import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, Redirect } from 'react-router-dom';
import '../CSS_Style/signup.css'
import Loadergif from '../Components/Loadergif';


function Login(props) {

  const {  handleSubmit } = useForm();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userlogin, setUserlogin] = useState(false);
  const [load, setload] = useState(false)

  const onSubmit = async (e) => {
    // e.preventDefault();
    const Data = { email, password };
    setload(true)
    await fetch(`${process.env.REACT_APP_URL}/account/login`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Data)
    })
      .then(async (response) => {
        if (response.status / 100 == 4) {
          window.alert("Invalid Credentials");
          setload(false)
          window.location.reload();
        }
        const datas = await response.json()
        // console.log(datas.body)
        localStorage.setItem("uuid", datas.user.uuid);
        localStorage.setItem("email", datas.user.email);
        localStorage.setItem("athlete_id", datas.user.athlete_id);
        localStorage.setItem("Photo", datas.Photo);
        console.log('Data Send');
        localStorage.setItem("token", datas.jwt);
        if (localStorage.getItem('token') == null) {
          setload(false)
          window.location.reload();
          window.alert("Invalid Credentials");
        } else {
          window.alert("Login Successful");
          setload(false)
          setUserlogin(true);
          window.location.reload();
          // Token is generated When we Logged In.
        }
      })
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
      {userlogin ? (
        <Redirect to='/' />
      ) : (
        <section className="vh-100 text-white font-serif">
          <div className="mask d-flex align-items-center h-100">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card bg-black" style={{ borderRadius: '15px' }}>
                    <div className="card-body p-5 rounded-lg">
                      <h2 className="mb-1 pb-2 pb-md-0 mb-md-3 text-5xl text-center">Login</h2>

                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-outline mb-2">
                          <label className="form-label" htmlFor="form3Example1cg">Your Email</label>
                          <input type="email" id="form3Example3cg" className="form-control form-control-lg" required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="form-outline mb-2">
                          <label className="form-label" htmlFor="form3Example3cg">Password</label>
                          <input type={checkpwd ? 'password' : 'text'} id="form3Example4cg" className="form-control form-control-lg" required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
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

                          <div className="col d-flex justify-content-end md:text-lg text-sm" >
                            <Link to="/forgot">Forgot password?</Link>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center">
                          <button className="rounded-full text-lg font-serif border-4 border-blue-800 hover:text-white py-2 px-20 bg-[#1814ff]">Submit</button>
                        </div>
                        <p className="text-center text-white mt-3 mb-0 font-serif">Not registered?? <Link to="/register" className="fw-bold text-body"><u className='text-white pl-1'>Create here</u></Link></p>
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
      {load ? <Loadergif /> : ''}
    </div>
  )
}
export default Login