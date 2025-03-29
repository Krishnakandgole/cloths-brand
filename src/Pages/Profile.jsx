import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

function Profile() {
  // navigating to the login page or signup page or logout

  const navigate = useNavigate();

  const handleLogout = ()=>{
    navigate('/login')
    
  }
  return (
    <div className="flex flex-col md:flex-row min-h-full">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-gray-800 text-white p-5">
        <h2 className="text-2xl font-bold mb-4">My Account</h2>
        <div className='flex items-start justify-between  flex-col gap-60'>
          <nav className="space-y-3 flex justify-center items-start gap-5 flex-col">
            <NavLink to="/profile/userprofile" className={({ isActive }) =>
              `hover:text-sky-400 transition-colors duration-200 font-bold ${isActive ? "text-sky-400" : "text-white"
              }`
            }>Profile</NavLink>
            <NavLink to="/profile/order" className={({ isActive }) =>
              `hover:text-sky-400 transition-colors duration-200 font-bold ${isActive ? "text-sky-400" : "text-white"
              }`
            }>Orders</NavLink>
            <NavLink to="/profile/userbag" className={({ isActive }) =>
              `hover:text-sky-400 transition-colors duration-200 font-bold ${isActive ? "text-sky-400" : "text-white"
              }`
            }>Watch List</NavLink>
            <NavLink to="/profile/cart" className={({ isActive }) =>
              `hover:text-sky-400 transition-colors duration-200 font-bold ${isActive ? "text-sky-400" : "text-white"
              }`
            }>Cart</NavLink>
          </nav>
          <div >
            <button
            onClick={handleLogout}
              className='border p-2 rounded text-md animate-border font-bold hover:bg-cyan-500'>Logout</button>
          </div>
        </div>
      </aside>
      <main className="flex-1 p-5">
        <Outlet />
      </main>
    </div>
  )
}

export default Profile