import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Michi from './gato.svg'
export function LoginPage() {
  const [{ email, password }, serCredentials] = useState({
    email: '',
    password: '',
  })

  const login = (event: React.FormEvent) => {
    event.preventDefault()
    serCredentials({
      email:'',
      password:''
    })
    console.log(email, password)
  }

  return (
    <section className="h-screen styleOne1">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
        <div
        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img
          src={Michi}
          className="w-full"
          alt="Sample image"
        />
      </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <h1 className="text-center mb-10">WELCOME  :D</h1>
            <form onSubmit={login}>
              <div className="mb-6">
                <input
                  required
                  type="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  value={email}
                  onChange={(event) =>
                    serCredentials({
                      email: event.target.value,
                      password,
                    })
                  }
                />
              </div>
              <div className="mb-6">
                <input
                  required
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  value={password}
                  onChange={(event) =>
                    serCredentials({
                      email,
                      password: event.target.value,
                    })
                  }
                />
              </div>

              <div className="text-center lg:text-left">
                <button
                  className="inline-block px-7 py-3 bg-purple-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Login
                </button>
                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <Link
                    to="/register"
                    className="text-purple-600 hover:text-purple-700 focus:text-white-700 transition duration-200 ease-in-out"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
