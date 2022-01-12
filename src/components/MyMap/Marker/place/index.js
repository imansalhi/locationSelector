import { greatPlaceStyle, pointPlaceStyle } from "./placeStyle";

export default function Place({ txt, point }) {
    return <div onClick={() => alert('hi')} style={point ? pointPlaceStyle : greatPlaceStyle}>
        {txt}
    </div>
}