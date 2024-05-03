
const authModel = require('./authModel')
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')
const secret = 'secretKey'

const login = async (req,res)=>{
    try {
        let validate = ''
        if(!req.body.email){
            validate+='email is required '
        }
        if(!req.body.password){
            validate+='password is required '
        }
        if(!!validate){
            res.send({
                sucess:false,
                status:400,
                message:'credentials not valid Please Refresh and try again later'
            })
        }
        else{
            const user = await authModel.findOne({email:req.body.email})
            if(user == null){
                res.send({
                    sucess:false,
                    status:400,
                    message:'email does not exist'
                })
            }
            else{
                if(bcrypt.compareSync(req.body.password,user.password)){
                    if(user.status==true){
                        const payload = {
                            _id:user._id,
                            email:user.email,
                        }
                        const token = jwt.sign(payload, secret, {expiresIn:'5m'} )
                        res.send({
                            sucess:true,
                            status:200,
                            message:'Login sucessfull',
                            data:user,
                            token:token
                        })
                    }
                    else{
                        res.send({
                            sucess:false,
                            status:400,
                            message:'Account is inactive, contact admin'
                        })
                    }
                }
                else{
                    res.send({
                        sucess:false,
                        status:400,
                        message:'Invalid Credentials'
                    })
                }
            }
        }
        
    } catch (error) {
        res.send({
            sucess:false,
            status:500,
            message:'Internal server error! try again later'
        })
        
    }
    
}

const signup=async(req,res)=>{
    try {
        let validate = ''
        if(!req.body.name){
            validate+='name is required '
        }
        if(!req.body.email){
            validate+='email is required '
        }
        if(!req.body.password){
            validate+='password is required '
        }
        if(!!validate){
            res.send({
                sucess:false,
                status:400,
                message:'credentials not valid Please Refresh and try again later'
            })
        }
        else{
            const user = await authModel.findOne({email:req.body.email})
            if(user == null){
                const total = await authModel.countDocuments()
                const user = await new authModel();
                user.autoId = total+1
                user.name = req.body.name
                user.email = req.body.email

                const pass = bcrypt.hashSync(req.body.password,10)

                user.password =pass
                const savedData = await user.save()
                res.send({
                    success:true,
                    status:200,
                    message:'new Account created',
                    data:savedData
                })

            }
            else{
                res.send({
                    sucess:false,
                    status:400,
                    message:'email already exist'
                })
            }
        }
        
    } catch (error) {
        res.send({
            sucess:false,
            status:500,
            message:'Internal server error! try again later'
        })
        
    }

}

module.exports = {login,signup}

