import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import './styles.css'

const LoginForm = () => {

    const history = useHistory()

    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const handleEmail = (e) => {
        console.log(e.target.value);
        setEmailInput(e.target.value)
    }

    const handlePassword = (e) => {
        setPasswordInput(e.target.value)
    }

    const handleForm = (e) => {
        e.preventDefault();
        const values = {
            email: emailInput,
            password: passwordInput,
        }
        if(emailInput === '' || passwordInput ===''){ 
            console.log('epa epa aqui no pusiste nada')
        }else{
            console.log(values)
            history.push('/cards')
        }
        setEmailInput('')
        setPasswordInput('')
    } 

    return (
    <div className= "allContainer">
        <div className= "formContainer">
            <form id="form" onSubmit={handleForm}>
                <input type="text" name="emailInput" id="emailInput" placeholder="Correo Electronico o email" onChange={handleEmail} value={emailInput}/>
                <input type="password" name="passwordInput" id="passwordInput" placeholder="password" onChange={handlePassword} value={passwordInput}/>
                <button id="loginButton" onClick={handleForm}>Login</button>
            </form>
        </div>
    </div>
    )
}

export default LoginForm