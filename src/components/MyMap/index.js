import react, { useState, Component } from "react";
import GoogleMapReact from 'google-map-react';
import MyMarker from "./Marker/myMarker";
import './MyMapStyle.css'
import { tehranLocation, apiKey } from "./locationsConfigs";
import Place from "./Marker/place";
import PlacesList from "./placesList";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

function MyMap({ changeMap, position, details, places }) {
    const { lat, lng } = position

    const onChangeMap = (ev) => {
        changeMap(ev)
    }

    const renderPlaces = (places) => {
        return places.map((item) => {
            return <Place
                lat={item.position.lat}
                lng={item.position.lng}
                
                text={item.locName}
            />
        })
    }

    return (

        <div className="mapContainer">
            <GoogleMapReact
                bootstrapURLKeys={{ key: apiKey }}
                defaultCenter={tehranLocation}
                defaultZoom={15}
                onChange={(ev) => details ? null : onChangeMap(ev)}
            >
                {details || <Place point lat={lat || tehranLocation[0]}
                    lng={lng || tehranLocation[1]} />}
                {details && renderPlaces(places)}



            </GoogleMapReact>
        </div >
    );
}

export default MyMap;
