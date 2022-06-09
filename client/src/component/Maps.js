import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class Maps extends Component {
    render() {
    const mapStyles = {
        width: "50%",
        height: "50%",
    };
    const restaurants = this.props.restaurants
    return (
        <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
        >
        {
        restaurants.map((restaurant) => (
            <Marker position={{lat: restaurant.geometry.location.lat, lng: restaurant.geometry.location.lng }}/>
        ))
        }
        </Map>
    );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCjm08VBjgL4jBdB7ZmR0yVyb4Uee7dbmk'
})(Maps);