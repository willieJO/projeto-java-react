
"use client";
import React, { useState, useEffect } from 'react';
import {Button, LinkButton}   from '../components/button/button';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  
    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };
    
    return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-md w-full p-4 bg-white rounded-md shadow-md">
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-black rounded-md text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600 text-sm font-semibold mb-2">
                  Senha
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="w-full p-2 border border-black rounded-md text-black"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer text-black"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-5.48-5.48M15 12h0M3 3l5.48 5.48M9 12a6 6 0 100-12 6 6 0 000 12z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-5.48-5.48M15 12h0M3 3l5.48 5.48M9 12a6 6 0 100-12 6 6 0 000 12z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <Button buttonText="Entrar" class='w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-blue' />
              <LinkButton href='/registro' buttonText="Registrar" class='w-full py-2 mt-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue' />
            </form>
          </div>
        </div>
      );
}