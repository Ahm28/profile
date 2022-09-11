import { TextField, Typography } from '@mui/material'
import { Box, createTheme, ThemeProvider } from '@mui/system'
import React from 'react'

const theme = createTheme({
  typography: {
    fontFamily: ['"Inter"', 'sans-serif'].join(',')
  }
})

export default function Login() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto rounded-md shadow-md lg:max-w-xl" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #FFFFFF59'}}>
            <h1 className="text-3xl font-semibold text-center text-[#FDB827]">
                Login
            </h1>
            <form className="mt-6">
                <div className="mb-2">
                    <label
                        for="email"
                        className="block text-sm font-semibold text-gray-300"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                        for="password"
                        className="block text-sm font-semibold text-gray-300"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <a
                    href="#"
                    className="text-xs text-[#FDB827] hover:underline"
                >
                    Forget Password?
                </a>
                <div className="mt-6">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#FDB827] rounded-md hover:bg-[#E49D05] focus:outline-none focus:bg-[#FDB827]">
                        Login
                    </button>
                </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-500">
                {" "}
                Don't have an account?{" "}
                <a
                    href="#"
                    className="font-medium text-[#FDB827] hover:underline"
                >
                    Sign up
                </a>
            </p>
        </div>
    </div>
  )
}
