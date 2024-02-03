import { Navbar, TextInput, Button } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { CiSearch } from "react-icons/ci"
import { FaMoon } from "react-icons/fa";
import React from 'react'
const Header = () => {
  const path = useLocation().pathname;
  return (
    <>
      <Navbar className="border-b-2 text-sm sm:text-xl">
        <Link to="/" className='whitespace-nowrap self-center font-semibold dark:text-white'>
          <span className=' text-purple-50 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-serif rounded-lg text-sm px-4 py-2 text-center '>D.Katyayan</span>Blog
        </Link>

        <form>
          <TextInput
            type='text'
            placeholder='Search...'
            rightIcon={CiSearch}
            className='hidden lg:inline'
          />
        </form>
        <Button className="lg:hidden w-12" color='gray' pill>
          <CiSearch />
        </Button>
        <div className='flex  gap-2 md:order-2'>
          <Button className=' w-12 hidden sm:block' pill color='gray'>
            <FaMoon />
          </Button>
          <Link to="/sign-in">
            <Button gradientDuoTone='purpleToBlue' outline >
              Sign In
            </Button>
          </Link>
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to='/'>
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to='/about'>
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/projects"} as={"div"}>
            <Link to='/projects'>
              Projects
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header