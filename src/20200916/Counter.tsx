import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IStore } from './store'
import { push } from 'connected-react-router'

export function Counter() {
  const state = useSelector((state: IStore) => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <div>{state.num}</div>
      <button onClick={() => dispatch({ type: 'ADD' })}>+</button>
      <button onClick={() => dispatch({ type: 'SUBSTRACT' })}>-</button>
      <a
        href='/'
        onClick={(e) => {
          e.preventDefault()
          dispatch(push('/'))
        }}
      >
        to home
      </a>
    </div>
  )
}
