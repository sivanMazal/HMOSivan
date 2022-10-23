import { useEffect } from "react";
import {  getAllVaccination} from "../action/users";
import { connect } from "react-redux";
import './Product.css'
import AllCusts from "./AllCusts";
import { useNavigate } from "react-router-dom";

const Vaccination = (props) => {
    let nav=useNavigate();
    useEffect(() => { props.getAllVaccination(props.v) }, []);

    return (<>
        
        <p>תאריך קבלת החיסון והיצרן</p>
            {props.vaccination.length>0?props.vaccination.map(item => {
                return <>
                    <p key={item.id}  >
                    {/* <div>{item.receivingDate}  {item.vaccineManufacturer}</div> */}
                  <p>{item.receivingDate} {item.vaccineManufacturer}</p>


                    </p>
                </>
            }):null}
    
        
    </>)  


  
}
   const mapStateToProps = (state) => {
    return {
        vaccination: state.vaccination
    }
   
}
export default connect(mapStateToProps, {getAllVaccination})(Vaccination);



