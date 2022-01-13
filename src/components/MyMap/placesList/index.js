import MyMarker from "../Marker/myMarker";
import Place from "../Marker/place";

export default function PlacesList({ list }) {
    console.log(list)
    return <>
     {/* <MyMarker point lat={35.7878804} lng={50.9925029}/>  */}
        {/* {list.map((item) => {
            console.log('items loop:', item)
            const { lat, lng } = item.position
            return <MyMarker point lat={lat}
                lng={lng} />
        })} */}

    </>
}