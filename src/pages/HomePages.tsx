import React, { useState } from 'react'
import { onGreetings } from '../auth/api'
import { BASE_URL } from '../auth/config'

function HomePages() {
  const [saludo, setSaludo] = useState('')
  const [error, setError] = useState('')
  const token = localStorage.getItem('token')
  const data = JSON.parse(localStorage.getItem('data') as string)
  const isLoggedIn = false
  const saludar = async () => {
    try {
      if (!token) window.location.href = `${BASE_URL}`
      const resp = await onGreetings({ token, data })
      setSaludo(resp.response)
    } catch (error) {
      setError(error as string)
    }
  }

  const handleLogout = () => {
    if (!isLoggedIn) {
      localStorage.removeItem('token')
      localStorage.removeItem('data')
      window.location.href = `${BASE_URL}`
    }
  }

  saludar()
  return (
    <>
      {saludo ? (
        <>
          <p>{saludo}</p>
          <button
            onClick={() => handleLogout()}
            className="bg-purple-600 hover:bg-purple-800 py-1 text-center text-white"
          >
            Cerrar sesión
          </button>
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default HomePages
