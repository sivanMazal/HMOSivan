const express=require("express");
const userRouter=express.Router();
const {mysqlConnection,promiseQuery}=require("../sql");


//הצגת כל המשתמשים
userRouter.get('/getAllCust', async(req, res) => { //V
    const query=`SELECT * FROM customer`;
    try{
        const rows=await promiseQuery(query);
        res.send(rows);

    }
      
         catch(err)
          { 
             res.status(500).send(err.sqlMessage); console.log(err) ;
          }
   
})

//הוספת משתמש
userRouter.post("/addCust",async (req,res)=>{  //V
    const t=req.body;
    console.log(t)
    const queryString=`insert into customer
    (id,idNumber,name,lastName,phoneNumber,mobilePhone,city,street,houseNumber)
    VALUES (0,'${t.idNumber}','${t.name}','${t.lastName}','${t.phoneNumber}','${t.mobilePhone}','${t.city}','${t.street}',${t.houseNumber})`
    try{
    const result=await promiseQuery(queryString);
    res.send({code:result.insertId});
    
    }
    catch(err)
    {
        res.status(500).send(err.sqlMessage);

    }
  
})
//מחיקת לקוח
userRouter.delete('/deleteCust/:id',async(req,res)=>{   //V
    const id=req.params.id;
    const query=`delete from customer where id=${id}`;
    try{
        const del=await promiseQuery(query);
        res.send(del);
    }
    catch(err){
        //console.log("bh");
        res.status(500).send(err.sqlMessage);
    }
});

//עדכון פרטי הלקוח
userRouter.put("/updateCust/:id",async(req,res)=>{   //V
    const p=req.params;
    const id=p.id;
    const b=req.body;
    console.log(id);
    const query=`update customer
    set id=${b.id},'${b.idNumber}',name='${b.name}',lastName='${b.lastName}',phoneNumber='${b.phoneNumber}',mobilePhone='${b.mobilePhone}',city='${b.city}',
    street='${b.street}',houseNumber=${b.houseNumber}
    where id=${id}`
    try{
        const rows=await promiseQuery(query);
        res.send({ id: result.insertId });
    }
        catch(err)
        {
            res.status(500).send(err.sqlMessage);
        }
})


module.exports={userRouter};