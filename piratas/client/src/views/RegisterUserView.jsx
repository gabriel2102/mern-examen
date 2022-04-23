import React, { useState } from 'react'
import { useUser } from '../context/userContext';
import RegistroForm from '../components/RegistroForm'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterUserView = () => {
    const [errors, setErrors] = useState([]); 
    const {setUser}=useUser();
    const navigate=useNavigate();
    
    const registerUser = user => {
        axios.post('/api/register', user)
            .then(res=>{
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
        {errors.map((err, index) => <div className="alert alert-danger" role="alert">{err}</div>)}
        <RegistroForm onSubmitProp={registerUser} iFirstName='' iLastName='' iEmail='' iPassword='' iConfirm=''/>
    </div>
  )
}

export default RegisterUserView