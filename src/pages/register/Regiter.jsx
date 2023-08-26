import './register.scss'
import netflix from '../../images/netflix.png'
import { useState, useRef } from 'react'
function Regiter() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const emailRef = useRef()
    const passRef = useRef()


    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = () => {
        setPassword(passRef.current.value)
    }

    return (
        <div className='register'>
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src={netflix} alt="" />
                    <button className="login">Sign-In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited, movies, TV shows and many more</h1>
                <h2>Watch anywhere & anytime</h2>
                <p>Ready to watch? Please, Enter your E-Mail</p>
                {!email ? (
                    <div className="input">
                        <input type="email" placeholder='ex. xyz@email.com' ref={emailRef} />
                        <button className='registerBtn' onClick={handleStart}>Get Started</button>
                    </div>
                ) : <form className="input">
                    <input type="password" placeholder='password' ref={passRef} />
                    <button className='registerBtn' onClick={handleFinish}>Start</button>
                </form>}

            </div>
        </div>
    )
}

export default Regiter