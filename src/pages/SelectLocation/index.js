
import react, { useState } from "react";
import MyMap from "../../components/MyMap";
import './LocStyles.css';
import 'leaflet/dist/leaflet.css';

function SelectLocation() {
  const [user, setUser] = useState(null);
  const [pass, setPass] = useState(null);

  return (
    <>
      <p>iman</p>
      <MyMap />
    </>
  );
}

export default SelectLocation;
