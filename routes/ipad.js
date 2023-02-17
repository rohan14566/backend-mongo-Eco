const express=require('express');
const ipadRouter=require('../controllers/ipad')
const router=express.Router();

router.get('/ipad',ipadRouter.IpadController)

module.exports=router