import markerMap from './marker.png'
import react, { useState, Component } from "react";
export default function MyMarker({ text }) {
    return <div className='markerContainer'>
        <img className='marker' style={{ backgroundColor: 'transparent', width: 30, height: 30 }} src={markerMap} />
    </div>
}
