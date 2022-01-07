const mysql=require("mysql");
const promise=require("bluebird");
const Connection=require("mysql/lib/Connection");
const dbinfo={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"p1",
};
const addMessage=async(message)=>{

const Connection=mysql.createConnection(dbinfo);
await Connection.connectAsync();

let sql='insert into Message values (?)';

await Connection.queryAsync(sql,[message.messagebody]);
await Connection.endAsync();
};

const message={
    messagebody:"hello!Aastha here"
};

const showMessage=async()=>{
const connection=mysql.createConnection(dbinfo);
console.log(list);
await connection.endAsync();
return list;

};

showMessage();