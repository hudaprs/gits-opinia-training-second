// React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Components
import App from './App.tsx'

// Store
import { store } from './plugins/store'

// React Redux
import { Provider } from 'react-redux'

// React Toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Styles
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
			<ToastContainer />
		</Provider>
	</React.StrictMode>
)
