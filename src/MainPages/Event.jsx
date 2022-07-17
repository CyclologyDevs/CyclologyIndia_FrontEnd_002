import React from 'react'
import EventSetUp from '../Event/EventSetUp';
import Footer from '../Components/Footer';
import PreviousSlick from '../Event/PreviousSlick';
// import UpcomingSlick from '../Event/UpcomingSlick';
import OngoingEvent from '../Event/OngoingEvent';


function Event() {

    return (
        <div>
            <EventSetUp />
            <OngoingEvent />
            {/* <UpcomingSlick /> */}
            <PreviousSlick />
            <Footer />
        </div>
    )
}

export default Event