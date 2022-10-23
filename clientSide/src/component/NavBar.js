import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
    return <nav  className="nav-link">

           <Link to="allCusts" className="link"> הלקוחות שלי</Link>

       
        
            <Link to="addCust" className="link">הוספת לקוח</Link>

         
      
       
   
       
         
    </nav>
}