import './login.scss'
import Netflix from '../../images/netflix.png'
function Login() {
    return (
        <div className='loginPage'>
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src={Netflix} alt="" />
                </div>
            </div>
            <div className="container">
            <form>
                    <input type='email' placeholder='E-mail' />
                    <input type='password' placeholder='password' />
                    <button className="loginbtn">Sign In</button>
                    <span>New to Netflix? <b>Sign Up now</b></span>
                    <small>
                        This page is protected by google reCAPTCHA
                    </small>
                </form>
            </div>
        </div >
    )
}

export default Login