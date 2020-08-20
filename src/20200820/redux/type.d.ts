export namespace Redux {
  interface IAction {
    type: string
  }

  type Reducer<State = any, Action extends IAction> = (
    state: State | undefined,
    action: Action
  ) => State
}
