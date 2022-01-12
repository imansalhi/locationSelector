
import react, { useState } from "react";
import InputText from "../../components/inputComp/inputText";
import MyMap from "../../components/MyMap";
import './LocStyles.css';
import { RootState } from '../../services/Redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../services/Redux/counter/counterSlice'
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

  const count = useSelector((state) => state.counter.value)
  const locations = useSelector((state) => state.locations.value)
  const dispatch = useDispatch()
  const submit = () => {
    dispatch(addLoction({ position: { lat, lng, }, locName }))
    console.log(locations)
  }



  return (
    <>
      <InputText onChange={changeLocName} value={locName} />
      <MyMap changeMap={changeMap} position={{ lat, lng }} />
      <input onClick={submit} type={'button'} value={`+ Add`} />
      {/* <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment(5))}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div> */}
    </>
  );
}

export default SelectLocation;
