import { NavLink } from 'react-router-dom'
export default function NavBar() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap styleOne2 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Accouting SW
          </span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <NavLink
              to="/login"
              className="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4"
            >
              login
            </NavLink>
            <NavLink
              to="/register"
              className="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4"
            >
              register
            </NavLink>
          </div>
        </div>
      </nav>
      {/* <ul>
        <li>
          <NavLink to="/login">login</NavLink>
          <NavLink to="/register">register</NavLink>
        </li>
      </ul> */}
    </div>
  )
}
