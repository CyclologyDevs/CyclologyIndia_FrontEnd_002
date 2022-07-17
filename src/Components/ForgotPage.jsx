// import React, { useState } from 'react'
// import { useForm } from 'react-hook-form';
// import '../CSS_Style/signup.css'
// // import axios from 'axios';
// import { Link } from 'react-router-dom'

// function ForgotPage() {

//   const [email, setEmail] = useState('');
//   const [isPending, setIsPending] = useState(false);
//   const [success, setSuccess] = useState(false);


//   const { handleSubmit } = useForm();

//   const onSubmit = (e) => {
//     // e.preventDefault();
//     const data = { email };

//     setIsPending(true);

//     fetch(`${process.env.REACT_APP_URL}/account/resetpassword`, {
//       method: 'POST',
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data)
//     }).then(() => {
//       console.log('Data Send');
//       setIsPending(false);
//       setSuccess(true);
//     })
//   }

//   return (
//     <div className='gradient-custom'>
//       {success ?
//         (
//           <section className="vh-100 text-white font-serif">
//             <div className="mask d-flex align-items-center h-100">
//               <div className="container h-100">
//                 <div className="row d-flex justify-content-center align-items-center h-100">
//                   <div className="col-12 col-md-9 col-lg-7 col-xl-6">
//                     <div className="card" style={{ borderRadius: '15px' }}>
//                       <div className="card-body p-5 rounded-lg">

//                         <h1 className='text-3xl text-white'>Link was send to your email</h1>
//                         <Link to='/'><button><u>Go to Home</u></button></Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         ) : (
//           <section className="vh-100 text-white font-serif">
//             <div className="mask d-flex align-items-center h-100">
//               <div className="container h-100">
//                 <div className="row d-flex justify-content-center align-items-center h-100">
//                   <div className="col-12 col-md-9 col-lg-7 col-xl-6">
//                     <div className="card" style={{ borderRadius: '15px' }}>
//                       <div className="card-body p-5 rounded-lg">
//                         <h2 className="mb-1 pb-2 pb-md-0 mb-md-3 text-5xl text-center">Forgot Password</h2>

//                         <form onSubmit={handleSubmit(onSubmit)}>
//                           <div className="form-outline mb-4">
//                             <label className="form-label text-white" htmlFor="form3Example1cg">Your Email</label>
//                             <input type="email" id="form3Example3cg" className="form-control form-control-lg"
//                               required
//                               value={email}
//                               onChange={(e) => setEmail(e.target.value)} />
//                           </div>

//                           <div className="d-flex justify-content-center">
//                             {!isPending && <button className="rounded-full text-lg font-serif border-4 border-blue-800 hover:text-white py-2 px-20 bg-[#1814ff] hover:animate-pulse">Submit</button>}
//                             {isPending && <button disabled className="rounded-full text-lg font-serif border-4 border-blue-800 hover:text-white py-2 px-20 bg-[#1814ff] hover:animate-pulse">Submit..</button>}
//                           </div>
//                         </form>

//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         )
//       }
//     </div>
//   )
// }
// export default ForgotPage

import React from 'react'

function ForgotPage() {
  return (
    <p className='text-center text-white text-5xl md:m-40 m-20 font-serif'>Work on progress</p>
  )
}

export default ForgotPage