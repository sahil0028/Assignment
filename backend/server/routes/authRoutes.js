const express = require('express')
const router = express.Router()
const authController = require('../apis/authController')

router.post('/login',authController.login)
router.post('/signup',authController.signup)
router.all('*',(req,res)=>{
    res.send({
        success:false,
        status:404,
        message:'Invalid Routes'
    })
})

module.exports = router

