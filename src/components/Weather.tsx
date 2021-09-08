// classes component - e.g. Clock.tsx

import React from "react";

class Weather extends React.Component<{}, {}> {
    constructor(props) {
        super(props)
        this.state = {}; // Reference 3.02
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            function(position) {
            console.log(position)
        }
        function(error) {
            console.error("unable to determine your location")
        });
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default Weather;