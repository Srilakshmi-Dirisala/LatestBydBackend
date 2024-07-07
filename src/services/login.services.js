
const bcrypt=require('bcryptjs')
const {query}=require('./execution');
const {loginModel} = require('../models/login.model');
const jwt=require('jsonwebtoken')
const loginServices = async (req) => {
    try {
      const UserName = req.body.UserName;
      const password = req.body.password;

    //   const salt = await bcrypt.genSalt(10);
    //   let secPass = await bcrypt.hash(password, salt); //req.body.password
  
      let result = await query(loginModel(UserName));
      if (UserName == result[0][0]?.UserName) {
      
        const hashedPassword = result[0][0]?.Password;
        if (await bcrypt.compare(password, hashedPassword)) {
          // Create token
          const token = jwt.sign({ username: UserName }, process.env.TOKEN_KEY, {
            expiresIn: "1h",
          });
          return {
            status: 200,
            message: "Sign in Successfully",
            data: {
              token,
              UserName: result[0][0]?.UserName,
              AdminID: result[0][0]?.AdminID
            },
          };
        }
        return { status: 300, message: "Invalid password", data: [] };
      } else {
        return { status: 300, message: "Invalid user", data: [] };
      }
    } catch (error) {
      console.log(error);
      return { status: 400, message: "Error", data: error };
    }
  };

module.exports = {
    loginServices
}