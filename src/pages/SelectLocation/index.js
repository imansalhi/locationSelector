
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
  const [locName, setLocName] = useState();
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [logo, setLogo] = useState()
  const [placeType, setPlaceType] = useState()

  const changeLocName = (txt) => {
    setLocName(txt.target.value)
  }

  const changeMap = (ev) => {
    const { center: { lat, lng } } = ev
    setLat(lat);
    setLng(lng)
  }

  const handleFile = (file) => {
    console.log('file is :', file)
    setLogo(file)
  }

  const handleType = (option) => {
    setPlaceType(option.value)
  }


  const locations = useSelector((state) => state.locations.value)
  const dispatch = useDispatch()
  const submit = () => {
    dispatch(addLoction({
      position: { lat, lng, },
      locName, logo, placeType
    }))
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
      <Btn onClick={submit}value={`+ save`}/>

    </>
  );
}

export default SelectLocation;
