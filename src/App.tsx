import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppSelector, useAppDispatch } from '@/feature/redux.ts'
import { decrement, increment } from '@/entities/redux/slice/counter.ts'

function App() {
	const count = useAppSelector((state) => state.counter.value)
	const dispatch = useAppDispatch()
	const [countExammple, setCountExammple] = useState(0)

	return (
		<>
			<div>{count}</div>
			<button
				aria-label="Increment value"
				onClick={() => dispatch(increment())}
			>
				123
			</button>
		</>
	)
}

export default App
