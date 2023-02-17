const express=require('express');
const homeRouter=require('../controllers/home')
const router=express.Router();

router.get('/home',homeRouter.HomeController)

module.exports=router