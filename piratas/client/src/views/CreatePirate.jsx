import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createNewPirate } from '../actions/apiPirate';
import PirateForm from '../components/PirateForm';


const CreatePirate = () => {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const [pirate, setPirate] = useState();

    const createPirateSubmit = (values) => {
        console.log(values);
        setPirate(values);
        createPirataApi(values);
    }
    const createPirataApi = async(pirate) =>{
        const res = createNewPirate(pirate);
        const errorArr = [];
        for (const key of Object.keys(res)) { 
            errorArr.push(res[key].message)
        }
      
      
      setErrors(errorArr);
    }
  return (
    <div>
        {errors && errors.map((err, index) => <p key={index}>{err}</p>)}
        <PirateForm onSubmitProp={createPirateSubmit} ></PirateForm>

    </div>
  )
}

export default CreatePirate