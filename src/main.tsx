import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './entities/redux/store.ts'
import { Provider } from 'react-redux'
import { Telegram } from '@twa-dev/types'
declare global {
	interface Window {
		Telegram: Telegram
	}
}

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
