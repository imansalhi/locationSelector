
import react, { useState } from "react";
import InputText from "../../components/inputComp/inputText";
import MyMap from "../../components/MyMap";
import './LocStyles.css';
import { RootState } from '../../services/Redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../services/Redux/counter/counterSlice'



function SelectLocation() {
  const [locName, setLocName] = useState(null);
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  const changeLocName = (txt) => {
    setLocName(txt)
  }

  const changeMap = (ev) => {
    const { center: { lat, lng } } = ev
    setLat(lat);
    setLng(lng)
  }

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <InputText onChange={changeLocName} />
      <MyMap changeMap={changeMap} position={{ lat, lng }} />

      <div>
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
      </div>
    </>
  );
}

export default SelectLocation;
