import { useState } from 'react'

export default function ButtonForm(){
    const [userInput, setUserInput ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        for (let key in userInput){
            console.log(key)
            if(userInput[key] === ''){
                alert(`${key} cannot be empty`)
            }    
        }
    }

    const { firstName, lastName, email, password } = userInput;
    return (
        <div className='container'>
            <button className='blue-btn'><span>Try it free 7 days</span> then <br />
            $20/mo. thereafter</button>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="First Name" name='firstName' value={firstName} onChange={changeHandler} />
                <input type="text" placeholder="Last Name" name='lastName' value={lastName} onChange={changeHandler}/>
                <input type="email" placeholder="Email Address" name='email' value={email} onChange={changeHandler}/>
                <input type="password" placeholder="Password" name='password' value={password} onChange={changeHandler}/>
                <button className='green-btn'>Claim your free trial</button>
                <p>By clicking the button you are agreeing to our <span>terms and services.</span></p>
            </form>
        </div>
    )
}