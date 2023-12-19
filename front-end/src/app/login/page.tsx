
"use client";
import React, { useState, useEffect } from 'react';
import {Button, LinkButton}   from '../components/button/button';


export default function Login() {
  const [login, setLogin] = useState<{email:string; password:string}>
  ({
    email: '',
    password: ''
  });

     
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
                  value={login.email}
                  onChange={(e) => setLogin({ ...login, email: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block  text-gray-600 text-sm font-semibold mb-2">
                  Senha
                </label>
                <input
                    
                    id="password"
                    className="w-full p-2 border border-black rounded-md text-black"
                    value={login.password}
                    onChange={(e) => setLogin({...login, password: e.target.value})}
                  />
              </div>
              <Button buttonText="Entrar" class='w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-blue' />
              <LinkButton href='/registro' buttonText="Registrar" class='w-full py-2 mt-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue' />
            </form>
          </div>
        </div>
      );
}