import { useEffect } from "react";
import { getAllVaccination} from "../action/users";
import { connect } from "react-redux";
import './Product.css'
import './all.css'
import AllCusts from "./AllCusts";
import { useNavigate, useParams } from "react-router-dom";
import Vaccination from "./Vaccination";
import Recovery from "./Recovery";

const CoronaDetails = (props) => {
    let nav=useNavigate();
    const {id} = useParams();
    let item = {...props.arr.find(x => x.id == id)};
   return(
    <>
         {console.log(item.id)}
           <Vaccination v={item.id}/><br/>
           <Recovery r={item.id}/><br/>
    </>
   )     


  
   

}

const mapStateToProps = (state) => {
    return {
        arr: state.userArr
    }
}
export default connect(mapStateToProps, { getAllVaccination })(CoronaDetails);

