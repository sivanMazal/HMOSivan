import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {addCust} from "../action/users";
//import './Button.css'
import './Form.css'


const AddCust=(props)=>
{
    let nav=useNavigate();

    let r={
        idNumber:"",
        name:"",
        lastName:"",
        dateBirth:"",
        phoneNumber:"",
        mobilePhone:"",
        city:"",
        street:"",
        houseNumber:0,
  }
 const change=(e)=>
   {
    let { name, value, type } = e.target;
    if (type == "number")
        value = +value;
        r[name] = value;
   }
   return(
       <>
       <h1>הוספת חבר קופ"ח</h1>
       <form>
       <label className="buttonLogin">שם </label> <input type="text" name="name"  onChange={change}  className="buttonLogin" />   <br/>
       <label className="buttonLogin">שם משפחה </label><input type="text" name="lastName"  onChange={change}  className="buttonLogin" /> <br/>

       <label className="buttonLogin">טלפון</label> <input type="number" name="phoneNumber" placeolder="טלפון" onChange={change}  className="buttonLogin"/> <br/>
       <label className="buttonLogin">טלפון נייד</label> <input type="number" name="mobilePhone" placeolder="טלפון נייד" onChange={change}  className="buttonLogin"/> <br/>

           <input type="text" name="street" placeolder="רחוב" onChange={change}  className="buttonLogin"/> <label className="buttonLogin">רחוב</label><br/>
           <input type="text" name="city" placeolder="עיר" onChange={change}  className="buttonLogin"/> <label className="buttonLogin">עיר</label><br/>
           <input type="number" name="houseNumber" placeolder="מספר בית" onChange={change}  className="buttonLogin"/> <label className="buttonLogin">מספר בית</label><br/>
           <input type="date" name="dateBirth" placeolder="תאריך לידה" onChange={change}  className="buttonLogin"/> <label className="buttonLogin">תאריך לידה</label><br/>
           <input type="button" onClick={()=>{props.addCust(r); nav("/allCusts")} }   className="buttonLogin" value="הוספה"/><br/><br/>

       </form>
       </>
   )
}


export default connect(null, { addCust })(AddCust);