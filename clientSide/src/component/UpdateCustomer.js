import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateCustomer} from "../action/users";
import { useEffect } from "react";

const UpdateCustomer=(props)=>{
  const {id} = useParams();
  let c = {...props.arr.find(x => x.id == id)};

  let nav=useNavigate();
  let r={

    id:c.id,
    idNumber:"",
    name:"",
    lastName:"",
    dateBirth:new Date(),
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
  useEffect(()=>{},[c])
  console.log(c)
    return(<>
     
       <h1>עדכון חבר קופ"ח</h1>
       <form>
       <label className="buttonLogin">שם </label> <input type="text" name="name"  onChange={change}  className="buttonLogin" defaultValue={c.name}  />   <br/>
       <label className="buttonLogin">שם משפחה </label><input type="text" name="lastName"  onChange={change}  className="buttonLogin"  defaultValue={c.lastName} /> <br/>

       <label className="buttonLogin">טלפון</label> <input type="number" name="phoneNumber" placeolder="טלפון" onChange={change}  className="buttonLogin"  defaultValue={c.phoneNumber} /> <br/>
       <label className="buttonLogin">טלפון נייד</label> <input type="number" name="mobilePhone" placeolder="טלפון נייד" onChange={change}  className="buttonLogin"  defaultValue={c.mobilePhone} /> <br/>

       <label className="buttonLogin" >רחוב</label> <input type="text" name="street" placeolder="רחוב" onChange={change}  className="buttonLogin"  defaultValue={c.street} /> <br/>
       <label className="buttonLogin">עיר</label>  <input type="text" name="city" placeolder="עיר" onChange={change}  className="buttonLogin"  defaultValue={c.city}/> <br/>
           <label className="buttonLogin">מספר בית</label><input type="number" name="houseNumber" placeolder="מספר בית" onChange={change}  className="buttonLogin"  defaultValue={c.houseNumber}/>
         <label className="buttonLogin">תאריך לידה הניתן לשינוי</label>   <input type="date" name="dateBirth" placeolder="תאריך לידה" onChange={change}  defaultValue={c.dateBirth} className="buttonLogin"/><br/> 
        <input type="text" value={c.dateBirth}/> 
           <input type="button" value=" עדכן לקוח" className="button"  onClick={()=>{alert(r.id);props.updateCustomer(r); nav("/allCusts")}} /><br /> 

       </form>

       </>

   
   
    )
    }

    const mapStateToProps = (state) => {
      return {
          arr: state.userArr,
      }
  }
  export default connect(mapStateToProps, { updateCustomer })(UpdateCustomer);
