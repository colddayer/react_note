export namespace Redux {
  interface IAction {
    type: string
  }

  type Reducer<State = any> = (state: State | undefined, action: IAction) => State

  interface ReducerMap {
    [key: string]: Reducer
  }

  type ActionCreator<Action = IAction, Param = any[]> = (...args: Param) => Action

  interface ActionCreatorMap {
    [key: string]: ActionCreator
  }

  type Dispatch<Action = IAction> = (action: Action) => Action

  interface Store<State = any> {
    dispatch: Dispatch
    getState: () => State
    subscribe: (listener: Function) => () => void
  }
}
