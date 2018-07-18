let {select} =require("../mysql/index");
const {USER_DELETE_ID}=require("../mysql/sql");
async function dealMysql(req,res){
    let {id}=req.query;
    let remove_user=select(USER_DELETE_ID,[id]);
    res.send({msg:"删除成功",code:1})
}
module.exports=(req,res)=>{
   dealMysql(req,res)
}