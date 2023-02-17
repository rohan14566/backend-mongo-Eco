
const {findAllFromToDB}=require("../database/connection")

const IpadController=async function(req,res){
  try {
      const ipadData=await findAllFromToDB("IpadController");
      return res.status(200).send(ipadData)
    }
     catch (error) {
        console.log("error occured while fetching the data=>",error);
        return res.status(500).send({message:"something went wrong while fetching data"})
       }
}
module.exports={IpadController}

