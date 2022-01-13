
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import MyMap from "../../components/MyMap";

export default function LocationsList() {
    //tou can check the added lovations here 
    const locations = useSelector((state) => state.locations.value)
    const count = useSelector((state) => state.counter.value)
    console.log('Locations:>>>',locations)
    return <div style={{ width: 400, height: 400 }}>
        {count}
        <MyMap
        position={{ lat: 35.7583, lng: 51.3994 }} details places={locations || []} /></div>
}