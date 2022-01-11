import react, { useState, Component } from "react";
import GoogleMapReact from 'google-map-react';

function MyMap() {
    const [lat, setLat] = useState(34.0522);
    const [lng, setLng] = useState(-118.2437);

    const changeMap = (ev) => {
        const { center: { lat, lng } } = ev
        setLat(lat);
        setLng(lng)
    }
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    return (

        <div style={{ height: '300px', width: '400px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBUTKPUisgxG7JHsIq1WIGa0TryCVK8KoE' }}
                defaultCenter={[34.0522, -118.2437]}
                defaultZoom={11}
                onChange={(ev) => changeMap(ev)}
            >
                <AnyReactComponent
                    lat={lat}
                    lng={lng}
                    text="Marker"
                />
            </GoogleMapReact>
        </div>
    );
}

export default MyMap;
