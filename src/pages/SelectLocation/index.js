
import { useState } from "react";
import InputText from "../../components/inputComp/inputText";
import MyMap from "../../components/MyMap";
import './LocStyles.css';
import { useSelector, useDispatch } from 'react-redux'
import { addLoction } from '../../services/Redux/location/locationsSlice'
import { ComboBox } from "../../components/inputComp/comboBox";
import FileSelector from "../../components/inputComp/file";
import Btn from "../../components/inputComp/botton";
import useLocations from "./useLocations";



function SelectLocation() {
  const {
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
  } = useLocations()



  const locations = useSelector((state) => state.locations.value)
  const dispatch = useDispatch()
  const submit = () => {
    dispatch(addLoction({
      position: { lat, lng, },
      locName, logo, placeType
    }))
    resetForm()
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
      <Btn onClick={() => submit()} value={`+ save`} />

    </>
  );
}

export default SelectLocation;
