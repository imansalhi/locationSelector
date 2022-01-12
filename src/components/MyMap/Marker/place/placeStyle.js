const K_WIDTH = 40;
const K_HEIGHT = 40;
const point_HEIGHT = 10;
const point_WIDTH = 10

const greatPlaceStyle = {
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '5px solid #f44336',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};

const pointPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: point_WIDTH,
  height: point_HEIGHT,
  // left: -point_WIDTH / 2,
  // top: -point_HEIGHT / 2,

  border: '2px solid #f44336',
  borderRadius: point_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};
export { greatPlaceStyle, pointPlaceStyle };