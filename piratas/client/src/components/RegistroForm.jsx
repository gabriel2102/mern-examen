import React, { useState } from 'react'
import { Form, Field, Formik } from 'formik';
import * as Yup from "yup";

const RegistroForm = (props) => {
    const [usuario, setUsuario] = useState();
    const {iFirstName,iLastName,iEmail,iPassword,iConfirm,onSubmitProp}=props;
  return (
    <div className='registro-content bg-white border border-dark p-5'>
        <h1>Register</h1>
        <Formik
            initialValues={{
                firstName:iFirstName,
                lastName: iLastName,
                email:iEmail,
                password: iPassword,
                confirmPassword: iConfirm,
                
            }}
            validationSchema={Yup.object().shape({
                firstName: Yup.string()
                .required('El campo firstName es obligatorio')
                .min(3, 'firstName debe contener 3 caracteres mínimos'),
                lastName: Yup.string()
                .required('El campo lastname es obligatorio')
                .min(3, 'Lastname debe contener 3 caracteres mínimos'),
                email: Yup.string()
                .email("El correo no es válido")
                .required("El campo email es obligatorio"),
                password: Yup.string()
                .required("El campo contraseña es obligatorio")
                .equals([Yup.ref('confirmPassword'),null],"Las contraseñas deben coincidir")
                .min(8,"La contraseña debe tener al menos 8 caracteres"),
                confirmPassword: Yup.string()
                .required("El campo de confirmación de contraseña es obligatorio")
                .equals([Yup.ref('password'),null],"Las contraseñas deben coincidir"),
                
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
                            <label className='d-flex justify-content-start' htmlFor='firstName'>Name:</label>
                            <Field id="firstName" type="text" name="firstName" className="form-control" />
                            {errors.firstName && touched.firstName && <p className='error'>{errors.firstName} </p>}
                            <label className='d-flex justify-content-start' htmlFor='lastName'>Last Name:</label>
                            <Field id="lastName" type="text" name="lastName" className="form-control" />
                            {errors.lastName && touched.lastName && <p className='error'>{errors.lastName} </p>}
                            <label className='d-flex justify-content-start' htmlFor='email'>Email:</label>
                            <Field id="email" type="text" name="email" className="form-control" />
                            {errors.email && touched.email && <p className='error'>{errors.email} </p>}
                            <label className='d-flex justify-content-start' htmlFor='password'>Password:</label>
                            <Field id="password" type="password" name="password" className="form-control" />
                            {errors.password && touched.password && <p className='error'>{errors.password} </p>}
                            <label className='d-flex justify-content-start' htmlFor='confirmPassword'>Confirmar Password:</label>
                            <Field id="confirmPassword" type="password" name="confirmPassword" className="form-control" />
                            {errors.confirmPassword && touched.confirmPassword && <p className='error'>{errors.confirmPassword} </p>}
                            
                            <button className='btn btn-primary m-2' type="submit" disabled={Object.values(errors).length>0} >Registrarse</button>
                        </Form>


                    </div>
                )
            }}
        </Formik>
    </div>
  )
}

export default RegistroForm