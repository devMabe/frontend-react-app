import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function RegisterPage() {
  const [{ name, lastname, email, password, confirmpassword }, setData] =
    useState({
      name: '',
      lastname: '',
      email: '',
      password: '',
      confirmpassword: '',
    })

  const [check, setCheck] = useState(false)
  const [{ message }, setError] = useState({
    message: '',
  })

  const register = (event: React.FormEvent) => {
    event.preventDefault()
    if (password !== confirmpassword) {
      alert('constraseñas incorrectas')
      setData({
        name: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: '',
      })
    }
    if (check) {
      setError({
        message: '',
      })
      console.log(name, lastname, email)
      setData({
        name: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: '',
      })
    } else {
      setError({
        message: '¡Debe aceptar los terminos antes de continuar!',
      })
    }
  }
  return (
    <>
      <div className="min-h-screen py-10 styleOne">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center styleTwo"></div>
            <div className="w-full lg:w-1/2 py-16 px-11">
              <h2 className="text-3xl mb-4">Register</h2>
              <p className="mb-4">
                Create your account. It’s free and only take a minute
              </p>
              <form onSubmit={register}>
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Firstname"
                    className="border border-gray-400 py-1 px-2"
                    name="name"
                    value={name}
                    onChange={(event) =>
                      setData({
                        name: event.target.value,
                        email,
                        lastname,
                        password,
                        confirmpassword,
                      })
                    }
                    required
                  />
                  <input
                    type="text"
                    placeholder="Lastname"
                    className="border border-gray-400 py-1 px-2"
                    name="lastname"
                    value={lastname}
                    onChange={(event) =>
                      setData({
                        name,
                        email,
                        lastname: event.target.value,
                        password,
                        confirmpassword,
                      })
                    }
                    required
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-400 py-1 px-2 w-full"
                    name="email"
                    value={email}
                    onChange={(event) =>
                      setData({
                        name,
                        email: event.target.value,
                        lastname,
                        password,
                        confirmpassword,
                      })
                    }
                    required
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-400 py-1 px-2 w-full"
                    name="password"
                    value={password}
                    onChange={(event) =>
                      setData({
                        name,
                        email,
                        lastname,
                        password: event.target.value,
                        confirmpassword,
                      })
                    }
                    required
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="border border-gray-400 py-1 px-2 w-full"
                    name="confirmpassword"
                    value={confirmpassword}
                    onChange={(event) =>
                      setData({
                        name,
                        email,
                        lastname,
                        password,
                        confirmpassword: event.target.value,
                      })
                    }
                    required
                  />
                </div>
                {message === null ? (
                  <div></div>
                ) : (
                  <span style={{textAlign:'center'!, color: 'red', marginTop:10}}>{message}</span>
                )}
                <div className="mt-5 mb-3">
                  <input
                    type="checkbox"
                    className="border border-gray-400"
                    checked={check}
                    onChange={(event) => setCheck(event.target.checked)}
                  />
                  <span>
                    I accept the{' '}
                    <a href="#" className="text-purple-500 font-semibold">
                      Terms of Use
                    </a>{' '}
                    &{' '}
                    <a href="#" className="text-purple-500 font-semibold">
                      Privacy Policy
                    </a>
                  </span>
                </div>
                <Link className="hover:text-purple-500" to="/login">
                  ¿Do you have an account ?, login here !
                </Link>
                <div className="mt-5">
                  <button className="w-full bg-purple-500 py-1 text-center text-white">
                    Register Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
