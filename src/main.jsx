import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'velore/velore.css'
import App from './App.jsx'
import './index.css'
import { store } from './Redux/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
