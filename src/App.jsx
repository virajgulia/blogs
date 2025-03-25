import { useState } from 'react'

import './App.css'
import { Router } from './Router'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>

      <Router />
    </Provider>
  )
}

export default App
