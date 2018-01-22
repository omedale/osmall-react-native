import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../appReducers';


/**
 * @export
 * @param {object} initialState
 * @returns {object} store object
 */
export default function (initialState) {
  return createStore(rootReducer,
    initialState,
    applyMiddleware(thunk),
  );
}