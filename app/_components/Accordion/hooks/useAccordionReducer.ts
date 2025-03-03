import { useReducer } from "react"

export enum AccordionActionType {
  TOGGLE_SECTION = "TOGGLE_SECTION",
  EXPAND_SECTION = "EXPAND_SECTION",
}

export interface AccordionState {
  [key: string]: boolean
}

export interface AccordionAction {
  type: AccordionActionType
  payload: keyof AccordionState
}

const reducer = (state: AccordionState, action: AccordionAction) => {
  switch (action.type) {
    case AccordionActionType.EXPAND_SECTION: {
      return {
        ...state,
        [action.payload]: true,
      }
    }
    case AccordionActionType.TOGGLE_SECTION: {
      return {
        ...state,
        [action.payload]: !state[action.payload],
      }
    }
    default:
      return state
  }
}

export function useAccordionReducer(initialState: AccordionState) {
  return useReducer(reducer, initialState)
}
