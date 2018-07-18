let {select} =require("../mysql/index");
let {USER_UPDATE_ID}=require("../mysql/sql")
async function dealMysql(req,res){
    let {name,userID}=req.query;
    let user_info=await select(USER_UPDATE_ID,[name,userID]);
    res.send({code:1,msg:"修改成功"})
}
module.exports=(req,res,next)=>{
    console.log(req.query)
    console.log(11212)
     dealMysql(req,res)
}
