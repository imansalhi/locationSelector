
import { useState } from "react";
import InputText from "../../components/inputComp/inputText";
import MyMap from "../../components/MyMap";
import './LocStyles.css';
import { useSelector, useDispatch } from 'react-redux'
import { addLoction } from '../../services/Redux/location/locationsSlice'
import { ComboBox } from "../../components/inputComp/comboBox";



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


  const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];

  return (
    <>
      <InputText onChange={changeLocName} value={locName} />
      <MyMap changeMap={changeMap} position={{ lat, lng }} />
      <ComboBox
        options={options}
        onChange={(ev) => console.log(ev)}
        value={defaultOption}
        placeholder="Select an option" />
      <input onClick={submit} type={'button'} value={`+ Add`} />

    </>
  );
}

export default SelectLocation;
