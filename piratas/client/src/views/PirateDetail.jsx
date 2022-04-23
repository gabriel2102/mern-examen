import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPirateById, changeFeautures } from '../actions/apiPirate';
import axios from 'axios';


const PirateDetail = () => {
    const {id} = useParams();
    const [pirate, setPirate] = useState();
    const [pegLeg, setPegLeg] = useState();
    const [eyePatch, setEyePatch] = useState()
    const [hookHand, setHookHand] = useState()
    
    const getPirateApi= async (id) =>{
        const res = await getPirateById(id);
        console.log(res.data.pirate);
        setPirate(res.data.pirate);
        setPegLeg(res.data.pirate.pegLeg);
        setEyePatch(res.data.pirate.eyePatch);
        setHookHand(res.data.pirate.hookHand);
        
      }
    useEffect(() => {
        
      getPirateApi(id);
    }, [])
    const changeFeauturesForm = async (feature) => {
        axios.post('/api/pirate/changefeatures/'+feature+"/"+id)
        .then(res=>{
            console.log("resulto")
            if(feature === 1){
                const original = pegLeg;
                console.log(original);
                setPegLeg(!original);
            }
            if(feature === 2){
                const original = eyePatch;
                setEyePatch(!original);
            }
            if(feature === 3){
                const original = hookHand;
                setHookHand(!original);
            }

        }).catch((err)=>{
            
        })
    }

  return (
    <div className='detail-pirate'>
        <div className='header text-white d-flex flex-row justify-content-evenly m-1 align-items-center'>
            <h1>Deep Sea Davy</h1>
        </div>
        <div className='pirate-detail d-flex flex-row justify-content-evenly'>
            <div className='div-pirate-detail m-2'>
                <img src={pirate?.image} className='img-pirate-detail border border-dark'/>
                <h1>{pirate?.phrase}</h1>
            </div>
            <div className='pirate-detail-content bg-white m-2 p-3 px-5 border-dark d-flex flex-column justify-content-between align-items-start'>
                <h1 className='align-self-center'>About</h1>
                <div className='d-flex flex-row justify-content-between'>
                    <p className='me-3'>Position: </p>
                    <p>{pirate?.position}</p>
                </div>
                <div className='d-flex flex-row justify-content-evenly'>
                    <p className='me-3'>Treasures: </p>
                    <p>{pirate?.treasures}</p>
                </div>
                <div className='d-flex flex-row justify-content-evenly'>
                    <p className='me-3'>Peg Leg: </p>
                    <p className='me-3'>{pegLeg?"SI":"NO"}</p>
                    <button className={pegLeg?"btn btn-danger":"btn btn-success"} onClick={()=>changeFeauturesForm(1)}>{pegLeg?"NO":"YES"}</button>
                </div>
                <div className='d-flex flex-row align-self-start'>
                    <p className='me-3'>Eye Patch:</p>
                    <p className='me-3'>{eyePatch?"SI":"NO"}</p>
                    <button className={eyePatch?"btn btn-danger":"btn btn-success"} onClick={()=>changeFeauturesForm(2)}>{eyePatch?"NO":"YES"}</button>
                </div>
                <div className='d-flex flex-row align-self-start'>
                    <p className='me-3'>Hook Hand:</p>
                    <p className='me-3'>{hookHand?"SI":"NO"}</p>
                    <button className={hookHand?"btn btn-danger":"btn btn-success"} onClick={()=>changeFeauturesForm(3)}>{hookHand?"NO":"YES"}</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default PirateDetail