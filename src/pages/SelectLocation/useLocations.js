import { useState} from "react";

export default function useLocations() {
    const [locName, setLocName] = useState(null);
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [logo, setLogo] = useState(null)
    const [placeType, setPlaceType] = useState(null)

    const changeLocName = (txt) => {
        setLocName(txt.target.value)
    }

    const changeMap = (ev) => {
        const { center: { lat, lng } } = ev
        setLat(lat);
        setLng(lng)
    }

    const handleFile = (file) => {
        setLogo(file)
    }

    const handleType = (option) => {
        setPlaceType(option.value)
    }
    const resetForm = () => {
        setLocName('');
        setLat(null);
        setLng(null);
        setPlaceType(null)
        setLogo(null)
    }

    return {
        lat,
        lng,
        locName,
        placeType,
        logo,
        changeLocName,
        changeMap,
        handleFile,
        handleType,
        resetForm
    }
}