import { useEffect } from "react";
import { getAllCusts ,deleteCust, updateCustomer} from "../action/users";
import { connect } from "react-redux";
import './Product.css'

import { useNavigate } from "react-router-dom";
const AllCusts = (props) => {
    useEffect(() => { props.getAllCusts() }, []);
    let nav=useNavigate();

return (<>
    {console.log(props.arr)}
        {props.arr.length>0?props.arr.map(item => {
            return <>
                <div key={item.id}  >
                <div className="task" onClick={()=>(nav("/cust/"+item.id))}>{item.name}  {item.lastName}</div>

                </div>
            </>
        }):null}
                        <input type="button" onClick={()=>nav("/addCust") }  className="buttonLogin" value="הוספת לקוח"/><br/><br/>   
</>)   

}
const mapStateToProps = (state) => {
    return {
        arr: state.userArr
    }
}
export default connect(mapStateToProps, { getAllCusts,deleteCust,updateCustomer })(AllCusts);

