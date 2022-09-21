import React from 'react'
import { useAuth } from '../../../context/authContext';

export const Home = () => {

  const {user} = useAuth()

  console.log(user);

  return (
    <div>
      <h1>Prueba Firebase</h1>
    </div>
  )
}
