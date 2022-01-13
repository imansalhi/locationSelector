
import { useState } from "react";
import InputText from "../../components/inputComp/inputText";
import MyMap from "../../components/MyMap";
import './LocStyles.css';
import { useSelector, useDispatch } from 'react-redux'
import { addLoction } from '../../services/Redux/location/locationsSlice'
import { ComboBox } from "../../components/inputComp/comboBox";
import FileSelector from "../../components/inputComp/file";
import Btn from "../../components/inputComp/botton";



function SelectLocation() {
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


  const locations = useSelector((state) => state.locations.value)
  const dispatch = useDispatch()
  const submit = () => {
    debugger
    dispatch(addLoction({
      position: { lat, lng, },
      locName, logo, placeType
    }))
    resetForm()
  }

  const resetForm = () => {
    setLocName('');
    setLat(null);
    setLng(null);
    setPlaceType(null)
    setLogo(null)
  }


  const options = [
    'Business', 'Residential', 'Economic'
  ];
  const defaultOption = options[0];

  return (
    <>
      <InputText onChange={changeLocName} value={locName} />
      <MyMap changeMap={changeMap} position={{ lat, lng }} />
      <ComboBox
        options={options}
        onChange={(ev) => handleType(ev)}
        value={defaultOption}
        placeholder="Select an option" />
      <FileSelector handleFile={handleFile} />
      {/* <input onClick={submit} type={'button'} value={`+ Add`} /> */}
      <Btn onClick={() => submit()} value={`+ save`} />

    </>
  );
}

export default SelectLocation;
