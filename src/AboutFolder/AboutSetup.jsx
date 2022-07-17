import React from 'react';
import '../CSS_Style/about.css';
// import ArnabPic from '../images/arnabPic.jpg';
// import PinakiPic from '../images/pinakiPic.jpg';
// import aboutpic from '../images/aboutpic.jpg';
// import closeButton from '../images/x-circle-fill.svg';
// import facebookimg from '../images/facebookimg.jpeg';
// import instagramimg from '../images/instagramimg.webp';
// import linkedinimg from '../images/linkedinimg.jpeg';
// import twitterimg from '../images/twitterimg.png';


function AboutSetup() {
    return (
        <div>
            <div className='mt-20 font-serif'>
                <div className='main-about mb-32'>
                    <div className='AboutUsHeading text-white'>
                        <h2 className='font-serif'>About Us</h2>
                    </div>
                    <div className='about-content text-white'>
                        <h4 className='font-serif text-lg'>
                            The name of the community- <span className='font-bold'>CYCLOLOGY INDIA</span> is derived from the two words <span>'cycle'</span> and 'logy'
                            which means the knowledge of cycling. The word Cyclology stands for everything that
                            cycling is and what we can achieve on a cycle.
                            For this reason our tagline is <span className='font-bold'>RIDE EXPLORE INSPIRE</span> .
                            The whole aim of Cyclology team is to celebrate sheer Joy of
                            cycling coupled with  exploring with the help of cycling, reaching far off places,
                            educate about cycling and inspire communities to cycle so that everyone can reap its benefits.
                            The logo uses the color of the sky and the earth at different times of the day, symbolizing that
                            cycling is well connected with both and can be done at any time of the day. We have made sure
                            to keep the structure of the cycling frame as simple as possible  because Cyclology India is for
                            everyone whether you are an adventurer on your MTB or a speed racer or an individual who is in
                            love with cycles and exploring every nook and cranny on them and maintaining a healthy sustainable lifestyle.
                        </h4>
                    </div>
                    {/* <div className='container row'>
                        <div className='col-lg-2 md:ml-10 pictures mt-5'>
                            <div>
                                <img className='w-60 rounded-full md:ml-0 ml-10' src={ArnabPic} alt='' data-bs-toggle="modal" data-bs-target="#exampleModal1" />
                                <p className='text-white mt-4 text-2xl text-center'>Arnab Patra</p>
                                <p className='text-white text-2xl text-center'>Founder Member</p>
                                <div className='flex space-x-4 footer mt-3 mb-4 justify-center'>
                                    <div className='img1'>
                                        <a href='https://www.facebook.com/arnab.patra' className='mt-2 img1'>
                                            <img className='rounded-full' src={facebookimg} alt='' style={{ height: '35px', width: '35px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.strava.com/clubs/Cyclology' className='mt-2 img2'>
                                            <img className='rounded-t-xl rounded-b-xl' src={instagramimg} alt='' style={{ height: '35px', width: '35px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.instagram.com/cyclologyindia/' className='mt-2'>
                                            <img className='rounded-full' src={twitterimg} alt='' style={{ height: '35px', width: '35px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.linkedin.com/in/arnabpatra/' className='mt-2'>
                                            <img className='rounded-full' src={linkedinimg} alt='' style={{ height: '35px', width: '35px' }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content bg-black text-white">
                                        <div className='Modal-image'>
                                            <button type="button" style={{ float: 'right' }} data-bs-dismiss="modal" aria-label="Close"><img className='w-8 mt-3 bg-white rounded-full' src={closeButton} alt=''></img></button>
                                            <img src={ArnabPic} alt='about-image1' className='rounded-full md:w-52 w-40'></img>
                                            <p className='mt-4'>
                                                Person 1
                                                places, educate about cycling and inspire communities to cycle so that everyone can reap its benefits.
                                                The logo uses the color of the sky and the earth at different times of the day, symbolizing that cycling
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2 md:ml-10 pictures mt-5'>
                            <div>
                                <img className='w-60 rounded-full md:ml-0 ml-10' src={ArnabPic} alt='' data-bs-toggle="modal" data-bs-target="#exampleModal1" />
                                <p className='text-white mt-4 text-2xl text-center'>Arnab Patra</p>
                                <p className='text-white text-2xl text-center'>Founder Member</p>
                                <div className='flex space-x-4 footer mt-3 mb-4 justify-center'>
                                    <div className='img1'>
                                        <a href='https://www.facebook.com/arnab.patra' className='mt-2 img1'>
                                            <img className='rounded-full' src={facebookimg} alt='' style={{ height: '35px', width: '35px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.strava.com/clubs/Cyclology' className='mt-2 img2'>
                                            <img className='rounded-t-xl rounded-b-xl' src={instagramimg} alt='' style={{ height: '35px', width: '35px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.instagram.com/cyclologyindia/' className='mt-2'>
                                            <img className='rounded-full' src={twitterimg} alt='' style={{ height: '35px', width: '35px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.linkedin.com/in/arnabpatra/' className='mt-2'>
                                            <img className='rounded-full' src={linkedinimg} alt='' style={{ height: '35px', width: '35px' }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content bg-black text-white">
                                        <div className='Modal-image'>
                                            <button type="button" style={{ float: 'right' }} data-bs-dismiss="modal" aria-label="Close"><img className='w-8 mt-3 bg-white rounded-full' src={closeButton} alt=''></img></button>
                                            <img src={ArnabPic} alt='about-image1' className='rounded-full md:w-52 w-40'></img>
                                            <p className='mt-4'>
                                                Person 1
                                                places, educate about cycling and inspire communities to cycle so that everyone can reap its benefits.
                                                The logo uses the color of the sky and the earth at different times of the day, symbolizing that cycling
                                                is well connected with both and can be done at any time of the day. We have made sure to keep the structure of
                                                the cycling frame as simple as possible because Cyclology India is for everyone whether you are an adventurer
                                                on your MTB or a speed racer or an individual
                                                who is in love with cycles and exploring every nook and cranny on them and maintaining a
                                                healthy sustainable lifestyle.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2 md:ml-10 pictures mt-5'>
                            <div>
                                <img className='w-60 rounded-full md:ml-0 ml-10' src={ArnabPic} alt='' data-bs-toggle="modal" data-bs-target="#exampleModal1" />
                                <p className='text-white mt-4 text-2xl text-center'>Arnab Patra</p>
                                <p className='text-white text-2xl text-center'>Founder Member</p>
                                <div className='flex space-x-4 footer mt-3 mb-4 justify-center'>
                                    <div className='img1'>
                                        <a href='https://www.facebook.com/arnab.patra' className='mt-2 img1'>
                                            <img className='rounded-full' src={facebookimg} alt='' style={{ height: '35px', width: '35px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.strava.com/clubs/Cyclology' className='mt-2 img2'>
                                            <img className='rounded-t-xl rounded-b-xl' src={instagramimg} alt='' style={{ height: '35px', width: '35px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.instagram.com/cyclologyindia/' className='mt-2'>
                                            <img className='rounded-full' src={twitterimg} alt='' style={{ height: '35px', width: '35px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.linkedin.com/in/arnabpatra/' className='mt-2'>
                                            <img className='rounded-full' src={linkedinimg} alt='' style={{ height: '35px', width: '35px' }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content bg-black text-white">
                                        <div className='Modal-image'>
                                            <button type="button" style={{ float: 'right' }} data-bs-dismiss="modal" aria-label="Close"><img className='w-8 mt-3 bg-white rounded-full' src={closeButton} alt=''></img></button>
                                            <img src={ArnabPic} alt='about-image1' className='rounded-full md:w-52 w-40'></img>
                                            <p className='mt-4'>
                                                Person 1
                                                places, educate about cycling and inspire communities to cycle so that everyone can reap its benefits.
                                                The logo uses the color of the sky and the earth at different times of the day, symbolizing that cycling
                                                is well connected with both and can be done at any time of the day. We have made sure to keep the structure of
                                                the cycling frame as simple as possible because Cyclology India is for everyone whether you are an adventurer
                                                on your MTB or a speed racer or an individual
                                                who is in love with cycles and exploring every nook and cranny on them and maintaining a
                                                healthy sustainable lifestyle.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2 md:ml-10 pictures mt-5'>
                            <div>
                                <img className='w-60 rounded-full md:ml-0 ml-10' src={ArnabPic} alt='' data-bs-toggle="modal" data-bs-target="#exampleModal1" />
                                <p className='text-white mt-4 text-2xl text-center'>Arnab Patra</p>
                                <p className='text-white text-2xl text-center'>Founder Member</p>
                                <div className='flex space-x-4 footer mt-3 mb-4 justify-center'>
                                    <div className='img1'>
                                        <a href='https://www.facebook.com/arnab.patra' className='mt-2 img1'>
                                            <img className='rounded-full' src={facebookimg} alt='' style={{ height: '35px', width: '35px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.strava.com/clubs/Cyclology' className='mt-2 img2'>
                                            <img className='rounded-t-xl rounded-b-xl' src={instagramimg} alt='' style={{ height: '35px', width: '35px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.instagram.com/cyclologyindia/' className='mt-2'>
                                            <img className='rounded-full' src={twitterimg} alt='' style={{ height: '35px', width: '35px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.linkedin.com/in/arnabpatra/' className='mt-2'>
                                            <img className='rounded-full' src={linkedinimg} alt='' style={{ height: '35px', width: '35px' }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content bg-black text-white">
                                        <div className='Modal-image'>
                                            <button type="button" style={{ float: 'right' }} data-bs-dismiss="modal" aria-label="Close"><img className='w-8 mt-3 bg-white rounded-full' src={closeButton} alt=''></img></button>
                                            <img src={ArnabPic} alt='about-image1' className='rounded-full md:w-52 w-40'></img>
                                            <p className='mt-4'>
                                                Person 1
                                                places, educate about cycling and inspire communities to cycle so that everyone can reap its benefits.
                                                The logo uses the color of the sky and the earth at different times of the day, symbolizing that cycling
                                                is well connected with both and can be done at any time of the day. We have made sure to keep the structure of
                                                the cycling frame as simple as possible because Cyclology India is for everyone whether you are an adventurer
                                                on your MTB or a speed racer or an individual
                                                who is in love with cycles and exploring every nook and cranny on them and maintaining a
                                                healthy sustainable lifestyle.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2 md:ml-10 pictures mt-5'>
                            <div>
                                <img className='w-60 rounded-full md:ml-0 ml-10' src={ArnabPic} alt='' data-bs-toggle="modal" data-bs-target="#exampleModal1" />
                                <p className='text-white mt-4 text-2xl text-center'>Arnab Patra</p>
                                <p className='text-white text-2xl text-center'>Founder Member</p>
                                <div className='flex space-x-4 footer mt-3 mb-4 justify-center'>
                                    <div className='img1'>
                                        <a href='https://www.facebook.com/arnab.patra' className='mt-2 img1'>
                                            <img className='rounded-full' src={facebookimg} alt='' style={{ height: '35px', width: '35px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.strava.com/clubs/Cyclology' className='mt-2 img2'>
                                            <img className='rounded-t-xl rounded-b-xl' src={instagramimg} alt='' style={{ height: '35px', width: '35px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.instagram.com/cyclologyindia/' className='mt-2'>
                                            <img className='rounded-full' src={twitterimg} alt='' style={{ height: '35px', width: '35px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.linkedin.com/in/arnabpatra/' className='mt-2'>
                                            <img className='rounded-full' src={linkedinimg} alt='' style={{ height: '35px', width: '35px' }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content bg-black text-white">
                                        <div className='Modal-image'>
                                            <button type="button" style={{ float: 'right' }} data-bs-dismiss="modal" aria-label="Close"><img className='w-8 mt-3 bg-white rounded-full' src={closeButton} alt=''></img></button>
                                            <img src={ArnabPic} alt='about-image1' className='rounded-full md:w-52 w-40'></img>
                                            <p className='mt-4'>
                                                Person 1
                                                places, educate about cycling and inspire communities to cycle so that everyone can reap its benefits.
                                                The logo uses the color of the sky and the earth at different times of the day, symbolizing that cycling
                                                is well connected with both and can be done at any time of the day. We have made sure to keep the structure of
                                                the cycling frame as simple as possible because Cyclology India is for everyone whether you are an adventurer
                                                on your MTB or a speed racer or an individual
                                                who is in love with cycles and exploring every nook and cranny on them and maintaining a
                                                healthy sustainable lifestyle.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default AboutSetup;