import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from './App.module.css'
import { useAppSelector, useAppDispatch } from '@/feature/redux.ts'
import { decrement, increment } from '@/entities/redux/slice/counter.ts'

function App() {
	const count = useAppSelector((state) => state.counter.value)
	const dispatch = useAppDispatch()
	const [countExammple, setCountExammple] = useState(0)

	return (
		<>
			<div className={style.responseTest}>{count}</div>
			<button
				aria-label="Increment value"
				onClick={async () => {
					dispatch(increment())
				}}
			>
				increment
			</button>
			<button
				aria-label="Increment value"
				onClick={async () => {
					window.Telegram.WebApp.sendData(count.toString())
				}}
			>
				add
			</button>
		</>
	)
}

export default App
