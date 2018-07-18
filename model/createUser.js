let {select,insert}=require("../mysql/index");
const {USER_SELECT_ID,USER_SELECT_NAME,USER_INSERT_ALL}=require('../mysql/sql');
async function dealMysql(name,id,money,res){
    let userId_info=await select(USER_SELECT_ID,[id]);
    if(userId_info.length===0){
         let userName_info=await select(USER_SELECT_NAME,[name]);
         if(userName_info.length===0){
            let insert_info=insert(USER_INSERT_ALL,[name,id,money]);
            res.send({msg:"创建成功",code:1})
         }else{
            res.send({msg:"用户名重复",code:0})
         }
    }else{
        res.send({msg:"用户Id重复",code:0})
    }
}
module.exports=(req,res)=>{
    let {name,id,money}=req.query;
    if(name===''||id===''||money===''){
         res.send({code:0})
         return;
    }
    dealMysql(name,id,money,res)
}