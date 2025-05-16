import { Link } from "react-router-dom"
import {use, useState, useEffect} from 'react'
import { auth, db } from "./FireBase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { setDoc, doc } from "firebase/firestore"
import {provider} from "./FireBase"
import { signInWithPopup } from "firebase/auth"



function Signup(){
    const[firstname,setFirstname]=useState('')
    const[lastname,setLastname]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const [value,setValue]=useState('')
    const handleClick=()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }
    useEffect(()=>{
        setValue(localStorage.getItem("email"))
    })
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            await createUserWithEmailAndPassword(auth,email,password)
            const user = auth.currentUser;
            if(user){
                await setDoc(doc(db,"users",user.uid),{
                    email:email,
                    firstName:firstname,
                    lastName:lastname
                });
            }
            console.log(user)
            toast.success("User registered Successfully",{position:'bottom-center'})
            console.log("User registered Successfully")
        }catch(error){
            console.log(error.message)
            toast.error(error.message,{position:'bottom-center'})
        }
        
    }
    //  const handleChange=(e)=>{
    //     const[name,setNme]=useState('')
    // }
    
    //  const confiqureCapture=()=>{
    //     window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
    //     'size': 'invisible',
    //     'callback': (response) => {
    //         // reCAPTCHA solved, allow signInWithPhoneNumber.
    //         this.onSignInSubmit();
    //         console.log("Recaptcha Verified")
    //     },
    //     defaultCountry:"IN"
    //     });

    // }
    // const onSignInSubmit=()=>{

    // }
    return(
        <>
        <div className='Signup-page'>
            <div className='Signin-card'>
               <h1>SignIn</h1>
                <form action="" onSubmit={handleSubmit}>
                <div className='firstname'>
                        <label htmlFor="firstname">FirstName</label>
                        <input type="firstname" name='firstname-identifier' id="firstname" value={firstname} onChange={(e)=>setFirstname(e.target.value)} />
                    </div>
                    <div className='lastname'>
                        <label htmlFor="lastname">LastName</label>
                        <input type="lastname" name='lastname-identifier' id="lastname" value={lastname} onChange={(e)=>setLastname(e.target.value)} />
                    </div>
                    <div className='email'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email-identifier' id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className='password'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <div className='btn'>
                        <button>Register</button>
                    </div>
                    <h5>Login:<Link to="/Login">Click Here</Link></h5>
                    <div className="google">
                        <h5>Or</h5>
                        <button onClick={handleClick}>Signin with Google</button>
                    </div>
                    <div id="sign-in-button"></div>
                    <div className="number" >
                        <h5>or</h5>
                        <input type="number" name="mobile" placeholder="mobile number" required  />
                        <button type="submit">Submit</button>
                        

                    </div>
                    
                    
                </form>

            </div>
        </div>
        
            
        </>
    )
}
import { toast } from "react-toastify"
import Login from "./Login"
export default Signup