const {findAllFromToDB}=require("../database/connection")

const MacbookController=async function(req,res){
  try {
      const macData=await findAllFromToDB("MacbookController");
      return res.status(200).send(macData)
    }
     catch (error) {
        console.log("error occured while fetching the data=>",error);
        return res.status(500).send({message:"something went wrong while fetching data"})
       }
}
module.exports={MacbookController}

