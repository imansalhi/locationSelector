
import react, { useState } from "react";
import InputText from "../../components/inputComp/inputText";
import MyMap from "../../components/MyMap";
import './LocStyles.css';
import { useSelector, useDispatch } from 'react-redux'
import { addLoction } from '../../services/Redux/location/locationsSlice'



function SelectLocation() {
  const [locName, setLocName] = useState('');
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  const changeLocName = (txt) => {
    setLocName(txt.target.value)
  }

  const changeMap = (ev) => {
    const { center: { lat, lng } } = ev
    setLat(lat);
    setLng(lng)
  }


  const locations = useSelector((state) => state.locations.value)
  const dispatch = useDispatch()
  const submit = () => {
    dispatch(addLoction({ position: { lat, lng, }, locName }))
  }



  return (
    <>
      <InputText onChange={changeLocName} value={locName} />
      <MyMap changeMap={changeMap} position={{ lat, lng }} />
      <input onClick={submit} type={'button'} value={`+ Add`} />

    </>
  );
}

export default SelectLocation;
