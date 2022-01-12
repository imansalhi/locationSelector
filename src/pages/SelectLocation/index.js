
import react, { useState } from "react";
import InputText from "../../components/inputComp/inputText";
import MyMap from "../../components/MyMap";
import './LocStyles.css';


function SelectLocation() {
  const [locName, setLocName] = useState(null);
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  const changeLocName=(txt)=>{
    setLocName(txt)
  }

  const changeMap = (ev) => {
    const { center: { lat, lng } } = ev
    setLat(lat);
    setLng(lng)
  }

  return (
    <>
      <InputText onChange={changeLocName}/>
      <MyMap changeMap={changeMap} position={{ lat, lng }} />
    </>
  );
}

export default SelectLocation;
