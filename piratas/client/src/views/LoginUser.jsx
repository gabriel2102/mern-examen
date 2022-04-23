import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm'
import { useUser } from '../context/userContext';


const LoginUser = () => {
    const {setUser}=useUser();
    const [errors, setErrors] = useState([]);
    const navigate=useNavigate();

    const loginUser = (values) =>{
        console.log('aqui');
        axios.post('/api/login', values)
            .then(res=>{
                console.log('Usuario loggueado');
                console.log(res.data);
                axios.get(`/api/user/${res.data._id}`, {withCredentials: true})
                .then(res=>{
                    setUser(res.data);
                    navigate("/pirates");
                })
                .catch(err=>{
                    console.error(err);
                    return { success: false, data: err.message };
                })
                
            })
            .catch(err=>{
                console.log(err.response.data);
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            }) 
    }
  return (
    <div>
        {errors.map((err, index) => <div className={`alert alert-danger`} role="alert">{err}</div>)}
            <LoginForm onSubmitProp={loginUser}></LoginForm>
    </div>
  )
}

export default LoginUser