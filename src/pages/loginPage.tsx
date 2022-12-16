import React, { useState } from 'react'

export function LoginPage() {
  const [{ email, password }, serCredentials] = useState({
    email: '',
    password: '',
  })

  const login = (event: React.FormEvent) => {
    event.preventDefault()
    alert('login successful')
  }

  return (
    <form onSubmit={login}>
      <label htmlFor="email">Email</label>
      <input
        required
        type="email"
        value={email}
        onChange={(event) =>
          serCredentials({
            email: event.target.value,
            password,
          })
        }
        placeholder="Email..."
      />
      <label htmlFor="password">Password</label>
      <input
        required
        type="password"
        value={password}
        onChange={(event) =>
          serCredentials({
            email,
            password: event.target.value,
          })
        }
        placeholder="*************"
      />
      <button>Login</button>
    </form>
  )
}
