var express = require('express');
var router = express.Router();
const createUser=require("../model/createUser");
const getAllUser=require("../model/getAllUser");
const remove=require("../model/remove");
const amendUser=require("../model/amendUser");
const addUserDetail=require("../model/addUserDetail");
const singleDetail=require("../model/singleDetail")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/password",(req,res,next)=>{
      if(req.query.password==="123"){
          res.send({code:1})
      }
});
//添加用户
router.get("/createUser",createUser);
//获取所有用户
router.get("/getAllUser",getAllUser);
//删除用户
router.get("/remove",remove);
//修改个人信息
router.get("/amendUser",amendUser);
//个人提交记录
router.get("/addUserDetail",addUserDetail);
//获取个人消费记录
router.get("/singleDetail",singleDetail)
module.exports = router;
