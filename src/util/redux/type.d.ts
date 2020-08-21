export namespace Redux {
  interface IAction {
    type: string
  }

  type Reducer<State = any, Action> = (state: State | undefined, action: Action) => State
}
