let {select ,insert} =require('../mysql/index');
const {USER_INSERT_INFO}=require("../mysql/sql");
async function dealMysql(date,asyncValue,price,Bz,res){
     let insert_info=await insert(USER_INSERT_INFO,[date,price,asyncValue[0],Bz]);
     res.send({code:1})
}
module.exports=(req,res)=>{
    let {date,asyncValue,price,Bz}=req.query;
    dealMysql(date,asyncValue,price,Bz,res)
    res.send({code:1})
}