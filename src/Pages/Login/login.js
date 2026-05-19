import { User, Lock, Key } from 'lucide-react';
import React, { useState } from "react";
import loginData from "../Login/loginDetails.json"
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [passowrd, setPassowrd] = useState('')
  const [loginMessage, setLoginMessage] = useState('')

  const handleUserName = (e) => {
    setUserName(e.target.value)
  }

  const handlePassword = (e) => {
    setPassowrd(e.target.value)
  }

  const handleLoginButton = () => {
    const correctUserName = loginData.find((u) => userName === u.username)
    if (!correctUserName) {
      setLoginMessage("Incorrect UserName")
      return
    }
    const correctPassowrd = passowrd === correctUserName.password
    if (!correctPassowrd) {
      setLoginMessage("Incorrect Passowrd")
    }
    else {
      setTimeout(() => {
        navigate('/dashboard')
      }, 1000);
      setLoginMessage("Correct Details")
    }

  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm">

        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800">Welcome</h2>
          <p className="text-gray-500 mt-2 text-sm">Please login to your account</p>
        </div>

        <div className="space-y-5">

          {/* Username Input with Icon */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              onChange={handleUserName}
              type="text"
              placeholder="Username"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>

          {/* Password Input with Icon */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              onChange={handlePassword}
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>

          <button
            onClick={handleLoginButton}
            type="button"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors duration-300 shadow-lg"
          >
            Login
          </button>

          {loginMessage && (
            <p className="text-center text-sm font-medium text-red-500 mt-4 animate-bounce">
              {loginMessage}
            </p>
          )}

          {/* --- Theme Based Demo Credentials Section --- */}
          <div className="mt-6 pt-5 border-t border-gray-100">
            <div className="flex items-center gap-1.5 mb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              <Key className="h-3.5 w-3.5" />
              <span>Demo Accounts</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
              <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                <p className="font-bold text-gray-700 mb-0.5">User1</p>
                <p><span className="text-gray-400">User:</span> admin</p>
                <p><span className="text-gray-400">Pass:</span> admin123</p>
              </div>

              <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                <p className="font-bold text-gray-700 mb-0.5">User2</p>
                <p><span className="text-gray-400">User:</span> smith</p>
                <p><span className="text-gray-400">Pass:</span> smith123</p>
              </div>
            </div>
          </div>
          {/* ------------------------------------------- */}


        </div>
      </div>
    </div>
  )
}

export default Login
