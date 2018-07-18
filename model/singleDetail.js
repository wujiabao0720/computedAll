let {select} =require("../mysql/index");
const {USER_SELECT_SINGLE}=require("../mysql/sql")
async function dealMysql(id,res){
    console.log(id)
     let single_detail=await select(USER_SELECT_SINGLE,[id]);
     res.send({code:1,data:single_detail})
}

module.exports=(req,res)=>{
   let {id}=req.query;
   dealMysql(id,res)
}