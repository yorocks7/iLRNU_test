import React from 'react'
import SVG from 'react-inlinesvg'
import logo from '../Assets/logo.png'
import prof from '../Assets/prof.svg'
import user from '../Assets/user.svg'
import hamburg from '../Assets/hamburg.svg'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'

const Navbar = (props) => {
    return (
        <nav className='flex justify-between p-2' >
            <img src={logo} alt='logo' />
            <div className='flex h-20 p-5'>
                <div className='self-center py-1 px-6 text-lg border-white text-white border-t-2 border-b-2 
                border-r-2 border-l-2 rounded-xl border-opacity-60 text-opacity-70 font-bold 
                ' >
                    Join as a Tutor
                </div>
                <div className='relative m-auto px-5'>
                <Dropdown style={{outline: 'none'}}>
                    {
                        !props.isLogin?
                    <div>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <SVG src={prof}/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='absolute right-0 mt-5 w-72 py-4 bg-white rounded-xl shadow-xl z-20'> 
                        <Dropdown.Item onClick={props.login} className='block px-6 py-3 text-lg font-bold text-gray-500 hover:bg-gray-200'>Log in</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" className='block px-6 py-3 text-lg font-medium text-gray-500 hover:bg-gray-200'>Sign up</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" className='block px-6 py-3 text-lg font-medium text-gray-500 hover:bg-gray-200'>How online Tutoring works</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" className='block px-6 py-3 text-lg font-medium text-gray-500 hover:bg-gray-200'>Help center</Dropdown.Item>

                    </Dropdown.Menu>
                    </div>
                    : <div className='flex h-14 bg-white rounded-xl px-4'>
                        <Dropdown.Toggle className='p-2' variant="success" id="dropdown-basic">
                            <SVG src={hamburg}/>
                        </Dropdown.Toggle>
                        <Dropdown.Toggle className='p-2 ' variant="success" id="dropdown-basic">
                            <SVG src={user}/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='absolute right-0 mt-5 w-72 py-4 bg-white rounded-xl shadow-xl z-20'> 
                            <Dropdown.Item onClick={props.logout} className='block px-6 text-lg font-bold text-gray-500 hover:bg-gray-200'>Log out</Dropdown.Item>
                        </Dropdown.Menu>
                    </div>
                    }

                </Dropdown>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
