"use client";
import 'react-toastify/dist/ReactToastify.css';

import React, { useState, useEffect } from 'react';
import {Button, LinkButton}   from '../components/button/button';
import { ToastContainer, toast } from 'react-toastify';
import { EnviarDados } from '../api/usuario';

export default function Registro() {
  const [login, setLogin] = useState<{nome:string, email:string, password:string, data_nascimento:string}>
  ({
    nome: '',
    email: '',
    data_nascimento: '',
    password: ''
  });

  function registrarUsuario() {
    const keyValue =  {
      "nome": "Nome",
      "email": "E-mail",
      "idade": "Idade",
      "password": "Senha"
    };
    for (const [key, value] of Object.entries(keyValue)) {
      if (login[key as keyof  typeof login] == '') {
        toast.warn(`${value} e obrigatorio`);
        return;
      }
    }
    EnviarDados(login);
  }

     
    return (
      
        <div className="flex items-center justify-center min-h-screen">
          <ToastContainer />
          <div className="max-w-md w-full p-8 bg-white rounded-md shadow-md">
            <div className="mb-4">
                <label htmlFor="nome" className="block text-gray-600 text-sm font-semibold mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  className="w-full p-2 border border-black rounded-md text-black"
                  value={login.nome}
                  onChange={(e) => setLogin({ ...login, nome: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="data" className="block text-gray-600 text-sm font-semibold mb-2">
                  Data de nascimento
                </label>
                <input
                  type="date"
                  id="data"
                  className="w-full p-2 border border-black rounded-md text-black"
                  value={login.data_nascimento}
                  onChange={(e) => setLogin({ ...login, data_nascimento: e.target.value })}
                />
              </div>
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
              <Button click={registrarUsuario} buttonText="Entrar" class='w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-blue' />
              <LinkButton href='/login' buttonText="Voltar" class='w-full py-2 mt-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:shadow-outline-blue' />
          </div>
        </div>
      );
}