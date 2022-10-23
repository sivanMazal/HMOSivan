import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { getAllCusts ,deleteCust, getAllVaccination} from "../action/users";
import { useEffect } from "react";

const Cust=(props)=>{
  //useEffect(() => { props.getAllVaccination() }, []);

  const {id} = useParams();
  let c = {...props.arr.find(x => x.id == id)};

  let nav=useNavigate();

  const remove=(e)=>
  {
      props.deleteCust(c.id);
      nav("/allCusts");
      e.preventDefault();

  }
 // useEffect(()=>{},[c])
  console.log(c)
    return(<>
    <div >
    
    <p>מספר זהות: {c.idNumber} </p>
    <p>שם פרטי: {c.name}</p>
    <p>שם משפחה : {c.lastName}</p>
    <p>מספר טלפון: {c.phoneNumber}</p>
    <p>מספר נייד: {c.mobilePhone}</p>
    <p>כתובת: {c.city} {c.street} {c.houseNumber}
    <p>תאריך לידה <input type="text" value={c.dateBirth}/> </p> 
 
</p>
<input type="button" value="מידע בנושא הקורונה" className="button" onClick={ ()=>nav("/coronaDetails/"+c.id) } /><br /> 

    <input type="button" value="מחק לקוח" className="button" onClick={remove} />         
     <input type="button" value=" עדכן לקוח" className="button" onClick={ ()=>nav("/updateCustomer/"+c.id) } /><br /> 
                 </div>

    </>)
    }

    const mapStateToProps = (state) => {
      return {
          arr: state.userArr,
          vaccination:state.vaccination  
            }
  }
  export default connect(mapStateToProps, { getAllCusts,deleteCust ,getAllVaccination})(Cust);
