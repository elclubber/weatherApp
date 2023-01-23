import createSagaMiddleware from 'redux-saga';
import appSlice from './reducer';
import { createStore, applyMiddleware } from 'redux'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    appSlice,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

export default store
