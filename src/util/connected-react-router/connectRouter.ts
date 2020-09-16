import { History, Action, Location } from 'history'
import { LOCATION_CHANGE } from './constant'
import { Reducer } from 'react'
import { AnyAction } from 'redux'

interface IConnectRouterState {
  action: Action
  location: Location
}

export default function (history: History): Reducer<IConnectRouterState, AnyAction> {
  const inistate = {
    action: history.action,
    location: history.location,
  }
  return function (state = inistate, action) {
    switch (action.type) {
      case LOCATION_CHANGE:
        return action.payload
      default:
        return state
    }
  }
}
