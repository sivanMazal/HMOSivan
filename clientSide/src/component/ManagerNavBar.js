import { Link } from "react-router-dom";
import "./NavBar.css"
import Exit from "./Exit";
export default function ManagerNavBar() {
    return(
    <> <nav className="nav-link">
           <Link to="about" className="link"> אודות</Link>
           
            <Link to="addProduct" className="link">הוספת מוצר</Link>
         
            <Link to="allProduct" className="link">כל המוצרים </Link>
          
       
            
            <Exit />

   
    </nav>
 
   
    </>
    )
}