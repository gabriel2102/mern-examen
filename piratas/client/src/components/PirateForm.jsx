import React from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';

const PirateForm = (props) => {
    const {onSubmitProp} = props;
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate('/pirates')
    }
    return (
        <div>
            <div className='header text-white d-flex flex-row justify-content-evenly m-1 align-items-center'>
                <h1>Add Pirate</h1>
                <button className='btn btn-primary m-2' onClick={onClickHandler}>Crew Board</button>
            </div>
            <Formik
                initialValues={{
                    pirateName: "",
                    image:"",
                    treasures:3,
                    phrase:"",
                    position:"Captain",
                    pegLeg: true,
                    eyePatch: true,
                    hookHand: true,
                }}

                validationSchema={Yup.object().shape({
                    pirateName: Yup.string()
                    .required("Por favor ingresa un nombre"),
                    image: Yup.string()
                    .required("Imagen Obligatoria"),
                    treasures: Yup.number()
                    .required("Treasures obligatoria"),
                    phrase: Yup.string()
                    .required("Phrase Obligatoria"),
                    position: Yup.string()
                    .required("Position es obligatorio"),
                    pegLeg: Yup.bool(),
                    eyePatch: Yup.bool(),
                    hookHand: Yup.bool(),
                })}

                onSubmit={(values,{setSubmitting})=>{
                    onSubmitProp(values);
                }}

                >
                {({errors,
                    touched,
                    handleSubmit})=>{

                        return (
                            <div>
                                
                                <Form onSubmit={handleSubmit}>
                                    <div className='div-form-create d-flex flex-row justify-content-evenly m-5'>
                                        <div className='form-create-col1'>
                                            <label htmlFor='pirateName'>Pirate Name</label>
                                            <Field id="pirateName" type="text" name="pirateName" className="form-control" />
                                            {errors.pirateName && touched.pirateName && <p className='error'>{errors.pirateName} </p>}

                                            <label htmlFor='image'>Image URL</label>
                                            <Field id="image" type="text" name="image" className="form-control" />
                                            {errors.image && touched.image && <p className='error'>{errors.image} </p>}

                                            <label htmlFor='treasures'># of Treasures</label>
                                            <Field id="treasures" type="number" name="treasures" className="form-control" />
                                            {errors.treasures && touched.treasures && <p className='error'>{errors.treasures} </p>}

                                            <label htmlFor='phrase'>phrase</label>
                                            <Field id="phrase" type="text" name="phrase" className="form-control" />
                                            {errors.phrase && touched.phrase && <p className='error'>{errors.phrase} </p>}
                                        </div>
                                        <div className='form-create-col2 d-flex flex-column'>
                                            <label htmlFor="position" >Position Crew:</label>
                                            <Field  id='position' type="text" as='select' name='position'>
                                                <option value="captain">Captain</option>
                                                <option value="firstMate">First Mate</option>
                                                <option value="quarterMaster">Quarter Master</option>
                                                <option value="boatswain">Boatswain</option>
                                                <option value="powderMonkey">Powder Monkey</option>
                                            </Field>

                                            <br></br>
                                            <div className='chk-1 d-flex flex-row justify-content-around align-items-center'>
                                                <Field id="pegLeg" type="checkbox" name="pegLeg" />
                                                <label htmlFor='pegLeg'>Peg Leg</label>
                                                {errors.pegLeg && touched.pegLeg && <p className='error'>{errors.pegLeg} </p>}
                                            </div>
                                            <div className='chk-2 d-flex flex-row justify-content-around align-items-center'>
                                                <Field id="eyePatch" type="checkbox" name="eyePatch"  />
                                                <label htmlFor='eyePatch'>Eye Patch</label>
                                                {errors.eyePatch && touched.eyePatch && <p className='error'>{errors.eyePatch} </p>}
                                            </div>
                                            <div className='chk-3 d-flex flex-row justify-content-around align-items-center'>
                                                <Field id="hookHand" type="checkbox" name="hookHand" />
                                                <label htmlFor='hookHand'>Hook Hand</label>
                                                {errors.hookHand && touched.hookHand && <p className='error'>{errors.hookHand} </p>}
                                            </div>
                                            

                                            

                                                                     
                                            <br></br>
                                            <button type="submit" className='btn btn-primary' disabled={Object.values(errors).length>0} >Add Pirate</button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        )

                    }}

                </Formik>
        </div>
  )
}

export default PirateForm