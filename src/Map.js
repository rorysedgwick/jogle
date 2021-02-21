import KeplerGl from 'kepler.gl';

// let token = 'pk.eyJ1Ijoicm9yeXNlZGdpd2tjIiwiYSI6ImNra3ZlZno0dTEzdmwydWxtZmIya3YwNmgifQ.WW0oOt922mpoAOeycwEkhw';
let token = process.env.REACT_APP_MAPBOX_API_TOKEN;
console.log('process.env: ', process.env);

const Map = props => (
  <KeplerGl
    id="map"
    width={window.innerWidth}
    mapboxApiAccessToken={token}
    height={window.innerHeight}
  />
);

export default Map;
