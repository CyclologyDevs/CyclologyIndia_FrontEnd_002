import React, { useEffect, useState } from 'react';
import './App.css';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Event from './MainPages/Event';
import Blog from './MainPages/Blog';
import Gallery from './MainPages/Gallery';
import Home from './MainPages/Home';
import MainAbout from './MainPages/MainAbout';
import Login from './MainPages/Login';


import OurMission from './AboutUs/OurMission';
import OurVision from './AboutUs/OurVision';
import CoreValue from './AboutUs/CoreValue';
import Bio from './AboutUs/Bio';

import Contact from './ContactUs/Contact';
import Partners from './ContactUs/Partners';
import Sponsorships from './ContactUs/Sponsorships';
import Support from './ContactUs/Support';

import CYCLOPLOGGING from './Cards/CYCLOPLOGGING';
import CYCLOENDURO from './Cards/CYCLOENDURO';
import CYCLOFIRECHAT from './Cards/CYCLOFIRECHAT';
import CYCLOTOURING from './Cards/CYCLOTOURING';
import Register from './MainPages/Register';
import ErrorPage from './MainPages/ErrorPage';

import Gallery1 from './DemoGallery/Gallery9';
import Gallery2 from './DemoGallery/Gallery10';
import Gallery3 from './DemoGallery/Gallery11';
import Gallery4 from './DemoGallery/Gallery12';
import Gallery5 from './DemoGallery/Gallery7';
import Gallery6 from './DemoGallery/Gallery8';
import Gallery7 from './DemoGallery/Gallery13'


import OngoingEvent from './Event/OngoingEvent';
import PreviousEvent from './Event/PreviousEvent';
import UpcomingEvent from './Event/UpcomingEvent';
import Event1 from './Event/Event1';
import WeeklyBoard from './Event/WeeklyBoard';
import Profile from './MainPages/Profile';
import ForgotPage from './Components/ForgotPage';
import Navbar from './Components/Navbar';
import Event2 from './Event/Event2';
import Event3 from './Event/Event3';
import Protectedroute from './MainPages/ProtectedRoute';
import ProfileEdit from './MainPages/ProfileEdit';
import ConnectStravaS from './Components/ConnectStravaS';
import UpdatePassword from './Components/UpdatePassword';
import Error from './MainPages/Error';



function App() {

  // Check If User is Logged In
  const [auth, setAuth] = useState(false);

  const isLoggedIn = async () => {
    if (localStorage.getItem("token") == null) {
      setAuth(false)
    }
    else {
      setAuth(true)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);


  return (
    <>
      <Router>
        <Navbar auth={auth} />
        <Switch>
          <Route exact path="/">
            <Home auth={auth} />
          </Route>
          <Route exact path="/event">
            <Event />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/mainabout">
            <MainAbout />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>

          <Route exact path="/error">
            <Error />
          </Route>

          <Protectedroute exact path="/login" component={Login} auth={!auth} />
          <Protectedroute exact path="/register" component={Register} auth={!auth} />
          <Protectedroute exact path="/profile" component={Profile} auth={auth} />
          <Protectedroute exact path="/forgot" component={ForgotPage} auth={!auth} />
          <Protectedroute exact path="/profileEdit" component={ProfileEdit} auth={auth} />
          <Protectedroute exact path="/profileStrava" auth={auth}>
            <Profile />
            <ConnectStravaS />
          </Protectedroute>

          <Route exact path="/update-password">
            <UpdatePassword />
          </Route>

          <Route exact path="/OurMission">
            <OurMission />
          </Route>
          <Route exact path="/OurVision">
            <OurVision />
          </Route>
          <Route exact path="/CoreValues">
            <CoreValue />
          </Route>
          <Route exact path="/Bio">
            <Bio />
          </Route>

          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/Partners">
            <Partners />
          </Route>
          <Route exact path="/Sponsorships">
            <Sponsorships />
          </Route>
          <Route exact path="/Support">
            <Support />
          </Route>


          <Route exact path="/Cycloplogging">
            <CYCLOPLOGGING />
          </Route>
          <Route exact path="/Cycloenduro">
            <CYCLOENDURO />
          </Route>
          <Route exact path="/Cyclofirechat">
            <CYCLOFIRECHAT />
          </Route>
          <Route exact path="/Cyclotouring">
            <CYCLOTOURING />
          </Route>

          {/* Gallery  */}

          <Route exact path="/cyclology-plogging">
            <Gallery1 />
          </Route>
          <Route exact path="/cyclology-touring">
            <Gallery2 />
          </Route>
          <Route exact path="/cyclology-enduro">
            <Gallery3 />
          </Route>
          <Route exact path="/cyclology-firesidechat">
            <Gallery4 />
          </Route>
          <Route exact path="/cyclology-decathlon">
            <Gallery5 />
          </Route>
          <Route exact path="/cyclology-wwf">
            <Gallery6 />
          </Route>
          <Route exact path="/cyclology-sundayride">
            <Gallery7 />
          </Route>


          <Route exact path="/currentevent">
            <OngoingEvent />
          </Route>
          <Route exact path="/previousevent">
            <PreviousEvent />
          </Route>
          <Route exact path="/upcomingevent">
            <UpcomingEvent />
          </Route>
          <Route exact path="/event1">
            <Event1 auth={auth} />
          </Route>
          <Route exact path="/event2">
            <Event2 auth={auth} />
          </Route>
          <Route exact path="/event3">
            <Event3 auth={auth} />
          </Route>

          <Route exact path="/weeklyboard">
            <WeeklyBoard auth={auth} />
          </Route>


          {/*  */}

          <Route path="*">
            <ErrorPage />
          </Route>


        </Switch>
      </Router>
    </>
  );
}

export default App;

