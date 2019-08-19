import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, incrementActionCreator, decrementActionCreator } from './store';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const counterState = useSelector((state: RootState) => state.counter)

  return (
    <div>
      react hooks count { count }
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      redux count { counterState.count }
      <div>
        <button onClick={() => dispatch(incrementActionCreator())}>+</button>
        <button onClick={() => dispatch(decrementActionCreator())}>-</button>
      </div>
    </div>
  )
}

export default Counter