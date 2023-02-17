const express=require('express');
const iphoneRouter=require('../controllers/iphone')
const router=express.Router();

router.get('/iphone',iphoneRouter.IphoneController)

module.exports=router