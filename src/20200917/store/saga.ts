import { all, take, put, delay } from 'redux-saga/effects'

function* loginFlow() {
  while (true) {
    yield take('ADD_ASYNC')
    yield delay(1000)
    yield put({ type: 'ADD' })
  }
}

export default function* rootSaga() {
  yield all([loginFlow()])
}
