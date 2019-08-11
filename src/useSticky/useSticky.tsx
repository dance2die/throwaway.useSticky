import * as React from 'react'

/**
 * Based on following resources
 *
 * 1. https://developers.google.com/web/updates/2017/09/sticky-headers
 * 2. https://github.com/ryanwalters/sticky-events
 */

// export interface StickyProps<T extends HTMLElement> {
//   container: React.MutableRefObject<T>;
//   stickySelector: string;
// }

export interface ContainerProps {
  className: string
}
export interface StickyProps {
  className: string
  onChange: (e: any) => void
  onStuck: (e: any) => void
  onUnstuck: (e: any) => void
}

export interface ContainerState {
  containerRef: React.RefObject<HTMLElement> | null
}
export interface StickyState {
  stickyRef: React.RefObject<HTMLElement> | null
}

export interface ContextState {
  container: ContainerState
  sticky: StickyState
}

export interface ContextDispatch {}

// const sentinelClasses = {
//   SENTINEL: 'sticky-events--sentinel',
//   SENTINEL_TOP: 'sticky-events--sentinel-top',
//   SENTINEL_BOTTOM: 'sticky-events--sentinel-bottom',
// }

enum ActionType {
  OnChange = 'on change',
  OnStuck = 'on stuck',
  OnUnstuck = 'on unstuck',
}

type Action =
  | { type: ActionType.OnChange; payload: any }
  | { type: ActionType.OnStuck; payload: any }
  | { type: ActionType.OnUnstuck; payload: any }

function reducer(state: ContextState, action: Action): ContextState {
  switch (action.type) {
    default:
      return state
  }
}

function useSticky() {
  // Let users assign refs instead of letting them create their own~
  // Easier to use & less boiler-plate to write.
  // Got the idea from react-dropzone
  // https://github.com/react-dropzone/react-dropzone/blob/acea5df30f272f3071570c74a07730d1a8f99120/src/index.js#L391
  const containerRef = React.useRef<HTMLElement>(null)
  const stickyRef = React.useRef<HTMLElement>(null)

  const initialState: ContextState = {
    container: { containerRef },
    sticky: { stickyRef },
  }
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const addContainerClasses = (...classes: Readonly<string[]>) => {
    containerRef.current && containerRef.current.classList.add(...classes)
  }
  const addStickyClasses = (...classes: Readonly<string[]>) => {
    stickyRef.current && stickyRef.current.classList.add(...classes)
  }

  const getContainerProps = (props: ContainerProps) => {
    // console.log(`getContainerProps props`, props)
    addContainerClasses('useSticky__container', props.className)
  }
  const getStickyProps = (props: StickyProps) => {
    // console.log(`getStickyProps props`, props)
    addStickyClasses('useSticky__sticky', props.className)
  }

  React.useEffect(() => {
    console.log(`containerRef, stickyRef`, containerRef, stickyRef)
  }, [containerRef, stickyRef])

  return { getContainerProps, getStickyProps, containerRef, stickyRef }
}

export default useSticky
