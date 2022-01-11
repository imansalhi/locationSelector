
import react, { useState } from "react";
import MyMap from "../../components/MyMap";
import './LocStyles.css';


function SelectLocation() {
  const [user, setUser] = useState(null);
  const [pass, setPass] = useState(null);

  return (
    <>
      <MyMap />
    </>
  );
}

export default SelectLocation;
