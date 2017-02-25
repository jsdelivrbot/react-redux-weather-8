import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount(){
        //Googlemaps well render to this.refs.map (which is the div created in render)
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    
    render() {
        return <div ref="map" />;
    }
}

export default GoogleMap