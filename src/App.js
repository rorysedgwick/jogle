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
                option: {
                    centerMap: true,
                    readOnly: true,
                    keepExistingConfig: false
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
