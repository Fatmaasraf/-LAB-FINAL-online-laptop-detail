const product = require("../models/NewCreateAcount");

const add_Acount = async(req,res)=>{

    try{
        var arrimages = [];
        for(let i=0 ; i<req.files.length;i++){
            arrimages[i] = req.files[i].filename;
        }

        var CreateAcount = new CreateAcount({
            A_id:req.body.A_id,
            A_Username:req.body.A_Username,
            A_Password:req.body.A_Password,
            A_AcountNumber:req.body.A_AcountNumber,
            A_cat:req.body.A_cat,
            images: arrimages

        });

        const CreateAcount_data = await CreateAcount.save();
        res.status(200).send({success:true,msg:"Acount Details",data:CreateAcount_data});

    }

    catch(error){
        res.status(400).send({success:false,msg:error.message});
    }


}

module.exports = {
    add_Acount
}