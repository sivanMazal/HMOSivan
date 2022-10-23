const express=require("express");
const vaccinationRouter=express.Router();
const {mysqlConnection,promiseQuery}=require("../sql");

//הצגת כל המוצרים
vaccinationRouter.get('/getAllVaccination/:id',async (req, res) => { //V
    const id=req.params.id;
  const query=`SELECT * FROM vaccination where custId=${id}`;
try{
    const rows=await promiseQuery(query);
    res.send(rows);
}
catch(e){
    res.status(500).send(e.sqlMessage);
}
})


module.exports={vaccinationRouter};


