import React, {useState} from 'react'

export const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  return (
    <div>
      <form action="">
        <input type="text" placeholder="Email"/>

        <input type="text" placeholder="Password"/>
      </form>
    </div>
  )
}
