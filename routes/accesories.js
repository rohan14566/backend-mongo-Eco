const express=require('express');
const accesoriesRouter=require('../controllers/accesories')
const router=express.Router();

router.get('/accesories',accesoriesRouter.AccesoriesController)

module.exports=router