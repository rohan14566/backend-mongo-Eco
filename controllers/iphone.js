
const {findAllFromToDB}=require("../database/connection")

const IphoneController=async function(req,res){
  try {
      const iphoneData=await findAllFromToDB("IphoneController");
      return res.status(200).send(iphoneData)
    }
     catch (error) {
        console.log("error occured while fetching the data=>",error);
        return res.status(500).send({message:"something went wrong while fetching data"})
       }
}
module.exports={IphoneController}