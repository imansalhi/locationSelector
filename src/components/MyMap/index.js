import react, { useState, Component } from "react";
import GoogleMapReact from 'google-map-react';
import MyMarker from "./Marker";
import './MyMapStyle.css'
import { tehranLocation } from "./locationsConfigs";


function MyMap({ changeMap, position }) {
    const { lat, lng } = position

    const onChangeMap = (ev) => {
        changeMap(ev)
    }

    return (

        <div className="mapContainer">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBUTKPUisgxG7JHsIq1WIGa0TryCVK8KoE' }}
                defaultCenter={tehranLocation}
                defaultZoom={11}
                onChange={(ev) => onChangeMap(ev)}
            >
                <MyMarker
                    lat={lat || tehranLocation[0]}
                    lng={lng || tehranLocation[1]}
                />

            </GoogleMapReact>
        </div>
    );
}

export default MyMap;
