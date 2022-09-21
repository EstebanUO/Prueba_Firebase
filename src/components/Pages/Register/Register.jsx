import React, {useState} from 'react'

export const Register = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleChange = ({target: {name, value}}) =>{
    setUser({...user,[name]: value})
    // console.log(name, value);
  }

  const handleSubmit = e =>{
    e.preventDefault()
    console.log(user);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input type="text" onChange={handleChange} name='email' placeholder='Example@'/>
      <br />
      <label htmlFor="">Password</label>
      <input type="text" onChange={handleChange} id='password' name='password' placeholder='Password'/>
      <br />
      <button>Register</button>
    </form>
  )
}
