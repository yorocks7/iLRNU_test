import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './Login.css'
const Login = (props) => {
    return (
        <div >
        <Modal className="modal-main rounded-xl p-10" show={props.show} onHide={props.handleClose}>
            <div className="block">
                <Button className="float-right opacity-50" onClick={props.close}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
                </Button>
            </div>  
            <Modal.Header className='flex h-15 float-clear pt-5'>
            <Modal.Title className='m-auto text-3xl font-bold text-gray-700'>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div>
                <input type="hidden" name="remember" value="true"/>
                <div class="rounded-md shadow-sm ">
                    <div class="py-3">
                    <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-4/5 m-auto px-3 py-3 bg-gray-100 placeholder-gray-500 text-gray-500 rounded-xl font-medium text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-base" placeholder="your email id"/>
                    </div>
                    <div class="py-3 pb-0">
                    <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-4/5 m-auto px-3 py-3 bg-gray-100 border-gray-300 placeholder-gray-900 text-gray-500 font-medium rounded-xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-base" placeholder="enter password"/>
                    </div>
                </div>

                <div class="flex items-end float-right">

                    <div class="text-sm mr-12 pb-3">
                    <a href="#" class="font-semibold text-gray-500 hover:text-grey-300">
                        Forgot password?
                    </a>
                    </div>
                </div>

                <div>
                    <button onClick={props.toggle} class="group relative m-auto my-2 w-4/5 flex justify-center px-3 py-2 border border-transparent text-base font-bold rounded-xl text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Login
                    </button>
                    <button class="group relative text-indigo-700 m-auto my-4 w-4/5 flex justify-center px-3 py-2 border-2 border-indigo-700 text-base font-bold rounded-xl text-white bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Login with gmail
                    </button>
                </div>
                <div class="flex justify-center text-sm py-3 text-gray-400 font-bold">
                    Not a member of iLRNU?
                    &nbsp;
                    <a href="#" class="text-sm font-bold text-indigo-700 hover:text-grey-300">
                        Sign Up
                    </a>
                </div>
            </div>
            </Modal.Body>
            
        </Modal>
        </div>
    )
}

export default Login
