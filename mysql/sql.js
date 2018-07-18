const USER_SELECT_ID="USER_SELECT_ID";
const USER_SELECT_NAME="USER_SELECT_NAME";
const USER_INSERT_ALL="USER_INSERT_ALL";
const USER_SELECT_ALLUSER="USER_SELECT_ALLUSER";
const USER_DELETE_ID="USER_DELETE_ID";
const USER_UPDATE_ID="USER_UPDATE_ID";
const USER_SELECT_USERID="USER_SELECT_USERID";
const USER_INSERT_INFO="USER_INSERT_INFO";
const USER_SELECT_SINGLE="USER_SELECT_SINGLE";
module.exports={
    [USER_SELECT_ID]:"select id from userInfo where id=?",
    [USER_SELECT_NAME]:"select name from userInfo where name=?",
    [USER_INSERT_ALL]:"insert into userInfo (name,id,money) values (?,?,?)",
    [USER_SELECT_ALLUSER]:"select * from userInfo",
    [USER_DELETE_ID]:"delete from userInfo where id=?",
    [USER_UPDATE_ID]:"update userInfo set name=? where id=?",
    [USER_SELECT_USERID]:"select sum(singlemoney) as singlemoney from logs where id=?",
    [USER_INSERT_INFO]:"insert into logs (time,singlemoney,id,dowhat) values(?,?,?,?)",
    [USER_SELECT_SINGLE]:"select * from logs where id=?"
}