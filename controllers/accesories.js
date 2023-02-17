

const {findAllFromToDB}=require("../database/connection")

const AccesoriesController=async function(req,res){
  try {
      const accesoriesData=await findAllFromToDB("AccesoriesController");
      return res.status(200).send(accesoriesData)
    }
     catch (error) {
        console.log("error occured while fetching the data=>",error);
        return res.status(500).send({message:"something went wrong while fetching data"})
       }
}
module.exports={AccesoriesController}


