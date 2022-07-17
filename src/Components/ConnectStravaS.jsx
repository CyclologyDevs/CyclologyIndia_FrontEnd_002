import React, { useEffect } from 'react'
// import StravaIcon from '../images/strava-logo.png'

function ConnectStravaS() {

    const URL = new URLSearchParams(window.location.search);
    // console.log("\nCode => " + URL.get('code'));
    const code = URL.get('code');
    // console.log(code)

    // const [email, setEmail] = useState('');
    // console.log(email);


    const handleSubmit = (e) => {

        const Data = {
            code: code,
            email: localStorage.getItem('email'),
            uuid: localStorage.getItem('uuid')
        };

        fetch(`${process.env.REACT_APP_URL}/connect_strava`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Data)
        }).then(response => response.json())
            .then(data => {
                // console.log(data);
                localStorage.setItem("athlete_id", data.athlete_id);
            })
    }

    useEffect(() => {
        handleSubmit();
    }, [])



    return (
        <></>
    )
}

export default ConnectStravaS