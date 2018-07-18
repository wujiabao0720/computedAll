let {select} =require("../mysql/index");
const {USER_SELECT_ALLUSER,USER_SELECT_USERID}=require("../mysql/sql");
async function dealMysql(res){
   let user_info=await select(USER_SELECT_ALLUSER,[]);
   for(let item of user_info){
       let sum= await select(USER_SELECT_USERID,[item.id]);
       sum=sum[0].singlemoney?sum[0].singlemoney:0;
       item.money=sum+item.money
   }
   res.send({code:1,data:user_info})
}
module.exports=(req,res)=>{
     dealMysql(res)
}