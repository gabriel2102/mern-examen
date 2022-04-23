import React from 'react'
import { Form, Field, Formik } from 'formik';
import * as Yup from "yup";

const LoginForm = (props) => {
    const {onSubmitProp}=props;
  return (
    <div className='login-content bg-white border border-dark p-5'>
        <h1>Login</h1>
        <Formik
            initialValues={{
                email:'',
                password: '',
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                .email("El correo no es válido")
                .required("El campo email es obligatorio"),
                password: Yup.string()
                .required("El campo contraseña es obligatorio")
            })}
            onSubmit={(values, {setSubmitting})=>{
                const timeOut = setTimeout(( )=>{
                    console.log(values);
                    onSubmitProp(values);
                    setSubmitting(false);
                    clearTimeout(timeOut);
                }, 1000);
            }}
        >
            {({errors, touched, handleSubmit})=>{
                return (
                    <div>
                        <Form onSubmit={handleSubmit}>
                            <label className='d-flex justify-content-start mt-2' htmlFor='email'>Email:</label>
                            <Field id="email" type="text" name="email" className="form-control" />
                            {errors.email && touched.email && <p className='error'>{errors.email} </p>}
                            <label className='d-flex justify-content-start mt-2' htmlFor='password'>Password:</label>
                            <Field id="password" type="password" name="password" className="form-control" />
                            {errors.password && touched.password && <p className='error'>{errors.password} </p>}
                    
                            <button className='btn btn-primary m-2' type="submit" disabled={Object.values(errors).length>0}>Login</button>
                        </Form>


                    </div>
                )
            }}
        </Formik>
    </div>
  )
}

export default LoginForm