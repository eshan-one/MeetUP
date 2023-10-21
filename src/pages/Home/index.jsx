
import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

    const [value, setValue] = useState('')

    const navigate =  useNavigate()
    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`)
    }, [navigate, value])


  return (
    <div>
        <h1 className='heading'>MeetUP</h1>
        <h2>1-1 Video Calling and Screensharing Web Application</h2>
        <input
        className='input' 
        type="text"
         placeholder='Enter room code'
         onChange={(e) => setValue(e.target.value)} />

        <button onClick={handleJoinRoom}>Join</button>

        <h4>Developed by: Eshan Shikarkhane</h4>
    </div>
  )
}

export default HomePage