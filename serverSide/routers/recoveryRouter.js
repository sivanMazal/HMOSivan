const express=require("express");
const recoveryRouter=express.Router();
const {mysqlConnection,promiseQuery}=require("../sql");

recoveryRouter.get('/getAllVRecovery/:id',async (req, res) => { //V
    const id=req.params.id;
  const query=`SELECT * FROM recovery where custId=${id}`;
try{
    const rows=await promiseQuery(query);
    res.send(rows);
}
catch(e){
    res.status(500).send(e.sqlMessage);
}
})


module.exports={recoveryRouter};


