
const { loginServices } = require("../services/login.services")
const { callService } = require("./CallServices")



const loginController=async(req,res)=>{
    callService(loginServices,req,res)
  
  }
module.exports = {
    loginController
}