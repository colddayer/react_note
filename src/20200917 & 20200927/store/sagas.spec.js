import test from 'tape'
import { addAsync, delay } from './saga.js'
import { call } from 'redux-saga/effects'

test('ADD_ASYNC saga test', (assert) => {
  const gen = addAsync()
  assert.deepEqual(gen.next().value, call(delay, 1000))
  assert.end()
})
