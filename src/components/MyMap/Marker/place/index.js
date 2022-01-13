import { greatPlaceStyle, pointPlaceStyle } from "./placeStyle";

export default function Place({ text, point }) {
    return <div onClick={() => alert('hi')} style={point ? pointPlaceStyle : greatPlaceStyle}>
        {text}
    </div>
}