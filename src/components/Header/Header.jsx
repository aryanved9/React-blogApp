import React, { useState } from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
 
 const [menuOpen, setMenuOpen] = useState(false);
 

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className="py-4 shadow-md sticky top-0 z-50 bg-white">
    <Container>
      <nav className="flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <Logo width="70px" className="hover:opacity-90 transition-opacity duration-300" />
          </Link>
        </div>
        
        {/* Mobile Menu Toggle Button */}
        <div className="block md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Navbar Items (Mobile) */}
        <ul className={`absolute top-16 right-0 w-full bg-white border-t border-gray-200 md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name} className="group">
                <button
                  onClick={() => navigate(item.slug)}
                  className="block px-6 py-2 text-black duration-200 group-hover:text-red-600 rounded-full transition-colors ease-in-out transform hover:scale-105"
                >
                  {item.name}
                </button>
                <div className="h-1 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </li>
            ) : null
          )}
          {authStatus && (
            <li className="group">
              <LogoutBtn className="block text-black group-hover:text-red-600 transition-colors duration-200" />
            </li>
          )}
        </ul>

        {/* Navbar Items (Tablet and Desktop) */}
        <ul className="hidden md:flex md:space-x-6 lg:flex lg:space-x-6">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name} className="group">
                <button
                  onClick={() => navigate(item.slug)}
                  className="block px-6 py-2 text-black duration-200 group-hover:text-red-600 rounded-full transition-colors ease-in-out transform hover:scale-105"
                >
                  {item.name}
                </button>
                <div className="h-1 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </li>
            ) : null
          )}
          {authStatus && (
            <li className="group">
              <LogoutBtn className="block text-black group-hover:text-red-600 transition-colors duration-200" />
            </li>
          )}
        </ul>
      </nav>
    </Container>
  </header>
  );
}

export default Header