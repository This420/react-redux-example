import { combineReducers, createStore } from 'redux'

// Counter State
interface CounterState {
  count: number
}

const counterInitialState: CounterState = {
  count: 0
}

// actions
export const INCREMENT = 'COUNTER/INCREMENT'
export const DECREMENT = 'COUNTER/DECREMENT'

interface IncrementAction {
  type: typeof INCREMENT
  payload: null
}

interface DecrementAction {
  type: typeof DECREMENT
  payload: null
}

type CounterActionTypes = IncrementAction | DecrementAction

export const incrementActionCreator = (): CounterActionTypes => {
  return {
    type: INCREMENT,
    payload: null
  }
}

export const decrementActionCreator = (): CounterActionTypes => {
  return {
    type: DECREMENT,
    payload: null
  }
}
//---

// reducers
export const counterReducer = (
  state = counterInitialState,
  action: CounterActionTypes
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 }
    case DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
}
//---

// combine
export const rootReducer = combineReducers({
  counter: counterReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)