import React, { useState } from 'react'

export default function App() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [mail, setMail] = useState('')
    const [isLogged, setIslogged] = useState(true)
    const LogIn = (e) => {
        const userData = {
            name,
            mail,
            password,
        }
        e.preventDefault()
        localStorage.setItem('Token-Info', JSON.stringify(userData))
        setName('')
        setMail('')
        setPassword('')
        setIslogged(false)
    }
    const LogOut = () => {
        localStorage.removeItem('Token-Info')
        setIslogged(true)
    }
    return (
        <div>

            <h1>User Login Page</h1>

            {isLogged ? (
                <>
                    <form className='container my-3'>
                        <input type="text" value={name} placeholder="Enter Your Name.." onChange={(e) => setName(e.target.value)} name="" id="" />
                        <br /><br />
                        <input type="text" value={mail} placeholder="Enter Your Mail-Id.." onChange={(e) => setMail(e.target.value)} name="" id="" />
                        <br /><br />
                        <input type="password" value={password} placeholder="Enter Your Password.." onChange={(e) => setPassword(e.target.value)} name="" id="" />
                        <br /><br />
                        <button onClick={(e) => { LogIn(e) }}>Log-In</button>
                    </form>
                </>
            ) : (
                <>
                    <h3>User Logged-In Succesfully</h3>
                    <button onClick={LogOut}>Log-Out</button>
                </>
            )}

        </div>
    )
}
