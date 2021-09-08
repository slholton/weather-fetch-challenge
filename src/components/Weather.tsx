// classes component - e.g. Clock.tsx

import React from "react";

class Weather extends React.Component<{}, LocationProp> {
    constructor(props: LocationProp) {
        super(props)
        this.state = {
            position: new Geolocation()
        }; // Reference 3.02
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
            new Geolocation();
        },
        function(error) {
            console.error("unable to determine your location")
        });
    }

    render(){
        return(
            <div>
                <h2>Get Weather (from this.state...)</h2> // needs to be updated
            </div>
        )
    }
}

export default Weather;