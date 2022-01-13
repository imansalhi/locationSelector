import react, { useState, Component } from "react";
import GoogleMapReact from 'google-map-react';
import MyMarker from "./Marker/myMarker";
import './MyMapStyle.css'
import { tehranLocation, apiKey } from "./locationsConfigs";
import Place from "./Marker/place";


function MyMap({ changeMap, position }) {
    const { lat, lng } = position

    const onChangeMap = (ev) => {
        changeMap(ev)
    }

    return (

        <div className="mapContainer">
            <GoogleMapReact
                bootstrapURLKeys={{ key: apiKey }}
                defaultCenter={tehranLocation}
                defaultZoom={15}
                onChange={(ev) => onChangeMap(ev)}
            >
                <Place point lat={lat || tehranLocation[0]}
                    lng={lng || tehranLocation[1]} />

            </GoogleMapReact>
        </div>
    );
}

export default MyMap;
