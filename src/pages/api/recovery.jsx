/* eslint-disable react/button-has-type */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useIsBrowser from '@docusaurus/useIsBrowser';
import supabase from '../../config/supabaseClient';
import '../../css/recovery.css'

export default function recovey() {
  const isBrowser = useIsBrowser();
  const [code, setCode] = useState('')
  const [password, setPassword] = useState('')

  const myURL = isBrowser ? new URL(window.location.href) : { search: '' };
  const params = new URLSearchParams(myURL.search);
  const email = params.get('email')


  const handleSubmit = async () => {
    if(!email) {
      return alert('Debes acceder a este sitio desde la url que te enviamos por correo')
    }
    if(!code || !password) {
      return alert('Todos los campos son obligatorios')
    }

    const { data, error } = await supabase.auth.verifyOtp({  email, token: code, type: 'email'})

    if(error) {
      return alert('El codigo es incorrecto, o ha expirado')
    }

    const { data: data2, error: error2 } = supabase.auth.updateUser({ email, password })

    if(error2) {
      alert('No se ha podido recuperar la contraseña')
    } else {
      setCode('')
      setPassword('')
      alert('Se ha actualizado la contraseña')
    }
  }

  return (
    <Layout title='recuperar contraseña' description="Description will go into a meta tag in <head />">
      <main>
        <p>Actualiza tu contraseña</p>
        <input type="text" className='--ifm-color-primary-lightest' placeholder='Codigo de validacion' value={code} onChange={e => setCode(e.target.value)} />
        <input type="password" className='--ifm-color-primary-lightest' placeholder='Nueva contraseña' value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleSubmit}>Actualizar</button>
      </main>
    </Layout>
  );
}