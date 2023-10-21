
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HomePage from './pages/Home'
import RoomPage from './pages/Room'

import {Routes, Route} from 'react-router-dom'

function App() {


  return (
    <Routes>
      
      <Route path="/" element={<HomePage/>}/>
      <Route path="/room/:roomId" element={<RoomPage />}/>
    </Routes>
  )
}

export default App
