import { CALL_HISTORY_METHOD } from './constant'

export const push = (path: string) => ({
  type: CALL_HISTORY_METHOD,
  payload: {
    method: 'push',
    path
  },
})
