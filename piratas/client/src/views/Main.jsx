import React from 'react'
import LoginForm from '../components/LoginForm'
import RegistroForm from '../components/RegistroForm'
import LoginUser from './LoginUser'
import RegisterUserView from './RegisterUserView'

const Main = () => {
  return (
    <div>
      <h1 className='header text-white'>Welcome to Pirate Crew</h1>
      <div className='main-content d-flex flex-row justify-content-evenly m-5'>
        <RegisterUserView/>
        <LoginUser/>
    </div>
    </div>
    
  )
}

export default Main