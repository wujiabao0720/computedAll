let mysql= require("mysql");

let createConnection=()=>{
    let connection=mysql.createConnection({
           host:"140.143.201.230",
           user:"root",
           password:"root",
           database:"computed"
    });
    return connection;
};

let select=(sql,query)=>{
     let connection=createConnection();
     return new Promise((resolve,reject)=>{
        connection.query(sql,query,(err,info)=>{
            connection.end();
              if(!err){
                  resolve(info)
              }
        })
     })
};
let insert=(sql,query)=>{
    let connection=createConnection();
    return new Promise((resolve,reject)=>{
        connection.query(sql,query,(err,info)=>{
            connection.end();
            if(!err){
                resolve(info)
            }
      })
    })
}
module.exports={
    select,
    insert
}