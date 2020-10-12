import { all, put, call, take } from 'redux-saga/effects'

export const delay = (duration: number) =>
  new Promise((rsv) => {
    setTimeout(() => {
      rsv('ok')
    }, duration)
  })

export function* addAsync() {
  while (true) {
    yield take('ADD_ASYNC')
    yield call(delay, 1000)
    yield put({ type: 'ADD' })
  }
}

export default function* rootSaga() {
  yield all([addAsync()])
}
