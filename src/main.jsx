import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeFirebase } from './firebase/config'

initializeFirebase()

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />

)
