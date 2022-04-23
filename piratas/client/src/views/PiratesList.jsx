import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getPirates, deletePirateById } from '../actions/apiPirate';

const PiratesList = () => {
    const navigate = useNavigate();
    const [pirates, setPirates] = useState([]);
    const viewHandler = (id) => {
        navigate('/pirate/'+id);
    }
    const onClickHandler = () =>{
        navigate('/pirate/new');
    }
    const getAllPiratesApi = async () => {
        const res = await getPirates();
        setPirates(res.pirates);
    }
    useEffect(() => {
        getAllPiratesApi();
      }, [])
    const deleteHandler = (id) => {
        deletePirate(id);
        setPirates(pirates.filter(pirate=>pirate._id !== id))
    }
    const deletePirate = async (id) => {
        await deletePirateById(id);
    }
  return (
    <div className='pirate-list-content'>
        <div className='header text-white d-flex flex-row justify-content-evenly m-1 align-items-center'>
            <h1>Pirate Crew</h1>
            <button className='btn btn-primary m-2' onClick={onClickHandler}>Add pirate</button>
        </div>
        <div className='pirates-items d-flex flex-column m-1'>
            <div className="card">
                
                    {
                        pirates && pirates.map((pirate, i) => {
                            return (
                                <div key={i} className="card-body d-flex flex-row p-3 justify-content-evenly"> 
                                    <div className='card-body-col1 p-3 d-flex flex-column align-items-start'>
                                        <img src={pirate.image} className='img-pirate border border-dark' />
                                        
                                    </div>
                                    <div className='card-body-col2 p-3 d-flex flex-column justify-content-between'>
                                        <h2>{pirate.pirateName}</h2>
                                        <div className='d-flex flex-row justify-content-between'>
                                            <button onClick={()=>viewHandler(pirate._id)} className="btn btn-primary m-1 px-5">View Pirate</button>
                                            <button onClick={()=>deleteHandler(pirate._id)} className="btn btn-danger m-1 px-5">Walk the Plank</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                    
                    
                
            </div>
        </div>
    </div>
  )
}

export default PiratesList