/* eslint-disable react/button-has-type */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import supabase from '../../config/supabaseClient';

export default function recovey() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    // const { data, error } = await supabase.auth.resetPasswordForEmail(email)

    const { data, error } = supabase.auth.updateUser({
      email,
      password
    })
    console.log({ data, error })
  }

  return (
    <Layout title='recuperar contraseña' description="Description will go into a meta tag in <head />">
      <main>
        <p>Actualiza tu contraseña</p>
        <input type="text" className='--ifm-color-primary-lightest' placeholder='Correo' value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" className='--ifm-color-primary-lightest' placeholder='contraseña' value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleSubmit}>Actualizar</button>
      </main>
    </Layout>
  );
}