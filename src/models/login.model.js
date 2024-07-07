
module.exports={
    loginModel:(userName)=>`CALL SP_GET_SIGNIN_DETAILS('${userName}')`
}