import * as React from 'react'

export interface ContainerState {
  containerRef: React.MutableRefObject<HTMLElement> | null
}
export interface StickyState {
  stickyRef: React.MutableRefObject<HTMLElement> | null
}

export interface ContextState {
  container: ContainerState
  sticky: StickyState
}

export interface ContextDispatch {}

const initialState: ContextState = {
  container: {
    containerRef: null,
  },
  sticky: {
    stickyRef: null,
  },
}
const ContextState = React.createContext<ContextState>(initialState)
const ContextDispatch = React.createContext<ContextDispatch>({})

enum ActionType {
  OnChange = 'on change',
  OnStuck = 'on stuck',
  OnUnstuck = 'on unstuck',
}

type Action =
  | { type: ActionType.OnChange; payload: any }
  | { type: ActionType.OnStuck; payload: any }
  | { type: ActionType.OnUnstuck; payload: any }

function reducer(
  state: ContextState = initialState,
  action: Action
): ContextState {
  switch (action.type) {
    default:
      return state
  }
}

function StickyProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  console.log(`StickyProvider`, state, dispatch)

  return (
    <ContextState.Provider value={state}>
      <ContextDispatch.Provider value={dispatch}>
        {children}
      </ContextDispatch.Provider>
    </ContextState.Provider>
  )
}

function useStickyState() {
  const context = React.useContext(ContextState)
  if (context === undefined)
    throw Error('"useStickyState" must be used under "ContextState"')
  return context
}

function useStickyDispatch() {
  const context = React.useContext(ContextDispatch)
  if (context === undefined)
    throw Error('"useStickyDispatch" must be used under "ContextDispatch"')
  return context
}

export { StickyProvider, useStickyState, useStickyDispatch }
