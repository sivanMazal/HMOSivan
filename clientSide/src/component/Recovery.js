import { useEffect } from "react";
import {  getAllVRecovery} from "../action/users";
import { connect } from "react-redux";
import './Product.css'
import { useNavigate } from "react-router-dom";

const Vaccination = (props) => {
    let nav=useNavigate();
    useEffect(() => { props.getAllVRecovery(props.r) }, []);

    return (<>
        <p>תאריך קבלת תוצאה חיובית ותאריך ההחלמה</p>
            {props.recovery.length>0?props.recovery.map(item => {
                return <>
                    <div key={item.id}  >
                    <div> {item.positiveResult}  {item.recoveryDate}</div><br/>
    
                    </div>
                </>
            }):null}
    
        
    </>)  


  
}
   const mapStateToProps = (state) => {
    return {
        recovery: state.recovery
    }
   
}
export default connect(mapStateToProps, {getAllVRecovery})(Vaccination);



