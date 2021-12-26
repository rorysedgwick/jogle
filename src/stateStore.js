import {createStore, combineReducers, applyMiddleware} from 'redux';
import keplerGlReducer, {uiStateUpdaters} from 'kepler.gl/reducers';
import { taskMiddleware } from "react-palm/tasks";

function appReducer() {
    return {}
}

const initialState = {};

const keplerReducer = keplerGlReducer.initialState({
  uiState: {
    readOnly: false,
    activeSidePanel: null,
    currentModal: null,
    mapControls: {
      ...uiStateUpdaters.DEFAULT_MAP_CONTROLS,
      visibleLayers: {
        show: true
      },
      mapLegend: {
        show: true,
        active: true
      }
    }
  }
});

const reducers = combineReducers({
  keplerGl: keplerReducer,
  app: appReducer
});


export default createStore(
  reducers,
  initialState,
  applyMiddleware(
    taskMiddleware
  )
);
