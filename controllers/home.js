
const {findAllFromToDB}=require("../database/connection")

const HomeController=async function(req,res){
  try {
      const homedata=await findAllFromToDB("HomeController");
      return res.status(200).send(homedata)
    }
     catch (error) {
        console.log("error occured while fetching the data=>",error);
        return res.status(500).send({message:"something went wrong while fetching data"})
       }
}
module.exports={HomeController}
