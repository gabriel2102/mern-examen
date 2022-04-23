const { Pirate, PirateSchema } = require("../models/pirate.model");

module.exports.createNewPirate = async(req,res)=>{
    console.log(req.body);
    try{
        const capitain = await Pirate.find({position:"captain"}).exec();
        if (capitain.length===1 && req.body.pirate.position === "captain"){
            res
            .status(500)
            .json({ errors: { error: { message: "There is already a captain" } } });
        }else{
            const pirate = new Pirate(req.body.pirate);
            await pirate.save();
            return res
                .json({pirate:pirate});
        }

    }catch(err){
        res.status(500).json(err);
        
    }
}

module.exports.findAllPirates = (req,res) => {
    Pirate.find().sort({name:'asc'})
        .then((allPirates)=>res.json({pirates:allPirates}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.findOnePirate= (req,res)=>{
    Pirate.findOne({_id: req.params.id})
        .then((pirate)=>res.json({pirate:pirate}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.changeFeatures = async (req,res) => {

    try {
        const pirate = await Pirate.findById(req.params.id);

        if(req.params.features === "1"){
            pirate.pegLeg=!pirate.pegLeg;
        }
        if(req.params.features === "2"){
            pirate.eyePatch=!pirate.eyePatch;
        }
        if(req.params.features === "3"){
            pirate.hookHand=!pirate.hookHand;
        }

        await pirate.save();
            return res
                .json({pirate:pirate});

    }catch(err){
        res.status(500).json(err);
    }
}

module.exports.deletePirate = (req,res)=>{
    Pirate.deleteOne({_id: req.params.id})
    .then((result)=>res.json({resultado:result}))
    .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}