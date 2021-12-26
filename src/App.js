import React from 'react';
import {connect} from 'react-redux';
import {addDataToMap} from 'kepler.gl/actions';
import {processCsvData} from 'kepler.gl/processors';
import jogleActivityData from './data/jogle_polylines_csv.js';
import Map from './Map';

class App extends React.Component {

    componentDidMount() {
        this.props.dispatch(
            addDataToMap({
                datasets: {
                    info: {
                        label: 'JOGLE trip legs',
                        id: 'jogle_trip_legs'
                    },
                    data: processCsvData(jogleActivityData)
                },
                options: {
                    centerMap: false,
                    readOnly: false,
                    keepExistingConfig: false
                },
                config: {
                    visState: {
                        layers: [{
                            id: "vt1xups",
                            type: "geojson",
                            config: {
                                dataId: "jogle_trip_legs",
                                label: "JOGLE trip legs",
                                columns: {
                                    geojson: "geometry"
                                },
                                isVisible: true,
                                strokeColorField: {
                                    name: "distance",
                                    type: "real"
                                },
                                strokeColorScale: "quantile",
                                visConfig: {
                                    opacity: 0.8,
                                    strokeOpacity: 0.8,
                                    thickness: 1,
                                    strokeColor: null,
                                    strokeColorRange: {
                                        name: "Global Warming",
                                        type: "sequential",
                                        category: "Uber",
                                        colors: [
                                            "#5A1846",
                                            "#900C3F",
                                            "#C70039",
                                            "#E3611C",
                                            "#F1920E",
                                            "#FFC300"
                                        ]
                                    },
                                    radius: 10,
                                    sizeRange: [0,10],
                                    radiusRange: [0,50],
                                    heightRange: [0,500],
                                    elevationScale: 5,
                                    stroked: true,
                                    filled: false,
                                    enable3d: false,
                                    wireframe: false
                                },
                                hidden: false,
                                textLabel: [
                                    {
                                      field: null,
                                      color: [255,255,255],
                                      size: 18,
                                      offset: [0,0],
                                      anchor: "start",
                                      alignment: "center"
                                    }
                                ]
                            }
                        }],
                        interactionConfig: {
                            tooltip: {
                                fieldsToShow: {
                                    jogle_trip_legs: [
                                        {
                                            name: "name",
                                            format: null
                                        },
                                        {
                                            name: "distance",
                                            format: null
                                        },
                                        {
                                            name: "moving_time",
                                            format: null
                                        },
                                        {
                                            name: "calories",
                                            format: null
                                        }
                                    ]
                                },
                                compareMode: false,
                                compareType: "absolute",
                                enabled: true
                            },
                            brush: {
                                size: 0.5,
                                enabled: false
                            },
                            geocoder: {
                                enabled: false
                            },
                            coordinate: {
                                enabled: false
                            }
                        },
                        splitMaps: [],
                        animationConfig: {
                            currentTime: null,
                            speed: 1
                        }
                    },
                    mapState: {
                        bearing: 0,
                        dragRotate: false,
                        latitude: 54.360659999999996,
                        longitude: -4.074945,
                        pitch: 0,
                        zoom: 4.75,
                        isSplit: false
                    },
                    mapStyle: {
                        styleType: "dark",
                        topLayerGroups: {},
                        visibleLayerGroups: {
                            label: true,
                            road: true,
                            border: false,
                            building: true,
                            water: true,
                            land: true,
                            "3d building": false
                        },
                        threeDBuildingColor: [],
                        mapStyles: {}
                    }
                }
            })
        );
    }

    render () {
        return <Map />
    }
}

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({dispatch});

export default connect(mapStateToProps, dispatchToProps)(App);
