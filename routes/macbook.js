const express=require('express');
const macbookRouter=require('../controllers/macbook')
const router=express.Router();

router.get('/macbook',macbookRouter.MacbookController)

module.exports=router